const CACHE_NAME = 'tuyen-truyen-v1.1';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './logo.png',
    './logo-qlxnc.png',
    './icon.png',
    'https://cdn.tailwindcss.com/3.4.17',
    'https://unpkg.com/lucide@0.563.0',
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@1,400;1,700&family=Dancing+Script:wght@700&display=swap'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                 // Try to cache all, but don't fail if some (like external CDNs) fail
                return Promise.all(
                    ASSETS_TO_CACHE.map(url => {
                        return cache.add(url).catch(err => console.log('Failed to cache:', url, err));
                    })
                );
            })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                return response || fetch(event.request);
            })
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
