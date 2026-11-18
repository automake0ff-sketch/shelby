const https = require('https');
const fs = require('fs');

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
  const res = await get('https://es.restaurantguru.com/photos-Shelbyville-Cafe-Seville');
  console.log('Photos page Status:', res.status);
  fs.writeFileSync('restaurant_guru_photos.html', res.data, 'utf8');

  const imgUrls = res.data.match(/https?:\/\/[^"'\s\\]*\.(?:jpg|jpeg|png|webp)/gi) || [];
  const unique = Array.from(new Set(imgUrls));
  console.log('Found photo URLs:', unique.length);
  const relevant = unique.filter(u => u.includes('Shelbyville-Cafe'));
  console.log('Relevant photos:', relevant.length);
  console.log(relevant);
}

run();
