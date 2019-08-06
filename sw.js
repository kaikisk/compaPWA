var ORIGIN = location.protocol + '//' + location.hostname + '/compaPWA';
var STATIC_CACHE_NAME = 'static_v1';
console.log('ORIGIN : ' + ORIGIN);
var STATIC_FILES = [
    ORIGIN + '/',
    ORIGIN + '/HTML5_001/css/style.css',
    ORIGIN + '/HTML5_001/images/photo01.jpg',
    ORIGIN + '/HTML5_001/images/totop.png',
    ORIGIN + '/HTML5_001/js/css3-mediaqueries.js',
    ORIGIN + '/HTML5_001/js/html5shiv.js',
    ORIGIN + '/HTML5_001/js/jquery.js',
    ORIGIN + '/HTML5_001/js/jquery.scrollshow.js',
    ORIGIN + '/HTML5_001/js/jquery.smoothscroll.js',
    ORIGIN + '/HTML5_001/js/script1.js',
    ORIGIN + '/HTML5_002/page2.html',
    ORIGIN + '/HTML5_002/css/style.css',
    ORIGIN + '/HTML5_002/images/banner.png',
    ORIGIN + '/HTML5_002/images/nav_next_on.png',
    ORIGIN + '/HTML5_002/images/nav_next.png',
    ORIGIN + '/HTML5_002/images/nav_prev.png',
    ORIGIN + '/HTML5_002/images/photo01.jpg',
    ORIGIN + '/HTML5_002/images/photo02.jpg',
    ORIGIN + '/HTML5_002/images/photo03.jpg',
    ORIGIN + '/HTML5_002/images/totop.png',
    ORIGIN + '/HTML5_002/js/css3-mediaqueries.js',
    ORIGIN + '/HTML5_002/js/html5shiv.js',
    ORIGIN + '/HTML5_002/js/jquery.js',
    ORIGIN + '/HTML5_002/js/jquery.rollover.js',
    ORIGIN + '/HTML5_002/js/jquery.scrollshow.js',
    ORIGIN + '/HTML5_002/js/jquery.slideshow.js',
    ORIGIN + '/HTML5_002/js/jquery.smoothscroll.js',
    ORIGIN + '/HTML5_002/js/script.js',
    ORIGIN + '/HTML5_003/css/style.css',
    ORIGIN + '/HTML5_003/images/banner.png',
    ORIGIN + '/HTML5_003/images/check.png',
    ORIGIN + '/HTML5_003/images/mail.png',
    ORIGIN + '/HTML5_003/images/nav_next_on.png',
    ORIGIN + '/HTML5_003/images/nav_next.png',
    ORIGIN + '/HTML5_003/images/nav_prev_on.png',
    ORIGIN + '/HTML5_003/images/nav_prev.png',
    ORIGIN + '/HTML5_003/images/photo.png',
    ORIGIN + '/HTML5_003/images/photo01.jpg',
    ORIGIN + '/HTML5_003/images/photo02.jpg',
    ORIGIN + '/HTML5_003/images/photo03.jpg',
    ORIGIN + '/HTML5_003/images/photo04.jpg',
    ORIGIN + '/HTML5_003/images/totop.png',
    ORIGIN + '/HTML5_003/js/css3-mediaqueries.js',
    ORIGIN + '/HTML5_003/js/html5shiv.js',
    ORIGIN + '/HTML5_003/js/jquery.js',
    ORIGIN + '/HTML5_003/js/jquery.rollover.js',
    ORIGIN + '/HTML5_003/js/jquery.scrollshow.js',
    ORIGIN + '/HTML5_003/js/jquery.slidewide.js',
    ORIGIN + '/HTML5_003/js/jquery.smoothscroll.js',
    ORIGIN + '/HTML5_003/js/script.js',
    ORIGIN + '/HTML5_003/page3.html',
    ORIGIN + '/HTML5_004/css/style.css',
    ORIGIN + '/HTML5_004/images/check.png',
    ORIGIN + '/HTML5_004/images/nav_next_on.png',
    ORIGIN + '/HTML5_004/images/nav_next.png',
    ORIGIN + '/HTML5_004/images/nav_prev_on.png',
    ORIGIN + '/HTML5_004/images/nav_prev.png',
    ORIGIN + '/HTML5_004/images/photo.png',
    ORIGIN + '/HTML5_004/images/photo01.jpg',
    ORIGIN + '/HTML5_004/images/photo02.jpg',
    ORIGIN + '/HTML5_004/images/photo03.jpg',
    ORIGIN + '/HTML5_004/images/totop.png',
    ORIGIN + '/HTML5_004/js/css3-mediaqueries.js',
    ORIGIN + '/HTML5_004/js/html5shiv.js',
    ORIGIN + '/HTML5_004/js/jquery.js',
    ORIGIN + '/HTML5_004/js/jquery.rollover.js',
    ORIGIN + '/HTML5_004/js/jquery.scrollshow.js',
    ORIGIN + '/HTML5_004/js/jquery.slideshow.js',
    ORIGIN + '/HTML5_004/js/jquery.smoothscroll.js',
    ORIGIN + '/HTML5_004/js/script.js',
    ORIGIN + '/HTML5_004/page4.html',
    ORIGIN + '/HTML5_005/css/style.css',
    ORIGIN + '/HTML5_005/images/bg_arrow_black.png',
    ORIGIN + '/HTML5_005/images/bg_arrow_white.png',
    ORIGIN + '/HTML5_005/images/logo.png',
    ORIGIN + '/HTML5_005/images/photo01.jpg',
    ORIGIN + '/HTML5_005/images/photo02.jpg',
    ORIGIN + '/HTML5_005/images/photo03.jpg',
    ORIGIN + '/HTML5_005/images/photo04.jpg',
    ORIGIN + '/HTML5_005/images/photo05.jpg',
    ORIGIN + '/HTML5_005/images/totop.png',
    ORIGIN + '/HTML5_005/js/css3-mediaqueries.js',
    ORIGIN + '/HTML5_005/js/html5shiv.js',
    ORIGIN + '/HTML5_005/js/jquery.js',
    ORIGIN + '/HTML5_005/js/jquery.scrollshow.js',
    ORIGIN + '/HTML5_005/js/jquery.slideshow.js',
    ORIGIN + '/HTML5_005/js/jquery.smoothscroll.js',
    ORIGIN + '/HTML5_005/js/script.js',
    ORIGIN + '/HTML5_005/page5.html',
    ORIGIN + '/index.html',
];

