// Sleight School — anims loader (chunked for deploy size)
(async function() {
  var N = 5;
  var code = "";
  for (var i = 0; i < N; i++) {
    var r = await fetch("anims/p" + i + ".js?v=2");
    if (!r.ok) { console.error("Failed to load anims chunk", i); return; }
    code += await r.text();
  }
  var s = document.createElement("script");
  s.text = code;
  document.head.appendChild(s);
})();
