// Original source code: https://github.com/kieselsteini/msgpack/blob/master/msgpack.lua
// Ported to TypeScript by Cheatoid.

const [string_pack, string_unpack] = [string.pack, string.unpack];
const [math_type, utf8_len] = [(n: number): 'integer' | 'float' | null => {
  if (typeof n == 'number') {
    return n == n && // nan
      n != math.huge && n != -math.huge && // inf / -inf
      n == math.floor(n) && n % 1 == 0 // integer
      ? 'integer'
      : 'float';
  }
  return null;
}, utf8.len];
const [table_concat, table_unpack] = [table.concat, table.unpack || unpack];
const string_sub = string.sub;
const [type, pcall, select] = [_G.type, _G.pcall, _G.select];

/*****************************************************************************
 * Encoder                                                                   *
 ****************************************************************************/

let encode_value: (this: void, value: any) => string; // forward declaration

function is_an_array(value: LuaTable) {
  let expected = 1;
  for (const [k] of value) {
    if (k != expected) {
      return false;
    }
    expected++;
  }
  return true;
}

const encoder_functions = <{ [type: string]: ((this: void, value?: any) => string) }><any>{
  nil: () => string_pack('B', 0xc0),
  boolean: (value: boolean) => value ? string_pack('B', 0xc3) : string_pack('B', 0xc2),
  number: (value: number) => {
    if (math_type(value) == 'integer') {
      if (value >= 0) {
        if (value <= 0x7f) {
          return string_pack('B', value);
        }
        if (value <= 0xff) {
          return string_pack('BB', 0xcc, value);
        }
        if (value <= 0xffff) {
          return string_pack('>BI2', 0xcd, value);
        }
        if (value <= 0xffffffff) {
          return string_pack('>BI4', 0xce, value);
        }
        return string_pack('>BI8', 0xcf, value);
      }
      if (value >= -32) {
        return string_pack('B', 0xe0 + (value + 32));
      }
      if (value >= -128) {
        return string_pack('Bb', 0xd0, value);
      }
      if (value >= -32768) {
        return string_pack('>Bi2', 0xd1, value);
      }
      if (value >= -2147483648) {
        return string_pack('>Bi4', 0xd2, value);
      }
      return string_pack('>Bi8', 0xd3, value);
    } else {
      const [test] = string_unpack('f', string_pack('f', value));
      if (test == value) { // check if we can use float
        return string_pack('>Bf', 0xca, value);
      }
      return string_pack('>Bd', 0xcb, value);
    }
  },
  string: (value: string) => {
    const len = value.length;
    if (utf8_len(value)) { // check if it is a real utf8 string or just byte junk
      if (len < 32) {
        return string_pack('B', 0xa0 + len) + value;
      }
      if (len < 256) {
        return string_pack('>Bs1', 0xd9, value);
      }
      if (len < 65536) {
        return string_pack('>Bs2', 0xda, value);
      }
      return string_pack('>Bs4', 0xdb, value);
    }
    if (len < 256) {
      return string_pack('>Bs1', 0xc4, value);
    }
    if (len < 65536) {
      return string_pack('>Bs2', 0xc5, value);
    }
    return string_pack('>Bs4', 0xc6, value);
  },
  table: (value: LuaTable<number, string>) => {
    if (is_an_array(<any>value)) { // it seems to be a proper Lua array
      const elements = [];
      for (const [i, v] of value) {
        elements[i - 1] = encode_value(v);
      }
      const length = elements.length;
      if (length < 16) {
        return string_pack('>B', 0x90 + length) + table_concat(elements);
      }
      if (length < 65536) {
        return string_pack('>BI2', 0xdc, length) + table_concat(elements);
      }
      return string_pack('>BI4', 0xdd, length) + table_concat(elements);
    }
    // encode as a map
    const elements = [];
    for (const [k, v] of value) {
      elements[elements.length] = encode_value(k);
      elements[elements.length] = encode_value(v);
    }
    const length = elements.length * 0.5; // note: integer division, not sure if it is really necessary
    if (length < 16) {
      return string_pack('>B', 0x80 + length) + table_concat(elements);
    }
    if (length < 65536) {
      return string_pack('>BI2', 0xde, length) + table_concat(elements);
    }
    return string_pack('>BI4', 0xdf, length) + table_concat(elements);
  }
};

encode_value = value => encoder_functions[type(value)](value);

function encode(...args: any[]): string { // note: apparently this is never used
  const data = [];
  for (const i of $range(1, select('#', ...args))) {
    data[data.length] = encode_value(select(i, ...args)[0]);
  }
  return table_concat(data);
}

/*****************************************************************************
 * Decoder                                                                   *
 ****************************************************************************/

let decode_value: (this: void, data: string, position: number) => LuaMultiReturn<[any, number]>; // forward declaration

function decode_array(this: void, data: string, position: number, length: number): LuaMultiReturn<[LuaTable, number]> {
  const elements = [];
  let value: any;
  for (const i of $range(1, length)) {
    [value, position] = decode_value(data, position);
    elements[i - 1] = value;
  }
  return $multi(<any>elements, position);
}

