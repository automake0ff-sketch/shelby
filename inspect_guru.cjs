const fs = require('fs');
const html = fs.readFileSync('restaurant_guru.html', 'utf8');
const imgUrls = html.match(/https?:\/\/[^"'\s\\]*\.(?:jpg|jpeg|png|webp)/gi) || [];
const unique = Array.from(new Set(imgUrls));
const relevant = unique.filter(u => u.includes('Shelbyville-Cafe') || u.includes('restaurantguru.com/c'));
console.log('Relevant photos in main page:', relevant.length);
console.log(relevant);
