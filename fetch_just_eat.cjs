const https = require('https');
const fs = require('fs');

const url = 'https://www.just-eat.es/restaurants-shelbyville-cafe-sevilla/menu?utm_source=tripadvisor&utm_medium=cps&utm_campaign=CM_P_TA_ESP_ES_[ENGM]_[OTHR]_[TRIPADVISOR]_PERFDIS_JE:ES:95241&TAHotelCode=JE:ES:95241';

const options = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
    'Accept-Language': 'es-ES,es;q=0.9,en;q=0.8'
  }
};

https.get(url, options, res => {
  console.log('Just Eat status:', res.statusCode);
  console.log('Location:', res.headers.location);
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('Just Eat HTML length:', data.length);
    fs.writeFileSync('just_eat.html', data);
    // Search for __NEXT_DATA__ or json data
    const nextMatch = data.match(/<script id="__NEXT_DATA__" type="application\/json">([^<]+)<\/script>/);
    if (nextMatch) {
      fs.writeFileSync('just_eat_data.json', nextMatch[1]);
      console.log('Saved __NEXT_DATA__ JSON length:', nextMatch[1].length);
    }
  });
}).on('error', err => console.error(err));
