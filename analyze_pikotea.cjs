const fs = require('fs');

const raw = JSON.parse(fs.readFileSync('pikotea_response_recoger.json', 'utf8'));
const menu = raw.restaurant.menus[0];

console.log('Menu Name:', menu.name);
console.log('Sections total:', menu.sections.length);

let totalProducts = 0;
let productsWithImage = 0;
let productsWithoutImage = 0;
const sectionsSummary = [];

menu.sections.forEach((sec, sIdx) => {
  const secName = sec.name;
  const isHidden = sec.hidden;
  const lines = sec.lines || [];
  let secProducts = 0;
  let secWithImg = 0;

  lines.forEach(line => {
    secProducts++;
    totalProducts++;
    const p = line.product || {};
    const hasImg = !!p.blobId;
    if (hasImg) {
      secWithImg++;
      productsWithImage++;
    } else {
      productsWithoutImage++;
    }
  });

  sectionsSummary.push({
    index: sIdx,
    name: secName,
    hidden: isHidden,
    totalLines: lines.length,
    productsWithImg: secWithImg
  });
});

console.log('--- Summary ---');
console.table(sectionsSummary);
console.log(`Total Products: ${totalProducts}`);
console.log(`With Image: ${productsWithImage}`);
console.log(`Without Image: ${productsWithoutImage}`);
