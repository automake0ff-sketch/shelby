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
    // search for gluten, crustaceos, etc.
    const idx = str.indexOf('Gluten');
    if (idx !== -1) {
      console.log('Gluten context:');
      console.log(str.slice(Math.max(0, idx - 150), idx + 250));
    }
    const idx2 = str.indexOf('Crust');
    if (idx2 !== -1) {
      console.log('Crustaceos context:');
      console.log(str.slice(Math.max(0, idx2 - 150), idx2 + 250));
    }
  });
});
