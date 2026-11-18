const fs = require('fs');
const raw = JSON.parse(fs.readFileSync('pikotea_response_recoger.json', 'utf8'));
const menu = raw.restaurant.menus[0];

const ALLERGEN_NAMES = [
  "Altramuces",
  "Apio",
  "Cacahuetes",
  "Cereales con gluten",
  "Dióxido de azufre",
  "Frutos secos",
  "Huevos",
  "Leche",
  "Marisco",
  "Moluscos",
  "Mostaza",
  "Pescado",
  "Semillas de sésamo",
  "Soja",
  "Poco picante",
  "Picante",
  "Extra picante"
];

let count = 0;
menu.sections.filter(s => s.hidden === 0).forEach(s => {
  s.lines.forEach(l => {
    const p = l.product;
    const active = [];
    if (p.allergy && Array.isArray(p.allergy)) {
      p.allergy.forEach((val, idx) => {
        if (val > 0) active.push(ALLERGEN_NAMES[idx] || `Allergen_${idx}`);
      });
    }
    if (active.length > 0 || p.vege || p.vega) {
      count++;
      console.log(`- ${p.name} [${s.name}]: allergens=[${active.join(', ')}], vege=${p.vege}, vega=${p.vega}`);
    }
  });
});

console.log('Total items with allergens/dietary info:', count);
