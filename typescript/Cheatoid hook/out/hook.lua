local ____exports = {}
local hooks = {}
function ____exports.add(eventName, id, callback)
    local e = hooks[eventName] or ({})
    hooks[eventName] = e
    e[id] = callback
end
function ____exports.remove(eventName, id)
    local e = hooks[eventName]
    if e then
        e[id] = nil
    end
end
local ____tostring, string_sub, coroutine_yield = _G.tostring, string.sub, coroutine.yield
function ____exports.single(eventName, callback)
    local id = "singlehook: " .. string_sub(
        ____tostring({}),
        8
    )
    ____exports.add(
        eventName,
        id,
        function(...)
            ____exports.remove(eventName, id)
            callback(...)
        end
    )
end
local function call(eventName, ...)
    local e = hooks[eventName]
    if e then
        for _, callback in pairs(e) do
            callback(...)
        end
    end
end
local callerSource = debug.getinfo(2).source
local running = false
function ____exports.run()
    if running then
        error("hook is already running", 2)
    end
    running = true
    parallel.waitForAny(
        function()
            while true do
                call(coroutine_yield())
            end
        end,
        function()
            if callerSource == "@bios.lua" then
                os.run(
                    {},
                    term.isColor() and settings.get("bios.use_multishell") and "rom/programs/advanced/multishell.lua" or "rom/programs/shell.lua"
                )
                os.run({}, "rom/programs/shutdown.lua")
            else
                shell.run(multishell and "multishell" or "shell")
            end
        end
    )
end
return ____exports
