// One-off: optimize source photos into public/img. Run: node scripts/prep-images.mjs <siteImgDir> <stockDir>
import sharp from 'sharp';
import path from 'node:path';

const [site, stock] = process.argv.slice(2);
const out = 'public/img';
const S = (f) => path.join(site, f);

const jobs = [
  // hero (wide), plus a mobile crop centred on the face
  [path.join(stock, 'foto hero.png'), 'hero-1600.webp', (i) => i.resize(1600)],
  [path.join(stock, 'foto hero.png'), 'hero-mobile.webp', (i) => i.extract({ left: 760, top: 0, width: 1000, height: 892 }).resize(800)],
  [S('01_doctor-fernando.png'), 'doctor-800.webp', (i) => i.resize(800)],
  [S('01_doctor-fernando.png'), 'doctor-avatar.webp', (i) => i.extract({ left: 260, top: 90, width: 500, height: 500 }).resize(160)],
  [S('01_clinica-dental.png'), 'clinica-800.webp', (i) => i.resize(800)],
  // program photos: keep top part, drop the teal fade baked into the bottom
  [S('implantes-dentales.png'), 'p-implantes.webp', (i) => i.extract({ left: 90, top: 40, width: 900, height: 620 }).resize(720)],
  [S('blanqueamiento-dental.png'), 'p-blanqueamiento.webp', (i) => i.extract({ left: 90, top: 30, width: 900, height: 620 }).resize(720)],
  [S('carillas-dentales-programa.png'), 'p-carillas.webp', (i) => i.extract({ left: 20, top: 0, width: 500, height: 344 }).resize(720)],
  [S('programa-padres-hijos.png'), 'p-ninos.webp', (i) => i.extract({ left: 20, top: 40, width: 500, height: 344 }).resize(720)],
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
