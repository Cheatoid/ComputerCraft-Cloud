assert(http, "HTTP API is disabled")

local string_match, string_format, http_get, load, pcall = string.match, string.format, http.get, load or loadstring, pcall

--- Dynamically fetch and execute a Lua script (from GitHub repository).
---@param libraryId string Library identifier (in 'AuthorName:LibraryName' format).
_G.runlib = function(libraryId)
  assert(type(libraryId) == "string", "Library ID argument is missing")
  local author, libraryName = string_match(libraryId, "^([%w-]+):([%w-]+)$")
  assert(libraryName, "Library ID must be in 'AuthorName:LibraryName' format")
  local request = http_get(string_format("https://raw.github.com/%s/ComputerCraft-Cloud/main/libs/%s.lua", author, libraryName))
  if request then
    local contents = request.readAll()
    request.close()
    return pcall(load(contents))
  end
end

local libId = select(1, ...)
if libId then
  runlib(libId)
end
