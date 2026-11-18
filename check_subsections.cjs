const fs = require('fs');
const raw = JSON.parse(fs.readFileSync('pikotea_response_recoger.json', 'utf8'));
const menu = raw.restaurant.menus[0];

menu.sections.forEach(s => {
  console.log(s.name, 'subSections:', s.subSections, 'keys:', Object.keys(s));
});
