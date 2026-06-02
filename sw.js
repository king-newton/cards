const CACHE_NAME = 'jimmy-cards-v3'; // 每次更新網頁內容時，請修改這裡的版次 (例如 v2, v3)
const ASSETS = [
  './',
  './index.html',
  'https://king-newton.github.io/cards/pic-jimmy.jpg',
  'https://king-newton.github.io/cards/jimmy-ch1.jpg',
  'https://king-newton.github.io/cards/jimmy-en1.jpg',
  'https://king-newton.github.io/cards/jimmy-ch2.jpg',
  'https://king-newton.github.io/cards/jimmy-en2.jpg'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});
