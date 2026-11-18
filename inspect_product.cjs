const fs = require('fs');
const data = JSON.parse(fs.readFileSync('pikotea_response_recoger.json', 'utf8'));

const menu = data.restaurant.menus[0];

const sampleLine = menu.sections[1].lines[0];
console.log('sampleLine:', JSON.stringify(sampleLine, null, 2));