var STATIC_FILE_URL_HASH = {};
STATIC_FILES.forEach(function(x) {STATIC_FILE_URL_HASH[x] = true});

/*
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(STATIC_CACHE_NAME)
        .then(function(cache) {
            return Promise.all(STATIC_FILES.map(function(url) {
                return fetch(new Request(url))
                .then(function(response) {
                    console.log('requesting : ' + response.url + ', response : ' + response);
                    if(!response.ok) {
                        return Promise.reject('Invalid response. URL: ' + response.url + 
                        'Status: ' + response.status);
                    }
                    return cache.put(response.url, response);
                });
            }));
        })
    )
})
*/

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(STATIC_CACHE_NAME)
            .then(function(cache) {
                return Promise.all(
                    STATIC_FILES.map(function(url) {
                        return fetch(new Request(url, { cache: 'no-cache', mode: 'no-cors'}))
                        .then(function(response) {
                            console.log('saving cache : ' + url);
                            return cache.put(url, response);
                        });

                    })
                );
            })
    );
});

/*
self.addEventListener('fetch', function(event) {
    if(!STATIC_FILE_URL_HASH[event.request.url]) return;
    //let cache = caches.match(event.request, {cacheName: STATIC_CACHE_NAME});
    //if(!cache) return;
    //event.respondWith(cache);
    event.respondWith(caches.match(event.request, { cacheName: STATIC_CACHE_NAME}));
});

*/
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
                return response || fetch(event.request)
        })
    );
});

const STATIC_CACHE_NAMES = [
    STATIC_CACHE_NAME
];

/*

self.addEventListener('activate', function(event) {
    var cacheDeleting = function(keys) {
        var promises = [];
        keys.forEach(function(cacheName) 
            if(cacheName != STATIC_CACHE_NAME) {
                promises.push(caches.delete(cacheName));
            }
        });
        return Promise.all(promises);
    }
    event.waitUntil(caches.keys().then(cacheDeleting));
});
*/

self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys()
            .then(function(keys) {
                return Promise.all(
                    keys.filter(function(key) {
                        return !STATIC_CACHE_NAMES.includes(key);
                    }).map(function(key) {
                        return caches.delete(key);
                    })
                );
            })

    );
});
