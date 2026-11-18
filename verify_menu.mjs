import { menuCategories, menuProducts, menuImportReport } from './src/data/menu.js';

console.log('Categories:', menuCategories.length);
console.log('Products:', menuProducts.length);

const ids = new Set();
const duplicates = [];
for (const p of menuProducts) {
  if (ids.has(p.id)) {
    duplicates.push(p.id);
  }
  ids.add(p.id);
}

if (duplicates.length > 0) {
  console.error('DUPLICATE IDS FOUND:', duplicates);
} else {
  console.log('ALL product IDs are 100% UNIQUE!');
}

let withVariants = 0;
let withExtras = 0;
let withAllergens = 0;
let withBadge = 0;

menuProducts.forEach(p => {
  if (p.variants && p.variants.length > 0) withVariants++;
  if (p.extras && p.extras.length > 0) withExtras++;
  if (p.allergens && p.allergens.length > 0) withAllergens++;
  if (p.badge) withBadge++;
});

console.log(`Products with size/format variants: ${withVariants}`);
console.log(`Products with customization extras: ${withExtras}`);
console.log(`Products with confirmed allergens: ${withAllergens}`);
console.log(`Products with dietary badge: ${withBadge}`);
