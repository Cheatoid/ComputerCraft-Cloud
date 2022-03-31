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
local function run(eventName, ...)
    local e = hooks[eventName]
    if e then
        for _, callback in pairs(e) do
            callback(...)
        end
    end
end
parallel.waitForAny(
    function()
        while true do
            run(coroutine_yield())
        end
    end,
    function()
    end
)
return ____exports
