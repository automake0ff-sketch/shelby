const https = require('https');
const zlib = require('zlib');
const fs = require('fs');

https.get('https://menu.pikotea.com/main.dart.js', (res) => {
  let stream = res;
  if (res.headers['content-encoding'] === 'gzip') {
    stream = res.pipe(zlib.createGunzip());
  }
  let chunks = [];
  stream.on('data', chunk => chunks.push(chunk));
  stream.on('end', () => {
    const buf = Buffer.concat(chunks);
    const str = buf.toString('utf8');
    console.log('main.dart.js size:', str.length);
    const matches = str.match(/https?:\/\/[^\s"'`<>]+/g) || [];
    const unique = [...new Set(matches.filter(m => m.includes('pikotea') || m.includes('appspot') || m.includes('sipos')))];
    console.log('Endpoints found:', unique);

    // Let's also look for servlets or paths
    const servletMatches = str.match(/\/[a-zA-Z0-9_-]+Servlet[0-9]?/g) || [];
    console.log('Servlets found:', [...new Set(servletMatches)]);
  });
}).on('error', err => console.error(err));
