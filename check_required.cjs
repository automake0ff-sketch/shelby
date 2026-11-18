const fs = require('fs');
const raw = JSON.parse(fs.readFileSync('pikotea_response_recoger.json', 'utf8'));
const menu = raw.restaurant.menus[0];

menu.sections.filter(s => s.hidden === 0).forEach(s => {
  s.lines.forEach(l => {
    const p = l.product;
    if (p.extrasLimits) {
      p.extrasLimits.forEach((lim, idx) => {
        if (lim.min > 0) {
          console.log(`REQUIRED BLOCK in "${p.name}": "${p.extrasBlocksNames[idx]}" min=${lim.min}, max=${lim.max}`);
        }
      });
    }
  });
});
