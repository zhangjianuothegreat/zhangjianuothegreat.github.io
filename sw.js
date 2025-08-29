self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('lucky-compass-cache').then((cache) => cache.addAll([
      '/',
      '/lucky_direction.html',
      '/manifest.json',
      '/icon.png',
      '/success.html',
      '/cancel.html'
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
