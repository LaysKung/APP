self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("pdf-converter-cache").then(cache => {
      return cache.addAll([
        "./",
        "./pdf.html",
        "./manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
