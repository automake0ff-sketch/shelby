const fs = require('fs');
const raw = JSON.parse(fs.readFileSync('pikotea_response_recoger.json', 'utf8'));
const menu = raw.restaurant.menus[0];

console.log('Section 8 (INTERNO) lines:');
const sec8 = menu.sections[8];
sec8.lines.forEach(l => {
  console.log('-', l.product.name, 'hidden:', l.product.hidden);
});
