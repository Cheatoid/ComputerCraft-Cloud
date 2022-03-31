# `hook` API
A simple CC Lua library for working with event system.  
Download and `require` [`"hook"`](out/hook.lua) file.

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
