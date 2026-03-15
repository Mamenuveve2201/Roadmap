const CACHE = 'roadmap-v9';
const ASSETS = [
  '/Roadmap/',
  '/Roadmap/index.html',
  '/Roadmap/style.css',
  '/Roadmap/app.js',
  '/Roadmap/manifest.json',
  '/Roadmap/icons/icon-192.png',
  '/Roadmap/icons/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS).catch(() => {})));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  if (e.request.url.includes('supabase.co')) return;
  if (e.request.url.includes('jsdelivr.net')) return;
  if (e.request.url.includes('fonts.googleapis')) return;
  if (e.request.url.includes('chrome-extension')) return;

  // Network-first: always fetch fresh, fall back to cache
  e.respondWith(
    fetch(e.request)
      .then(res => {
        if (res && res.status === 200) {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
