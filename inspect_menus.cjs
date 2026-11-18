const fs = require('fs');
const data = JSON.parse(fs.readFileSync('pikotea_response_recoger.json', 'utf8'));

console.log('restaurantName:', data.restaurant.restaurantName);
console.log('restaurantAddress:', data.restaurant.restaurantAddress);
console.log('phone:', data.restaurant.phone);
console.log('menus count:', data.restaurant.menus ? data.restaurant.menus.length : 0);

if (data.restaurant.menus) {
  data.restaurant.menus.forEach((m, idx) => {
    console.log(`Menu ${idx}: id=${m.idMenu}, name=${m.name || m.nombre}, sections=${m.sections ? m.sections.length : 0}`);
  });
}
