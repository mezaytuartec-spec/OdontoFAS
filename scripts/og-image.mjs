// Imagen para compartir (og:image) 1200x630. Run: node scripts/og-image.mjs <doctorPng>
import sharp from 'sharp';

const doctor = process.argv[2];
const W = 1200, H = 630;
const star = (x) => `<path transform="translate(${x} 0) scale(1.3)" d="M10 1.6l2.6 5.3 5.8.8-4.2 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.6 7.7l5.8-.8L10 1.6z" fill="#FC9400"/>`;

const text = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <style>
    .t { font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif; }
  </style>
  <text x="72" y="268" class="t" font-size="62" font-weight="700" fill="#0e1b1f" letter-spacing="-1.5">Tu dentista en</text>
  <text x="72" y="344" class="t" font-size="62" font-weight="700" fill="#0090A4" letter-spacing="-1.5">Jesús María</text>
  <text x="72" y="404" class="t" font-size="27" fill="#50646a">Dr. Fernando Acosta · Rehabilitador oral</text>
  <text x="72" y="442" class="t" font-size="27" fill="#50646a">16 años · +3,000 pacientes</text>
  <rect x="72" y="486" width="404" height="68" rx="34" fill="#ffffff" stroke="#dde7ea" stroke-width="2"/>
  <g transform="translate(100 507)">${[0, 30, 60, 90, 120].map(star).join('')}</g>
  <text x="262" y="532" class="t" font-size="27" font-weight="700" fill="#0e1b1f">5.0 en Google</text>
</svg>`;

const doc = await sharp(doctor).resize(H, H).png().toBuffer();
const logo = await sharp('public/img/logo.webp').resize(300).png().toBuffer();

await sharp({ create: { width: W, height: H, channels: 3, background: '#eefdfd' } })
  .composite([
    { input: doc, left: W - H + 40, top: 20 },
    { input: logo, left: 72, top: 92 },
    { input: Buffer.from(text), left: 0, top: 0 },
  ])
  .jpeg({ quality: 86, mozjpeg: true })
  .toFile('public/og.jpg');
console.log('ok og.jpg');
