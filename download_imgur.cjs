const fs = require('fs');
const https = require('https');
const http = require('http');
const path = require('path');

const outDir = path.join(__dirname, 'public', 'images', 'products');
const raw = JSON.parse(fs.readFileSync('pikotea_response_recoger.json', 'utf8'));
const menu = raw.restaurant.menus[0];

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const proto = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(dest);
    proto.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0'
      }
    }, res => {
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

async function run() {
  const publicSections = menu.sections.filter(s => s.hidden === 0);
  const tasks = [];

  publicSections.forEach(s => {
    s.lines.forEach(l => {
      const p = l.product;
      if (p.blobId && p.blobId.startsWith('http')) {
        const slug = slugify(p.name);
        const filename = `${slug}.jpg`;
        const dest = path.join(outDir, filename);
        tasks.push({ name: p.name, url: p.blobId, dest, filename });
      }
    });
  });

  console.log(`Downloading ${tasks.length} external imgur images...`);
  for (const t of tasks) {
    try {
      const size = await download(t.url, t.dest);
      console.log(`Downloaded ${t.name} -> ${t.filename} (${size} bytes)`);
    } catch (e) {
      console.error(`Failed ${t.name}:`, e.message);
    }
  }
}

run();
