const CACHE = 'sleight-school-v2';
const ASSETS = ['./', './index.html', './styles.css', './anims.js', './app.js', './manifest.json'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});

// Network-first: a merged update reaches every visitor on their next visit,
// and the cache is only a fallback for offline use. The previous handler was
// cache-first under a cache name that never changed, so the October 2026
// animation rollout never reached anyone who had opened the app before it.
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  e.respondWith(
    fetch(req)
      .then((res) => {
        // Keep the offline copy of the app shell current; don't store
        // anything else (the board images alone are ~400 MB).
        const shell = ASSETS.some((a) => new URL(a, self.location.href).href === req.url) || req.mode === 'navigate';
        if (shell && res.status === 200) {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
        }
        return res;
      })
      .catch(() => caches.match(req, { ignoreSearch: true }))
  );
});
