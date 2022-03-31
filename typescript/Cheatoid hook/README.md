# `hook` API
A simple CC library for working with event system.

# Installation
Pick your approach...
<details><summary>Lua user, click here to expand instructions.</summary>

  1. [Download pre-compiled `hook.lua` file](out/hook.lua).
  2. Create a new startup script and then do `require("hook").run()`.
</details>

<details><summary>TypeScriptToLua user, click here to expand instructions.</summary>

Note: `hook` npm package will be available soon (as well as my own CC-TSTL template/declarations), but until then...
  1. Make use of https://github.com/MCJack123/cc-tstl-template.
  2. Download [hook.d.ts](src/hook.d.ts) and [hook.ts](src/hook.ts) files.
  3. Create a new startup script and then do:
     ```ts
     import * as hook from "./hook";
     hook.run();
     ```
</details>

## `add(eventName, id, callback)`
Insert (or replace an existing) hook.
1. `eventName: string`
    - Name of the event.
2. `id: string`
    - Unique identifier for this hook.
3. `callback: function`
    - Function to be invoked whenever the specified event occurs.

## `remove(eventName, id)`
Remove an existing hook (if found).
1. `eventName: string`
    - Name of the event.
2. `id: string`
    - Unique identifier of the hook to be removed.

## `single(eventName, callback)`
Create a once hook (fire-and-forget).
1. `eventName: string`
    - Name of the event.
2. `callback: function`
    - Function to be invoked once the specified event occurs.

## `run()`
Bootstrapper.
