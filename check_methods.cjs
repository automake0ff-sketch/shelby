const fs = require('fs');
const json = JSON.parse(fs.readFileSync('pikotea_api_discovery.json', 'utf8'));

console.log('getRestaurantComplete:', JSON.stringify(json.methods.getRestaurantComplete, null, 2));
console.log('getRestaurantCompleteTipo:', JSON.stringify(json.methods.getRestaurantCompleteTipo, null, 2));
