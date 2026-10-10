// Genera versiones más chicas de src/assets/img para srcset. Run: node scripts/variants.mjs
import sharp from 'sharp';

const SETS = {
  'hero-mobile': [480],
  'hero-1600': [1000],
  'doctor-800': [480],
  logo: [300],
};

for (const [name, widths] of Object.entries(SETS)) {
  for (const w of widths) {
    await sharp(`src/assets/img/${name}.webp`).resize(w).webp({ quality: 80 }).toFile(`src/assets/img/${name}-${w}.webp`);
    console.log('ok', `${name}-${w}.webp`);
  }
}
