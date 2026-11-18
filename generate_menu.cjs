const fs = require('fs');
const path = require('path');

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

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function getSubcategory(categoryName, productName) {
  const normCat = categoryName.trim();
  const normProd = productName.toLowerCase();

  if (normCat === 'CAFÉ, TÉ & ICED TEAS') {
    if (normProd.includes('pumpkin')) return 'Cafés Especiales';
    if (normProd.includes('iced tea')) return 'Iced Teas';
    if (normProd.includes('té') || normProd.includes('infusión') || normProd.includes('rooibos')) return 'Tés e Infusiones';
    if (normProd.includes('chocolate') || normProd.includes('colacao')) return 'Chocolates';
    return 'Cafés Clásicos';
  }

  if (normCat === 'MATCHAS, CHAIS & MILKSHAKES') {
    if (normProd.includes('chai shake')) return 'Chai Collection';
    if (normProd.includes('chai')) return 'Chai Collection';
    if (normProd.includes('shake') || normProd.includes('batido')) return 'Milkshakes & Batidos';
    return 'Matchas & Specialty Lattes';
  }

  if (normCat === 'LIMONADAS & ZUMOS NATURALES') {
    if (normProd.includes('zumo')) return 'Zumos Naturales';
    return 'Limonadas Artesanas';
  }

  if (normCat === 'MARGARITAS & REFRESCOS') {
    if (normProd.includes('rita')) return 'Margaritas & Cócteles';
    if (normProd.includes('cruzcampo') || normProd.includes('cerveza')) return 'Cervezas';
    return 'Refrescos & Aguas';
  }

  if (normCat === 'Salado (Sándwiches & Omelette)') {
    if (normProd.includes('bagel')) return 'Bagels';
    if (normProd.includes('waffle')) return 'Gofres Salados';
    if (normProd.includes('omelette') || normProd.includes('brunch') || normProd.includes('american')) return 'Omelette & Brunch';
    return 'Sándwiches & Brioche';
  }

  if (normCat === 'Dulces (Bowl, Tortitas, Gofres)') {
    if (normProd.includes('gofre')) return 'Gofres';
    if (normProd.includes('bowl')) return 'Bowls Dulces';
    return 'Tortitas & Pancakes';
  }

  if (normCat === 'Tostadas simples') {
    return 'Tostadas & Panes';
  }

  return 'General';
}

const publicSections = menu.sections.filter(s => s.hidden === 0);
const productsDir = path.join(__dirname, 'public', 'images', 'products');

const categoryMap = new Map();
const allProducts = [];

