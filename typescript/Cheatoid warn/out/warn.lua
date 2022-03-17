local warnings = false
local ____exports = setmetatable(
    {},
    {
        __call = function(____, arg, noWrap, bc, fc)
            if type(arg) == "boolean" then
                warnings = arg
            elseif warnings then
                local ofc, obc = term.getTextColor(), term.getBackgroundColor()
                if fc then
                    term.setTextColor(fc)
                end
                if bc then
                    term.setBackgroundColor(bc)
                end
                local writer = noWrap and term.write or write
                for ____, v in ipairs(arg) do
                    if type(v) == "string" then
                        writer(v)
                    elseif type(v) == "number" then
                        term.setTextColor(v)
                    end
                end
                if not noWrap then
                    print()
                end
                if fc then
                    term.setTextColor(ofc)
                end
                if bc then
                    term.setBackgroundColor(obc)
                end
            end
        end,
        __index = {
            disable = function()
                warnings = false
            end,
            enable = function()
                warnings = true
            end
        },
        __newindex = function() return error("cannot modify immutable `warn' table", 2) end,
        __metatable = false,
        __tostring = function() return "warn" end
    }
)
return ____exports
