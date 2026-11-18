const fs = require('fs');
const data = JSON.parse(fs.readFileSync('pikotea_response_recoger.json', 'utf8'));

const menu = data.restaurant.menus[0];

menu.sections.forEach((sec, idx) => {
  console.log(`\n================ Section ${idx}: ${sec.name} (hidden: ${sec.hidden}) ================`);
  if (!sec.lines) {
    console.log('No lines');
    return;
  }
  console.log(`Lines count: ${sec.lines.length}`);
  sec.lines.forEach((line, lidx) => {
    console.log(`  Line ${lidx}: type=${line.type || 'item'}, name=${line.name || line.articleName || (line.article && line.article.name)}, price=${line.price || (line.article && line.article.price)}`);
    if (lidx === 0) {
      console.log('  Sample line keys:', Object.keys(line));
      if (line.article) {
        console.log('  line.article keys:', Object.keys(line.article));
      }
    }
  });
});
