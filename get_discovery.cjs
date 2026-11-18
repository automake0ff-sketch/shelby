const https = require('https');
const fs = require('fs');

function get(url) {
  return new Promise((resolve, reject) => {
    https.get(url, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function run() {
  const data = await get('https://pikotea-server-2.appspot.com/_ah/api/discovery/v1/apis/clientandroidendpoint/v1/rest');
  fs.writeFileSync('pikotea_api_discovery.json', data);
  console.log('Saved discovery, length:', data.length);
  const json = JSON.parse(data);
  console.log('Methods:', Object.keys(json.methods || {}));
  if (json.resources) {
    for (const [k, v] of Object.entries(json.resources)) {
      console.log('Resource:', k, 'Methods:', Object.keys(v.methods || {}));
    }
  }
}

run();
