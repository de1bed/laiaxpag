import json, pathlib
root = pathlib.Path(r"c:\Users\David Rocha\Downloads\laiaxpag\laiaxpag\assets\geo")
src = root / "world-land-110m.geojson"
out = root / "world-land-inline.js"
data = json.loads(src.read_text(encoding="utf-8"))
js = "window.__LAIAX_WORLD_LAND=" + json.dumps(data, separators=(",", ":")) + ";"
out.write_text(js, encoding="utf-8")
print("wrote", out, out.stat().st_size, "bytes")
