_G.runlib = function(libraryId)
  assert(type(libraryId) == "string", "Library ID argument is missing")
  local author, libraryName = string.match(libraryId, "^([%w-]+)/([%w-]+)$")
  assert(libraryName, "Library ID must be in 'AuthorName/LibraryName' format")
  local request = http.get(string.format("https://raw.github.com/%s/ComputerCraft-Cloud/main/libs/%s.lua", author, libraryName))
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