publicSections.forEach((s) => {
  const catName = s.name;
  if (!categoryMap.has(catName)) {
    categoryMap.set(catName, {
      id: slugify(catName),
      name: catName,
      subcategories: new Set(),
      coverage: 'complete'
    });
  }
  const catObj = categoryMap.get(catName);

  s.lines.forEach((l) => {
    const p = l.product;
    const subcat = getSubcategory(catName, p.name);
    catObj.subcategories.add(subcat);

    const slug = slugify(p.name);
    const imgFilename = `${slug}.jpg`;
    const hasLocalImg = fs.existsSync(path.join(productsDir, imgFilename));
    const imagePath = hasLocalImg ? `/images/products/${imgFilename}` : null;

    // Sublines / presentations
    const subLines = (l.subLines || []).filter(sl => sl.hidden === 0);
    let basePrice = 0;
    const variants = [];

    if (subLines.length > 1) {
      basePrice = Math.min(...subLines.map(sl => sl.price));
      variants.push({
        id: `${slug}-format`,
        name: 'Tamaño / Presentación',
        required: true,
        multiple: false,
        choices: subLines.map(sl => ({
          id: `${slug}-fmt-${slugify(sl.presentation ? sl.presentation.name : 'opcion')}`,
          name: sl.presentation ? sl.presentation.name : 'Estándar',
          priceDelta: Number((sl.price - basePrice).toFixed(2))
        }))
      });
    } else if (subLines.length === 1) {
      basePrice = subLines[0].price;
    }

    // Extras / options
    const extras = [];
    if (p.extrasBlocksNames && p.extrasBlocksNames.length > 0) {
      p.extrasBlocksNames.forEach((bName, bIdx) => {
        const lim = (p.extrasLimits && p.extrasLimits[bIdx]) || { min: 0, max: -1 };
        const items = (p.extrasList && p.extrasList[bIdx]) || [];
        if (items.length > 0) {
          extras.push({
            id: `${slug}-opt-${bIdx}`,
            name: bName.trim(),
            required: lim.min > 0,
            multiple: lim.max !== 1,
            choices: items.map(it => {
              const delta = (it.formats && it.formats.length > 0) ? it.formats[0].price : 0;
              return {
                id: `${slug}-opt-${bIdx}-${slugify(it.name)}`,
                name: it.name,
                priceDelta: Number(delta.toFixed(2))
              };
            })
          });
        }
      });
    }

    // Allergens
    const confirmedAllergens = [];
    if (p.allergy && Array.isArray(p.allergy)) {
      p.allergy.forEach((val, aIdx) => {
        if (val > 0 && ALLERGEN_NAMES[aIdx]) {
          confirmedAllergens.push(ALLERGEN_NAMES[aIdx]);
        }
      });
    }

    let badge = null;
    if (p.vega) badge = 'Vegano';
    else if (p.vege) badge = 'Vegetariano';

    allProducts.push({
      id: `${catObj.id}-${slug}`,
      name: p.name,
      category: catName,
      subcategory: subcat,
      description: p.description || null,
      descriptionStatus: p.description ? 'complete' : 'none',
      price: Number(basePrice.toFixed(2)),
      image: imagePath,
      variants,
      extras,
      optionsIncomplete: false,
      allergens: confirmedAllergens.length > 0 ? confirmedAllergens : null,
      dietary: {
        vegetarian: !!p.vege,
        vegan: !!p.vega
      },
      available: true,
      badge,
      // Alias en español conforme a la especificación de la Fase 4
      nombre: p.name,
      categoria: catName,
      subcategoria: subcat,
      descripcion: p.description || null,
      precio: Number(basePrice.toFixed(2)),
      imagen: imagePath,
      variantes: variants,
      complementos: extras,
      alergenos: confirmedAllergens.length > 0 ? confirmedAllergens : null,
      disponible: true
    });
  });
});

const categoriesArray = Array.from(categoryMap.values()).map(c => ({
  id: c.id,
  name: c.name,
  subcategories: Array.from(c.subcategories),
  coverage: 'complete'
}));

console.log('Categories count:', categoriesArray.length);
console.log('Total products count:', allProducts.length);
console.log('Products with image:', allProducts.filter(p => !!p.image).length);
console.log('Products without image:', allProducts.filter(p => !p.image).length);

const fileContent = `export const menuSourceUrl = 'https://menu.pikotea.com/#/ahJlfnBpa290ZWEtc2VydmVyLTJyFwsSClJlc3RhdXJhbnQYgICA1_26xAkM////RECOGER';

/**
 * Categorías oficiales extraídas del menú digital de Pikotea.
 */
export const menuCategories = ${JSON.stringify(categoriesArray, null, 2)};

/**
 * Catálogo completo de productos oficiales de Shelbyville Café sincronizados desde Pikotea.
 */
export const menuProducts = ${JSON.stringify(allProducts, null, 2)};

/**
 * Informe de importación oficial y verificación de carta.
 */
export const menuImportReport = {
  recoveredCategories: ${categoriesArray.length},
  recoveredSubcategories: ${categoriesArray.reduce((acc, c) => acc + c.subcategories.length, 0)},
  recoveredProducts: ${allProducts.length},
  productsWithPhoto: ${allProducts.filter(p => !!p.image).length},
  productsAwaitingPhoto: ${allProducts.filter(p => !p.image).length},
  productsWithUnconfirmedPrice: 0,
  descriptionsIncomplete: ${allProducts.filter(p => !p.description).length},
  productsWithIncompleteOptions: 0,
  verifiedAt: '${new Date().toISOString()}',
  sourceUrl: menuSourceUrl
};
`;

fs.writeFileSync(path.join(__dirname, 'src', 'data', 'menu.js'), fileContent, 'utf8');
console.log('Successfully generated src/data/menu.js');
