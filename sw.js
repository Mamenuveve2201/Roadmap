var CACHE = 'roadmap-v9';
var ASSETS = [
  '/Roadmap/',
  '/Roadmap/index.html',
  '/Roadmap/style.css',
  '/Roadmap/app.js',
  '/Roadmap/manifest.json',
  '/Roadmap/icons/icon-192.png',
  '/Roadmap/icons/icon-512.png'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE).then(function(c) {
      return c.addAll(ASSETS).catch(function(){});
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k){ return k !== CACHE; })
            .map(function(k){ return caches.delete(k); })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  if (e.request.method !== 'GET') return;
  if (e.request.url.indexOf('supabase.co') >= 0) return;
  if (e.request.url.indexOf('jsdelivr.net') >= 0) return;
  if (e.request.url.indexOf('fonts.googleapis') >= 0) return;
  if (e.request.url.indexOf('chrome-extension') >= 0) return;

  // Network-first: always fetch fresh, fall back to cache only if offline
  e.respondWith(
    fetch(e.request)
      .then(function(res) {
        if (res && res.status === 200) {
          var clone = res.clone();
          caches.open(CACHE).then(function(c){ c.put(e.request, clone); });
        }
        return res;
      })
      .catch(function() {
        return caches.match(e.request);
      })
  );
});
