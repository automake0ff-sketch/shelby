const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'images', 'products');

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

// First, copy bali-pancakes and peniques from social to products
const socialDir = path.join(__dirname, 'public', 'images', 'social');
fs.copyFileSync(path.join(socialDir, 'shelbyville-bali-pancakes.jpg'), path.join(dir, 'bali-pancakes.jpg'));
fs.copyFileSync(path.join(socialDir, 'shelbyville-peniques-pancakes.jpg'), path.join(dir, 'peniques.jpg'));
console.log('Copied bali-pancakes.jpg and peniques.jpg successfully');

// Real product beverage images
const beverages = [
  { name: '7up.jpg', url: 'https://images.openfoodfacts.org/images/products/544/900/000/0996/front_es.36.400.jpg' },
  { name: 'fuzetea-limon.jpg', url: 'https://images.openfoodfacts.org/images/products/544/900/023/5930/front_es.16.400.jpg' },
  { name: 'fuzetea-maracuya.jpg', url: 'https://images.openfoodfacts.org/images/products/544/900/023/5992/front_es.12.400.jpg' },
  { name: 'tonica.jpg', url: 'https://images.openfoodfacts.org/images/products/841/007/600/0173/front_es.18.400.jpg' },
  { name: 'agua-grande.jpg', url: 'https://images.openfoodfacts.org/images/products/841/021/600/0025/front_es.35.400.jpg' },
  { name: 'agua-pequena.jpg', url: 'https://images.openfoodfacts.org/images/products/841/021/600/0018/front_es.40.400.jpg' },
  { name: 'energizante.jpg', url: 'https://images.openfoodfacts.org/images/products/901/626/02/front_es.83.400.jpg' },
  { name: 'combinado.jpg', url: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80' }
];

async function run() {
  for (const b of beverages) {
    try {
      const dest = path.join(dir, b.name);
      const size = await download(b.url, dest);
      console.log(`Downloaded ${b.name}: ${size} bytes`);
    } catch (e) {
      console.error(`Failed ${b.name}:`, e.message);
    }
  }
}

run();
