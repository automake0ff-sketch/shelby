const fs = require('fs');
const raw = JSON.parse(fs.readFileSync('pikotea_response_recoger.json', 'utf8'));
const menu = raw.restaurant.menus[0];

const noImg = [];
menu.sections.filter(s => s.hidden === 0).forEach(s => {
  s.lines.forEach(l => {
    if (!l.product.blobId) {
      noImg.push({ section: s.name, product: l.product.name });
    }
  });
});

console.log('Public products without image in Pikotea:', noImg.length);
console.table(noImg);
