// Quita el tinte turquesa incrustado en las fotos de programas del sitio original
// y le da a cada una un fondo propio. Run: node scripts/program-images.mjs <siteImgDir>
import sharp from 'sharp';
import path from 'node:path';

const site = process.argv[2];

// crop: zona sin el degradé fuerte de abajo. tint: color de fondo por tarjeta (hsl).
const JOBS = [
  { src: 'implantes-dentales.png', out: 'p-implantes', crop: { left: 100, top: 60, width: 880, height: 560 }, tint: [32, 0.45] }, // arena cálida
  { src: 'blanqueamiento-dental.png', out: 'p-blanqueamiento', crop: { left: 100, top: 40, width: 880, height: 560 }, tint: [215, 0.45] }, // azul suave
  { src: 'carillas-dentales-programa.png', out: 'p-carillas', crop: { left: 20, top: 0, width: 500, height: 318 }, tint: [345, 0.4] }, // rosa empolvado
  { src: 'programa-padres-hijos.png', out: 'p-ninos', crop: { left: 20, top: 30, width: 500, height: 318 }, tint: [145, 0.32] }, // menta
];

function rgb2hsl(r, g, b) {
  r /= 255; g /= 255; b /= 255;
  const mx = Math.max(r, g, b), mn = Math.min(r, g, b), l = (mx + mn) / 2;
  if (mx === mn) return [0, 0, l];
  const d = mx - mn, s = l > 0.5 ? d / (2 - mx - mn) : d / (mx + mn);
  let h = mx === r ? (g - b) / d + (g < b ? 6 : 0) : mx === g ? (b - r) / d + 2 : (r - g) / d + 4;
  return [h * 60, s, l];
}
function hsl2rgb(h, s, l) {
  const k = (n) => (n + h / 30) % 12, a = s * Math.min(l, 1 - l);
  const f = (n) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return [f(0) * 255, f(8) * 255, f(4) * 255];
}

for (const j of JOBS) {
  const { data, info } = await sharp(path.join(site, j.src)).extract(j.crop).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  for (let p = 0; p < data.length; p += 3) {
    const [h, s, l] = rgb2hsl(data[p], data[p + 1], data[p + 2]);
    // peso del tinte turquesa (hue ~165-205): 1 en el centro del rango, 0 fuera
    const w = Math.max(0, 1 - Math.abs(h - 186) / 26) * Math.min(1, s * 3);
    if (w <= 0) continue;
    // todo lo turquesa pasa al tono de la tarjeta, conservando la luz (sin cortes ni halos grises)
    const target = hsl2rgb(j.tint[0], j.tint[1] * (0.35 + 0.65 * l), Math.min(0.96, 0.18 + l * 0.82));
    for (let c = 0; c < 3; c++) data[p + c] = Math.round(data[p + c] * (1 - w) + target[c] * w);
  }
  const img = sharp(data, { raw: info }).modulate({ saturation: 1.04 });
  const buf = await img.png().toBuffer();
  await sharp(buf).resize(720).webp({ quality: 82 }).toFile(`public/img/${j.out}.webp`);
  await sharp(buf).resize(400).webp({ quality: 80 }).toFile(`public/img/${j.out}-400.webp`);
  console.log('ok', j.out);
}
