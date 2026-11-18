const https = require('https');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'images', 'products');

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Status ${res.statusCode}`));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve(fs.statSync(dest).size);
      });
    }).on('error', reject);
  });
}

const list = [
  { name: '7up.jpg', url: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80' },
  { name: 'tonica.jpg', url: 'https://images.unsplash.com/photo-1598614187854-26a60e982dc4?auto=format&fit=crop&w=600&q=80' },
  { name: 'agua-grande.jpg', url: 'https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=600&q=80' },
  { name: 'agua-pequena.jpg', url: 'https://images.unsplash.com/photo-1560023907-5f339617ea30?auto=format&fit=crop&w=600&q=80' },
  { name: 'energizante.jpg', url: 'https://images.unsplash.com/photo-1622543925917-763c34d1a86e?auto=format&fit=crop&w=600&q=80' },
  { name: 'fuzetea-limon.jpg', url: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80' },
  { name: 'fuzetea-maracuya.jpg', url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80' }
];

async function run() {
  for (const item of list) {
    try {
      const dest = path.join(dir, item.name);
      const size = await download(item.url, dest);
      console.log(`Saved ${item.name}: ${size} bytes`);
    } catch (e) {
      console.error(`Failed ${item.name}:`, e.message);
    }
  }
}

run();
