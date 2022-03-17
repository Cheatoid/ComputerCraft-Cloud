let warnings = false; // Disable warn by default.
export = setmetatable({}, {
  __call: (arg: boolean | Array<string | colors.ColorSet>, noWrap?: boolean, bc?: colors.Color, fc?: colors.Color): void => {
    if (typeof arg == "boolean") {
      warnings = arg;
    } else if (warnings) { // Thankfully TS is smart, so it knows `arg` is not a boolean at this point (but an array).
      const [ofc, obc] = [term.getTextColor(), term.getBackgroundColor()];
      if (fc) term.setTextColor(fc);
      if (bc) term.setBackgroundColor(bc);
      const writer = noWrap ? term.write : write;
      for (const v of arg) { // This uses `ipairs` iterator, could use `pairs`, but I'm not worried about performance here.
        if (typeof v == "string") {
          writer(v);
        } else if (typeof v == "number") {
          term.setTextColor(v);
        }
      }
      if (!noWrap) {
        print();
      }
      if (fc) term.setTextColor(ofc);
      if (bc) term.setBackgroundColor(obc);
    }
  },
  __index: {
    disable: () => { warnings = false; },
    enable: () => { warnings = true; }
  },
  __newindex: () => error("cannot modify immutable `warn' table", 2),
  __metatable: false,
  __tostring: () => "warn"
}) as any as { // I do a lit *magic* to have rich IntelliSense :D
  /**
   * Disable warnings.
   */
  disable: (this: void) => void;
  /**
   * Enable warnings.
   */
  enable: (this: void) => void;
  /**
   * Enable/Disable warnings.
   * @param enable `true` to enable warnings; otherwise, `false` (default).
   */
  (this: void, enable: boolean): void;
  /**
   * Report a warning into terminal.
   * @param text List consisting of string and color set.
   * @param noWrap `true` to disable wrapping; otherwise, `false` (default).
   * @param bc Default background color.
   * @param fc Default text color.
   */
  (this: void, text: Array<string | colors.ColorSet>, noWrap?: boolean, bc?: colors.Color, fc?: colors.Color): void;
};
