// Genera versiones más chicas de public/img para srcset. Run: node scripts/variants.mjs
import sharp from 'sharp';

const SETS = {
  'hero-mobile': [480],
  'hero-1600': [1000],
  'doctor-800': [480],
  'p-implantes': [400],
  'p-blanqueamiento': [400],
  'p-carillas': [400],
  'p-ninos': [400],
  logo: [300],
};

for (const [name, widths] of Object.entries(SETS)) {
  for (const w of widths) {
    await sharp(`public/img/${name}.webp`).resize(w).webp({ quality: 80 }).toFile(`public/img/${name}-${w}.webp`);
    console.log('ok', `${name}-${w}.webp`);
  }
}
