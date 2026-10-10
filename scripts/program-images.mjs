// Fotos de programas: recorte al formato de la tarjeta (16:11), sin filtros ni degradés.
// Run: node scripts/program-images.mjs <dirFotos>
import sharp from 'sharp';
import path from 'node:path';

const dir = process.argv[2];

// Recortes en px de la imagen original, centrados en la sonrisa.
const JOBS = [
  { src: 'descarga (36).jpg', out: 'p-implantes', crop: { left: 0, top: 10, width: 736, height: 506 } },
  { src: 'Smiling young woman wearing a denim jacket and white t shirt portrait.jpg', out: 'p-blanqueamiento', crop: { left: 28, top: 75, width: 680, height: 467 } },
  { src: 'Cómo destacar clínicas estéticas frente competencia claves profesionales.jpg', out: 'p-carillas', crop: { left: 0, top: 125, width: 736, height: 506 } },
  { src: 'descarga (35).jpg', out: 'p-ninos', crop: { left: 20, top: 180, width: 700, height: 481 } },
];

for (const j of JOBS) {
  const base = sharp(path.join(dir, j.src)).extract(j.crop);
  const buf = await base.toBuffer();
  await sharp(buf).resize(720, 495).webp({ quality: 82 }).toFile(`src/assets/img/${j.out}.webp`);
  await sharp(buf).resize(400, 275).webp({ quality: 80 }).toFile(`src/assets/img/${j.out}-400.webp`);
  console.log('ok', j.out);
}
