self.addEventListener('install', event => {
	event.waitUntil(
	  caches.open('qr-pwa-cache-v1').then(cache => {
		return cache.addAll([
		  './index.html',
		  './manifest.json',
		  '../css/index.css',
		  '../js/html5-qrcode.min.js',
		  '../img/logo.svg',
		  '../img/icon-192.png',
		  '../img/icon-512.png',
		  '../sounds/success.mp3',
		  '../sounds/fail.mp3'
		]);
	  })
	);
  });
  
  self.addEventListener('fetch', event => {
	event.respondWith(
	  caches.match(event.request).then(response => response || fetch(event.request))
	);
  });
  