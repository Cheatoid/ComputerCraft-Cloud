local function setup_table(t, out, lookup)
  t = t or _G
  lookup = lookup or {}
  lookup[t] = true
  if not out then
    out = {
      export = function(exports)
        for name, value in next, exports do
          t[name] = value
        end
      end
    }
    out._G = out
  end
  for k, v in next, t do
    if type(v) == 'table' then
      if not lookup[v] then
        lookup[v] = true
        setup_table(v, lookup, {}) -- skip metatable setup
        lookup[v] = nil
      end
    else
      out[k] = v
    end
  end
  return out
end

local isolated_global = setup_table()
_G.import = function(fileName)
  local result = { pcall(loadfile, fileName, 'bt', isolated_global) }
  assert(result[1], result[2])
  table.remove(result, 1)
  result = { pcall(result[1]) }
  assert(result[1], result[2])
  table.remove(result, 1)
  return result
end
