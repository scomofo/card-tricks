// Sleight School anims loader
(async function() {
  var N = 16;
  var code = "";
  for (var i = 0; i < N; i++) {
    var r = await fetch("anims/p" + i + ".js?v=3");
    if (!r.ok) { console.error("anims chunk fail", i); return; }
    code += await r.text();
  }
  var s = document.createElement("script");
  s.text = code;
  document.head.appendChild(s);
})();
