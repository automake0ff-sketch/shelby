const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'images', 'social');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const proto = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(dest);
    proto.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        file.close();
        fs.unlink(dest, () => {});
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        file.close();
        fs.unlink(dest, () => {});
        return reject(new Error(`Status ${res.statusCode}`));
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve(fs.statSync(dest).size);
      });
    }).on('error', err => {
      file.close();
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

const photos = [
  { name: 'shelbyville-local-interior-1.jpg', url: 'https://img02.restaurantguru.com/cf88-Restaurant-Shelbyville-Cafe-interior.jpg' },
  { name: 'shelbyville-local-interior-2.jpg', url: 'https://img02.restaurantguru.com/cda7-Pub-and-bar-Shelbyville-Cafe-interior.jpg' },
  { name: 'shelbyville-local-fachada.jpg', url: 'https://img3.restaurantguru.com/r467-design-Shelbyville-Cafe.jpg' },
  { name: 'shelbyville-tortitas-artesanas.jpg', url: 'https://img02.restaurantguru.com/cbc3-Shelbyville-Cafe-pancakes.jpg' },
  { name: 'shelbyville-bali-pancakes.jpg', url: 'https://img02.restaurantguru.com/c1a3-Restaurant-Shelbyville-Cafe-pancakes.jpg' },
  { name: 'shelbyville-peniques-pancakes.jpg', url: 'https://img02.restaurantguru.com/c205-Shelbyville-Cafe-Seville-pancakes.jpg' },
  { name: 'shelbyville-waffles.jpg', url: 'https://img02.restaurantguru.com/c7d4-Restaurant-Shelbyville-Cafe-waffles.jpg' },
  { name: 'shelbyville-cafe-especial.jpg', url: 'https://img02.restaurantguru.com/c4b9-Restaurant-Shelbyville-Cafe-coffee.jpg' },
  { name: 'shelbyville-cake.jpg', url: 'https://img02.restaurantguru.com/cfe0-Pub-and-bar-Shelbyville-Cafe-cake.jpg' },
  { name: 'shelbyville-brunch-dishes.jpg', url: 'https://img02.restaurantguru.com/c302-Pub-and-bar-Shelbyville-Cafe-dishes.jpg' }
];

async function run() {
  for (const p of photos) {
    try {
      const dest = path.join(dir, p.name);
      const size = await download(p.url, dest);
      console.log(`Downloaded ${p.name}: ${size} bytes`);
    } catch (e) {
      console.error(`Failed ${p.name}:`, e.message);
    }
  }
}

run();
