const fs = require('fs');
const https = require('https');
const path = require('path');

const raw = JSON.parse(fs.readFileSync('pikotea_response_recoger.json', 'utf8'));
const menu = raw.restaurant.menus[0];

const outDir = path.join(__dirname, 'public', 'images', 'products');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

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
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
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
    }).on('error', (err) => {
      file.close();
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  const tasks = [];
  const publicSections = menu.sections.filter(s => s.hidden === 0);

  publicSections.forEach(s => {
    s.lines.forEach(l => {
      const p = l.product;
      if (p.blobId) {
        const slug = slugify(p.name);
        const filename = `${slug}.jpg`;
        const dest = path.join(outDir, filename);
        const url = `https://pikotea-server-2.appspot.com/baradmin/lineimageservice?blob-key=${p.blobId}`;
        tasks.push({ name: p.name, filename, dest, url, blobId: p.blobId });
      }
    });
  });

  console.log(`Starting download of ${tasks.length} product images...`);
  let success = 0;
  let failed = 0;

  for (let i = 0; i < tasks.length; i++) {
    const t = tasks[i];
    try {
      const size = await download(t.url, t.dest);
      success++;
      console.log(`[${i + 1}/${tasks.length}] Downloaded ${t.filename} (${size} bytes)`);
    } catch (e) {
      failed++;
      console.error(`[${i + 1}/${tasks.length}] FAILED ${t.name}:`, e.message);
    }
  }

  console.log(`\nDownload complete: ${success} success, ${failed} failed.`);
}

run();
