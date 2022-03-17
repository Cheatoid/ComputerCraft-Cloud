local ____exports = {}
local warn = require("warn")
warn.enable()
warn(
    {
        "hello ",
        colors.magenta,
        "computer #" .. tostring(os.getComputerID())
    },
    nil,
    colors.gray,
    colors.yellow
)
warn(false)
warn({
    colors.red,
    "should not",
    colors.orange,
    " see this ",
    colors.yellow,
    "warning"
})
return ____exports
