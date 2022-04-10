assert(term.isColor(), "colorful terminal is required (use advanced computer/turtle)")
assert(http and http.websocket, "http/websocket extension is required")

term.setTextColor(colors.lightBlue)
term.setBackgroundColor(colors.black)
term.clear()
term.setCursorPos(1, 1)

-- Prompt username
print("Enter your nickname (letters/digits, max 12):")
term.setTextColor(colors.lime)
local username = read()

-- Connect to place server via websocket
local ws = assert(http.websocket("ws://cc-place.herokuapp.com"))
local send = function(format, ...)
    return ws.send(string.pack("!1<" .. format, ...), true)
end

term.setTextColor(colors.white)
term.setBackgroundColor(colors.black)
term.clear()

local termW, termH = term.getSize()
local emptyLine = string.rep(" ", termW)

-- clear term, why not term.clear?
for i = 1, termH do
    term.setCursorPos(1, i)
    term.write(emptyLine)
end

termW, termH = termW - 2, termH - 2
local termArea = termW * termH
emptyLine = string.rep(" ", termW)

-- Send 1, 1, term width, term height, username
-- todo: find out the first 1s
send("BBBBs1", 1, 1, termW, termH, username)

local keybinds = {
    [keys.left] = function()
        return send("B", 2) -- move screen to the left
    end,
    [keys.right] = function()
        return send("B", 3) -- move screen to the right
    end,
    [keys.up] = function()
        return send("B", 4) -- move screen up
    end,
    [keys.down] = function()
        return send("B", 5) -- move screen down
    end,
    [keys.leftShift] = function(isHeld)
        if isHeld then
            return
        end
        return send("B", 6)
    end,
    [keys.leftCtrl] = function(isHeld)
        if isHeld then
            return
        end
        return send("B", 7)
    end,
    [keys.space] = function(isHeld)
        if isHeld then
            return
        end
        return send("B", 8)
    end,
    [keys.leftAlt] = function(isHeld)
        if isHeld then
            return
        end
        return send("B", 9)
    end
}
-- Link other keys
keybinds[keys.a] = keybinds[keys.left]
keybinds[keys.d] = keybinds[keys.right]
keybinds[keys.w] = keybinds[keys.up]
keybinds[keys.s] = keybinds[keys.down]
keybinds[keys.rightShift] = keybinds[keys.leftShift]
keybinds[keys.rightCtrl] = keybinds[keys.leftCtrl]
keybinds[keys.rightAlt] = keybinds[keys.leftAlt]
keybinds[keys.f] = keybinds[keys.leftAlt]

local positionX, positionY
local eventCallbacks = {
    key = function(key, isHeld)
        local keybind = keybinds[key]
        if keybind then
            return keybind(isHeld)
        end
    end,

    mouse_click = function(button, mouseX, mouseY)
        if button == 2 then -- right click
            positionX, positionY = mouseX, mouseY
        end
        if button == 1 then -- left click
            return send("B", 8)
        end
        if button == 3 then -- middle click
            return send("B", 9)
        end
    end,

    mouse_drag = function(button, mouseX, mouseY)
        if button == 2 and positionY then
            if positionX ~= mouseX then
                send("B", positionX < mouseX and 2 or 3)
                positionX = mouseX
            end
            if positionY ~= mouseY then
                send("B", positionY < mouseY and 4 or 5)
                positionY = mouseY
            end
        end
    end,

    mouse_up = function(button)
        if button == 2 then
            positionX, positionY = nil
        end
    end,

    mouse_scroll = function(y)
        return send("B", y > 0 and 7 or 6)
    end,

    websocket_closed = function()
        return error("WebSocket disconnected", -1)
    end,

    websocket_message = function(url, content)
        term.setCursorPos(2, 1)
        local absoluteX, absoluteY, relativeX, relativeY, selectedColor, positionColor, placedBy = string.unpack("!1<HHBBc1c1z", string.sub(content, termArea + 1))
        term.write(string.format("X%d Y%d%s", absoluteX, absoluteY, emptyLine))

        local K = 2
        for i = 1, termArea, termW do
            local M = string.sub(content, i, i + termW - 1)
            term.setCursorPos(2, K)
            term.blit(emptyLine, M, M)
            K = K + 1
        end

        term.setCursorPos(math.min(math.max(relativeX + 2, 2), termW + 1), math.min(math.max(relativeY + 2, 2), termH + 1))
        term.blit("X", (positionColor == "7" or positionColor == "f") and "0" or "f", positionColor)
        term.setCursorPos(1, termH + 2)
        term.blit(" ", selectedColor, selectedColor)
        term.setTextColor(1)
        term.write(" " .. placedBy .. emptyLine)
    end
}
while true do
    local ev = {os.pullEvent()}
    local callback = eventCallbacks[ev[1]]
    if callback then
        callback(unpack(ev, 2))
    end
end