function decode_map(this: void, data: string, position: number, length: number): LuaMultiReturn<[LuaTable, number]> {
  const elements = {};
  let key: any, value: any;
  for (const i of $range(1, length)) {
    [key, position] = decode_value(data, position);
    [value, position] = decode_value(data, position);
    elements[key] = value;
  }
  return $multi(<any>elements, position);
}

const decoder_functions: Array<((this: void, data: string, position: number) => LuaMultiReturn<[any, number]>)> = <any>{
  0xc0: (_, position) => $multi(null, position),
  0xc2: (_, position) => $multi(false, position),
  0xc3: (_, position) => $multi(true, position),
  0xc4: (data, position) => string_unpack('>s1', data, position),
  0xc5: (data, position) => string_unpack('>s2', data, position),
  0xc6: (data, position) => string_unpack('>s4', data, position),
  0xca: (data, position) => string_unpack('>f', data, position),
  0xcb: (data, position) => string_unpack('>d', data, position),
  0xcc: (data, position) => string_unpack('>B', data, position),
  0xcd: (data, position) => string_unpack('>I2', data, position),
  0xce: (data, position) => string_unpack('>I4', data, position),
  0xcf: (data, position) => string_unpack('>I8', data, position),
  0xd0: (data, position) => string_unpack('>b', data, position),
  0xd1: (data, position) => string_unpack('>i2', data, position),
  0xd2: (data, position) => string_unpack('>i4', data, position),
  0xd3: (data, position) => string_unpack('>i8', data, position),
  0xd9: (data, position) => string_unpack('>s1', data, position),
  0xda: (data, position) => string_unpack('>s2', data, position),
  0xdb: (data, position) => string_unpack('>s4', data, position),
  0xdc: (data, position) => {
    let length: number;
    [length, position] = string_unpack('>I2', data, position);
    return decode_array(data, position, length);
  },
  0xdd: (data, position) => {
    let length: number;
    [length, position] = string_unpack('>I4', data, position);
    return decode_array(data, position, length);
  },
  0xde: (data, position) => {
    let length: number;
    [length, position] = string_unpack('>I2', data, position);
    return decode_map(data, position, length);
  },
  0xdf: (data, position) => {
    let length: number;
    [length, position] = string_unpack('>I4', data, position);
    return decode_map(data, position, length);
  },
};

// add fix-array, fix-map, fix-string, fix-int stuff
for (const i of $range(0x00, 0x7f)) {
  decoder_functions[i - 1] = (_, position) => $multi(i, position);
}
for (const i of $range(0x80, 0x8f)) {
  decoder_functions[i - 1] = (data, position) => decode_map(data, position, i - 0x80);
}
for (const i of $range(0x90, 0x9f)) {
  decoder_functions[i - 1] = (data, position) => decode_array(data, position, i - 0x90);
}
for (const i of $range(0xa0, 0xbf)) {
  decoder_functions[i - 1] = (data, position) => {
    const length = i - 0xa0;
    return $multi(string_sub(data, position, position + length - 1), position + length);
  };
}
for (const i of $range(0xe0, 0xff)) {
  decoder_functions[i - 1] = (_, position) => $multi(-32 + (i - 0xe0), position);
}
decode_value = (data, position) => {
  let byte: number, value: any;
  [byte, position] = string_unpack('B', data, position);
  [value, position] = decoder_functions[byte](data, position);
  return $multi(value, position);
};

/*****************************************************************************
 * Interface                                                                 *
 ****************************************************************************/

export = {
  _AUTHOR: 'Sebastian Steinhauer <s.steinhauer@yahoo.de>',
  _VERSION: '0.6.1',

  /**
   * Primary encode function.
   */
  encode: (...args: any[]): LuaMultiReturn<[null, string] | [string]> => {
    const data = [];
    let ok: boolean;
    for (const i of $range(1, select('#', ...args))) {
      [ok, data[i - 1]] = pcall(encode_value, select(i, ...args)[0]);
      if (!ok) {
        return $multi(null, 'cannot encode MessagePack');
      }
    }
    return $multi(table_concat(data));
  },

  /**
   * Encode just one value.
   */
  encode_one: (value: any): LuaMultiReturn<[null, string] | [string]> => {
    const [ok, data] = pcall(encode_value, value);
    if (ok) {
      return $multi(data);
    }
    return $multi(null, 'cannot encode MessagePack');
  },

  /**
   * Primary decode function.
   */
  decode: (data: string, position?: number): LuaMultiReturn<[null, string] | [...any[]]> => {
    const values = [];
    let value: any, ok: boolean;
    position = position || 1; //position ??= 1;
    while (position <= data.length) {
      [ok, value, position] = <LuaMultiReturn<[boolean, any, number]>><any>pcall(decode_value, data, position);
      if (ok) {
        values[values.length] = value;
      } else {
        return $multi(null, 'cannot decode MessagePack');
      }
    }
    return table_unpack(values);
  },

  /**
   * Decode just one value.
   */
  decode_one: (data: string, position?: number): LuaMultiReturn<[null, string] | [any, number]> => {
    let value: any, ok: boolean;
    [ok, value, position] = <LuaMultiReturn<[boolean, any, number]>><any>pcall(decode_value, data, position || 1);
    if (ok) {
      return $multi(value, position);
    }
    return $multi(null, 'cannot decode MessagePack');
  }
};
