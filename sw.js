const CACHE = 'roadmap-v8';
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
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
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
  if (e.request.url.includes('supabase.co') || e.request.url.includes('jsdelivr.net')) {
    e.respondWith(fetch(e.request));
    return;
  }
  if (e.request.destination === 'document') {
    e.respondWith(fetch(e.request).catch(() => caches.match('/Roadmap/index.html')));
    return;
  }
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
