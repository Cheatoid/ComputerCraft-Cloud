# `warn` API
A simple CC Lua library for reporting warnings into terminal.  
Download and `require` [`"warn"`](out/warn.lua) file.  
Warnings are disabled by default.

## `warn(text, noWrap?, bc?, fc?)`
Report a warning into terminal.
1. `text: { ...string|color }`
    - List consisting of string and color set.
2. `noWrap?: boolean`
    - `true` to disable wrapping; otherwise, `false` (default).
3. `bc?: color`
    - Default background color.
4. `fc?: color`
    - Default text color.

## `warn(enable)`
Enable/Disable warnings.
1. `enable: boolean`
    - `true` to enable warnings; otherwise, `false` (default).

## `warn.disable()`
Disable warnings.

## `warn.enable()`
Enable warnings.
