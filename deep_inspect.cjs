const fs = require('fs');
const raw = JSON.parse(fs.readFileSync('pikotea_response_recoger.json', 'utf8'));
const menu = raw.restaurant.menus[0];

// Let's inspect products across sections
const publicSections = menu.sections.filter(s => s.hidden === 0);

publicSections.forEach(s => {
  console.log(`\n=== SECTION: ${s.name} (${s.lines.length} items) ===`);
  s.lines.slice(0, 3).forEach(l => {
    const p = l.product;
    console.log(`- Product: "${p.name}"`);
    console.log(`  Description: ${p.description ? p.description.slice(0, 60) + '...' : 'NONE'}`);
    console.log(`  SubLines (formats/presentations):`, (l.subLines || []).map(sl => `${sl.presentation ? sl.presentation.name : 'default'}: €${sl.price}`));
    if (p.extrasBlocksNames && p.extrasBlocksNames.length > 0) {
      console.log(`  Extras Blocks (${p.extrasBlocksNames.length}):`, p.extrasBlocksNames);
      p.extrasBlocksNames.forEach((bName, bIdx) => {
        const lim = (p.extrasLimits && p.extrasLimits[bIdx]) || {};
        const items = (p.extrasList && p.extrasList[bIdx]) || [];
        console.log(`    Block "${bName}" (min: ${lim.min}, max: ${lim.max}): ${items.length} choices -> ${items.map(it => it.name).join(', ')}`);
      });
    }
  });
});
