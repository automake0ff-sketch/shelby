const https = require('https');
const fs = require('fs');

const idRest = 'ahJlfnBpa290ZWEtc2VydmVyLTJyFwsSClJlc3RhdXJhbnQYgICA1_26xAkM';

function get(url) {
  return new Promise((resolve, reject) => {
    https.get(url, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, data }));
    }).on('error', reject);
  });
}

async function run() {
  const url1 = `https://pikotea-server-2.appspot.com/_ah/api/clientandroidendpoint/v1/getRestaurantCompleteTipo?idRest=${encodeURIComponent(idRest)}&locale=es&tipoPedido=RECOGER`;
  console.log('Fetching url1:', url1);
  const r1 = await get(url1);
  console.log('Status r1:', r1.status);
  fs.writeFileSync('pikotea_response_recoger.json', r1.data);
  console.log('Length r1:', r1.data.length);

  try {
    const json = JSON.parse(r1.data);
    console.log('Root keys:', Object.keys(json));
    if (json.restaurant) {
      console.log('Restaurant name:', json.restaurant.name || json.restaurant.nombre);
    }
  } catch (e) {
    console.error('Parse error:', e);
  }
}

run();
