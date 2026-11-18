const fs = require('fs');
const data = JSON.parse(fs.readFileSync('pikotea_response_recoger.json', 'utf8'));

console.log('response keys:', Object.keys(data.response || {}));
console.log('restaurant keys:', Object.keys(data.restaurant || {}));
if (data.restaurant) {
  console.log('Name:', data.restaurant.name);
  console.log('Address:', data.restaurant.address);
}

// Let's inspect the menu structure
if (data.response) {
  for (const k of Object.keys(data.response)) {
    const val = data.response[k];
    if (Array.isArray(val)) {
      console.log(`response.${k}: array of ${val.length} items`);
    } else if (typeof val === 'object' && val !== null) {
      console.log(`response.${k}: object with keys ${Object.keys(val).join(', ')}`);
    } else {
      console.log(`response.${k}: ${val}`);
    }
  }
}
