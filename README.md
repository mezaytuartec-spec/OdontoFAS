# OdontoFAS — landing (demo)

Vite + React + Tailwind v4. SPA estática, sale en `dist/`.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # genera dist/
```

**Vercel:** importar la carpeta; `vercel.json` ya define build `npm run build` y salida `dist`.

## Dónde se cambia cada cosa
- Datos, programas, membresía, reseñas, FAQ y mensajes de WhatsApp: `src/data.js`
- Colores (sacados del logo: teal `#0090A4`, naranja `#FC9400`): `src/index.css` → `@theme`
- Imágenes optimizadas: `public/img/`. Scripts en `scripts/`: `prep-images.mjs` (hero, doctor, logo), `program-images.mjs` (fotos de programas sin el tinte turquesa original), `variants.mjs` (tamaños para srcset) y `og-image.mjs` (`public/og.jpg`, 1200x630)

## Fotos
- Hero: `foto hero.png` (stock provisto).
- Logo, foto del Dr. Acosta y fotos de programas: tomadas de odontofasperu.com. A las de programas se les quitó el overlay turquesa y cada una tiene su propio tono de fondo.
- El resto del set de stock era de estética (botox, faciales, depilación…) y no se usó.

## Dominio
Las URLs absolutas (`og:url`, `og:image`, canonical, JSON-LD) apuntan a `https://odonto-fas.vercel.app`. Si cambia el dominio, actualizar `index.html`.
