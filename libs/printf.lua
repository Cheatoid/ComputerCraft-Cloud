local print, string_format = print, string.format
_G.printf = function(...) print(string_format(...)) end
