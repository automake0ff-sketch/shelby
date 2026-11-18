const fs = require('fs');
const https = require('https');

function get(url) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'es-ES,es;q=0.9'
      }
    }, r => {
      let d = '';
      r.on('data', c => d += c);
      r.on('end', () => resolve({ status: r.statusCode, data: d }));
    }).on('error', reject);
  });
}

async function run() {
  const res = await get('https://www.instagram.com/shelbyvillecafe/');
  fs.writeFileSync('instagram_profile.html', res.data, 'utf8');

  // Look for cdninstagram URLs or image URLs
  const imgUrls = res.data.match(/https:\/\/[^"'\s\\]*cdninstagram\.com[^"'\s\\]*/g) || [];
  const cleanUrls = Array.from(new Set(imgUrls.map(u => u.replace(/\\u0026/g, '&').replace(/\\/g, ''))));
  console.log('Total cdninstagram URLs found:', cleanUrls.length);
  console.log(cleanUrls.slice(0, 15));
}

run();
