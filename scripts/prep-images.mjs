// One-off: optimize source photos into src/assets/img. Run: node scripts/prep-images.mjs <siteImgDir> <stockDir>
// Las fotos de programas salen de scripts/program-images.mjs y la imagen OG de scripts/og-image.mjs.
import sharp from 'sharp';
import path from 'node:path';

const [site, stock] = process.argv.slice(2);
const out = 'src/assets/img';
const S = (f) => path.join(site, f);

const jobs = [
  // hero (wide), plus a mobile crop centred on the face
  [path.join(stock, 'foto hero.png'), 'hero-1600.webp', (i) => i.resize(1600)],
  [path.join(stock, 'foto hero.png'), 'hero-mobile.webp', (i) => i.extract({ left: 760, top: 0, width: 1000, height: 892 }).resize(800)],
  [S('01_doctor-fernando.png'), 'doctor-800.webp', (i) => i.resize(800)],
  [S('01_doctor-fernando.png'), 'doctor-avatar.webp', (i) => i.extract({ left: 180, top: 60, width: 720, height: 720 }).resize(288)],
];

for (const [src, name, fn] of jobs) {
  await fn(sharp(src)).webp({ quality: 80 }).toFile(path.join(out, name));
  console.log('ok', name);
}
await sharp(S('01_LOGO-ODONTOFAS.webp')).resize(600).webp({ quality: 90 }).toFile(path.join(out, 'logo.webp'));
await sharp(S('05_cropped-favicon-192x192.png')).toFile('public/favicon.png');

const { data, info } = await sharp(S('01_LOGO-ODONTOFAS.webp')).raw().ensureAlpha().toBuffer({ resolveWithObject: true });
const counts = {};
for (let p = 0; p < data.length; p += 4) {
  if (data[p + 3] < 250) continue;
  const k = [0, 1, 2].map((o) => (data[p + o] >> 2 << 2).toString(16).padStart(2, '0')).join('');
  counts[k] = (counts[k] || 0) + 1;
}
console.log(Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 5), info.width);
