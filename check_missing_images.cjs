const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'public', 'images', 'products');
const files = fs.readdirSync(outDir);
console.log(`Total downloaded files in ${outDir}: ${files.length}`);

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

const missing = [];
menu.sections.filter(s => s.hidden === 0).forEach(s => {
  s.lines.forEach(l => {
    const p = l.product;
    const filename = `${slugify(p.name)}.jpg`;
    if (!fs.existsSync(path.join(outDir, filename))) {
      missing.push({
        section: s.name,
        product: p.name,
        hasBlob: !!p.blobId,
        blobId: p.blobId ? p.blobId.slice(0, 30) + '...' : null
      });
    }
  });
});

console.log('Products without downloaded file:', missing.length);
console.table(missing);
