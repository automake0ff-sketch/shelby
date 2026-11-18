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
    const idx = str.indexOf('blob-key');
    if (idx !== -1) {
      console.log('Context around blob-key:');
      console.log(str.slice(Math.max(0, idx - 200), idx + 200));
    }
    const idx2 = str.indexOf('blobId');
    if (idx2 !== -1) {
      console.log('Context around blobId:');
      console.log(str.slice(Math.max(0, idx2 - 100), idx2 + 100));
    }
  });
});
