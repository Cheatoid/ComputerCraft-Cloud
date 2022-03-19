local string_pack, string_unpack = string.pack, string.unpack
local math_type, utf8_len, bit_rshift = function(n)
    if type(n) == "number" then
        return n == n and n ~= math.huge and n ~= -math.huge and n == math.floor(n) and n % 1 == 0 and "integer" or "float"
    end
    return nil
end, utf8.len, bit32 and bit32.rshift or bit.blogic_rshift
local table_concat, table_unpack = table.concat, table.unpack or unpack
local string_sub = string.sub
local ____type, ____pcall, select = _G.type, _G.pcall, _G.select
local encode_value
local function is_an_array(value)
    local expected = 1
    for k in pairs(value) do
        if k ~= expected then
            return false
        end
        expected = expected + 1
    end
    return true
end
local encoder_functions = {
    ["nil"] = function() return string_pack("B", 192) end,
    boolean = function(value) return value and string_pack("B", 195) or string_pack("B", 194) end,
    number = function(value)
        if math_type(value) == "integer" then
            if value >= 0 then
                if value <= 127 then
                    return string_pack("B", value)
                end
                if value <= 255 then
                    return string_pack("BB", 204, value)
                end
                if value <= 65535 then
                    return string_pack(">BI2", 205, value)
                end
                if value <= 4294967295 then
                    return string_pack(">BI4", 206, value)
                end
                return string_pack(">BI8", 207, value)
            end
            if value >= -32 then
                return string_pack("B", 224 + (value + 32))
            end
            if value >= -128 then
                return string_pack("Bb", 208, value)
            end
            if value >= -32768 then
                return string_pack(">Bi2", 209, value)
            end
            if value >= -2147483648 then
                return string_pack(">Bi4", 210, value)
            end
            return string_pack(">Bi8", 211, value)
        end
        local test = string_unpack(
            "f",
            string_pack("f", value)
        )
        if test == value then
            return string_pack(">Bf", 202, value)
        end
        return string_pack(">Bd", 203, value)
    end,
    string = function(value)
        local len = #value
        if utf8_len(value) then
            if len < 32 then
                return string_pack("B", 160 + len) .. value
            end
            if len < 256 then
                return string_pack(">Bs1", 217, value)
            end
            if len < 65536 then
                return string_pack(">Bs2", 218, value)
            end
            return string_pack(">Bs4", 219, value)
        end
        if len < 256 then
            return string_pack(">Bs1", 196, value)
        end
        if len < 65536 then
            return string_pack(">Bs2", 197, value)
        end
        return string_pack(">Bs4", 198, value)
    end,
    table = function(value)
        if is_an_array(value) then
            local elements = {}
            for i, v in pairs(value) do
                elements[i] = encode_value(v)
            end
            local length = #elements
            if length < 16 then
                return string_pack(">B", 144 + length) .. table_concat(elements)
            end
            if length < 65536 then
                return string_pack(">BI2", 220, length) .. table_concat(elements)
            end
            return string_pack(">BI4", 221, length) .. table_concat(elements)
        end
        local elements = {}
        for k, v in pairs(value) do
            elements[#elements + 1] = encode_value(k)
            elements[#elements + 1] = encode_value(v)
        end
        local length = bit_rshift(#elements, 1)
        if length < 16 then
            return string_pack(">B", 128 + length) .. table_concat(elements)
        end
        if length < 65536 then
            return string_pack(">BI2", 222, length) .. table_concat(elements)
        end
        return string_pack(">BI4", 223, length) .. table_concat(elements)
    end
}
encode_value = function(value) return encoder_functions[____type(value)](value) end
local function encode(...)
    local data = {}
    for i = 1, select("#", ...) do
        data[#data + 1] = encode_value(select(i, ...))
    end
    return table_concat(data)
end
local decode_value
local function decode_array(data, position, length)
    local elements = {}
    local value
    for i = 1, length do
        value, position = decode_value(data, position)
        elements[i] = value
    end
    return elements, position
end
local function decode_map(data, position, length)
    local elements = {}
    local key
    local value
    for _ = 1, length do
        key, position = decode_value(data, position)
        value, position = decode_value(data, position)
        elements[key] = value
    end
    return elements, position
end
local decoder_functions = {
    [192] = function(_, position) return nil, position end,
    [194] = function(_, position) return false, position end,
    [195] = function(_, position) return true, position end,
    [196] = function(data, position) return string_unpack(">s1", data, position) end,
    [197] = function(data, position) return string_unpack(">s2", data, position) end,
    [198] = function(data, position) return string_unpack(">s4", data, position) end,
    [202] = function(data, position) return string_unpack(">f", data, position) end,
    [203] = function(data, position) return string_unpack(">d", data, position) end,
    [204] = function(data, position) return string_unpack(">B", data, position) end,
    [205] = function(data, position) return string_unpack(">I2", data, position) end,
    [206] = function(data, position) return string_unpack(">I4", data, position) end,
    [207] = function(data, position) return string_unpack(">I8", data, position) end,
    [208] = function(data, position) return string_unpack(">b", data, position) end,
    [209] = function(data, position) return string_unpack(">i2", data, position) end,
    [210] = function(data, position) return string_unpack(">i4", data, position) end,
    [211] = function(data, position) return string_unpack(">i8", data, position) end,
    [217] = function(data, position) return string_unpack(">s1", data, position) end,
    [218] = function(data, position) return string_unpack(">s2", data, position) end,
    [219] = function(data, position) return string_unpack(">s4", data, position) end,
    [220] = function(data, position)
        local length
        length, position = string_unpack(">I2", data, position)
        return decode_array(data, position, length)
    end,
    [221] = function(data, position)
        local length
        length, position = string_unpack(">I4", data, position)
        return decode_array(data, position, length)
    end,
    [222] = function(data, position)
        local length
        length, position = string_unpack(">I2", data, position)
        return decode_map(data, position, length)
    end,
    [223] = function(data, position)
        local length
        length, position = string_unpack(">I4", data, position)
        return decode_map(data, position, length)
    end
}
for i = 0, 127 do
    decoder_functions[i] = function(_, position) return i, position end
end
for i = 128, 143 do
    decoder_functions[i] = function(data, position) return decode_map(data, position, i - 128) end
end
for i = 144, 159 do
    decoder_functions[i] = function(data, position) return decode_array(data, position, i - 144) end
end
for i = 160, 191 do
    decoder_functions[i] = function(data, position)
        local length = i - 160
        return string_sub(data, position, position + length - 1), position + length
    end
end
for i = 224, 255 do
    decoder_functions[i] = function(_, position) return -32 + (i - 224), position end
end
decode_value = function(data, position)
    local byte
    local value
    byte, position = string_unpack("B", data, position)
    value, position = decoder_functions[byte](data, position)
    return value, position
end
local ____exports = {
    _AUTHOR = "Sebastian Steinhauer <s.steinhauer@yahoo.de>",
    _VERSION = "0.6.1",
    encode = function(...)
        local data = {}
        local ok
        for i = 1, select("#", ...) do
            local ____temp_0 = {____pcall(
                encode_value,
                select(i, ...)
            )}
            ok = ____temp_0[1]
            data[i] = ____temp_0[2]
            if not ok then
                return nil, "cannot encode MessagePack"
            end
        end
        return table_concat(data)
    end,
    encode_one = function(value)
        local ok, data = ____pcall(encode_value, value)
        if ok then
            return data
        end
        return nil, "cannot encode MessagePack"
    end,
    decode = function(data, position)
        local values = {}
        local value
        local ok
        position = position or 1
        while position <= #data do
            ok, value, position = unpack({____pcall(decode_value, data, position)})
            if ok then
                values[#values + 1] = value
            else
                return nil, "cannot decode MessagePack"
            end
        end
        return table_unpack(values)
    end,
    decode_one = function(data, position)
        local value
        local ok
        ok, value, position = unpack({____pcall(decode_value, data, position or 1)})
        if ok then
            return value, position
        end
        return nil, "cannot decode MessagePack"
    end
}
return ____exports
