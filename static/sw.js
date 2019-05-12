var websiteUrl = 'princealikhan.me';
var cacheName = websiteUrl + '-assets-V1-final';
var filesToCache = [
    'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
    'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700',
    '/static/icons/favicon-48.png',
    '/static/icons/favicon-96.png',
    '/static/icons/favicon-192.png',
    '/static/icons/favicon-256.png',
    '/static/icons/favicon-384.png',
    '/static/icons/favicon-512.png',
    '/static/base.css'
 ];
 self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
      caches.open(cacheName)
        .then(function(cache) {
          return cache.addAll(filesToCache);
        })
    );
  });