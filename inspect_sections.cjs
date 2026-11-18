const fs = require('fs');
const data = JSON.parse(fs.readFileSync('pikotea_response_recoger.json', 'utf8'));

const menu = data.restaurant.menus[0];
console.log('Menu keys:', Object.keys(menu));

if (menu.sections) {
  menu.sections.forEach((sec, idx) => {
    console.log(`\n--- Section ${idx}: ${sec.name || sec.nombre || sec.sectionName} (id: ${sec.idSection || sec.id}) ---`);
    console.log('Section keys:', Object.keys(sec));
    if (sec.subSections || sec.subsections) {
      const subs = sec.subSections || sec.subsections;
      console.log(`  Subsections count: ${subs.length}`);
      subs.forEach((s, sidx) => {
        console.log(`    Sub ${sidx}: ${s.name || s.nombre || s.subSectionName}`);
      });
    }
    if (sec.items || sec.products || sec.articulos) {
      const prods = sec.items || sec.products || sec.articulos;
      console.log(`  Products count: ${prods.length}`);
    }
  });
}
