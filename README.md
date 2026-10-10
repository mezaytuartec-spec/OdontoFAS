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
- Imágenes optimizadas: `public/img/` (regenerables con `scripts/prep-images.mjs`)

## Fotos
- Hero: `foto hero.png` (stock provisto).
- Logo, foto del Dr. Acosta y fotos de programas: tomadas de odontofasperu.com (recortadas para quitar el degradado).
- El resto del set de stock era de estética (botox, faciales, depilación…) y no se usó.
