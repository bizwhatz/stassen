const https = require('https');
const fs = require('fs');
const path = require('path');

const BASE = 'https://teknologipro.net/2026/designs/stassen/images';

const images = [
  // Chalk strip categories
  '01.avif', '02.avif', '03.avif', '04.avif', '05.avif',
  // Background
  'bg01.avif',
  // Logo
  'sttlgo.avif',
  // Our story
  'our story.avif',
  // Al-Falaj photos
  'Al-Falaj.jpg',
  'Al-Falaj-10.jpg',
  'Al-Falaj-11.jpg',
  'Al-Falaj-17.jpg',
  'Al-Falaj-19.jpg',
  'Al-Falaj-21.jpg',
  'Al-Falaj-22.jpg',
  'Al-Falaj-26.jpg',
  'Al-Falaj-54.jpg',
  // Products
  'products/01.avif',
  'products/02.avif',
  'products/03.avif',
  'products/04.avif',
  'products/05.avif',
];

const outDir = path.join(__dirname, 'public', 'stassen');
const prodDir = path.join(outDir, 'products');

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
if (!fs.existsSync(prodDir)) fs.mkdirSync(prodDir, { recursive: true });

function download(imgPath) {
  return new Promise((resolve, reject) => {
    const encoded = imgPath.split('/').map(encodeURIComponent).join('/');
    const url = `${BASE}/${encoded}`;
    const outFile = path.join(outDir, imgPath);
    const outFileDir = path.dirname(outFile);
    if (!fs.existsSync(outFileDir)) fs.mkdirSync(outFileDir, { recursive: true });

    const file = fs.createWriteStream(outFile);
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`✓ Downloaded: ${imgPath}`);
          resolve();
        });
      } else {
        file.close();
        fs.unlinkSync(outFile);
        console.error(`✗ Failed (${res.statusCode}): ${imgPath}`);
        resolve();
      }
    }).on('error', (err) => {
      file.close();
      try { fs.unlinkSync(outFile); } catch {}
      console.error(`✗ Error: ${imgPath} — ${err.message}`);
      resolve();
    });
  });
}

(async () => {
  console.log('Downloading Stassen images...\n');
  for (const img of images) {
    await download(img);
  }
  console.log('\nDone! All images saved to public/stassen/');
})();
