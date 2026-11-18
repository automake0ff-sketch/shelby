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
    // search for blob or image url construction
    const blobMatches = str.match(/[a-zA-Z0-9_\/:\.-]*blob[a-zA-Z0-9_\/:\.-]*/gi) || [];
    console.log('blob matches:', [...new Set(blobMatches)].slice(0, 20));

    // search for /image or /serve or /blobstore or /img
    const imgMatches = str.match(/https?:\/\/[^\s"'`]+\/serve[^\s"'`]*/gi) || [];
    console.log('serve matches:', [...new Set(imgMatches)]);

    const gstorageMatches = str.match(/https?:\/\/[^\s"'`]*(?:storage|blob|photo|foto|image)[^\s"'`]*/gi) || [];
    console.log('storage/image URLs:', [...new Set(gstorageMatches)]);
  });
});
