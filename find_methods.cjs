const fs = require('fs');
const https = require('https');
const zlib = require('zlib');

https.get('https://menu.pikotea.com/main.dart.js', (res) => {
  let stream = res;
  if (res.headers['content-encoding'] === 'gzip') stream = res.pipe(zlib.createGunzip());
  let chunks = [];
  stream.on('data', chunk => chunks.push(chunk));
  stream.on('end', () => {
    const str = Buffer.concat(chunks).toString('utf8');
    const regex = /clientandroidendpoint\/v1\/([a-zA-Z0-9_\/]+)/g;
    let match;
    const endpoints = new Set();
    while ((match = regex.exec(str)) !== null) {
      endpoints.add(match[1]);
    }
    console.log('clientandroidendpoint methods:', Array.from(endpoints));

    // Also search for Google Cloud Endpoints discovery doc
    // Usually at /_ah/api/discovery/v1/apis
  });
});
