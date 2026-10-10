// Imágenes procesadas por Vite: cada build les da un nombre con hash,
// así un cambio de foto nunca queda atrapado en la caché del navegador.
const files = import.meta.glob('./assets/img/*.webp', { eager: true, import: 'default' });

export const img = (name) => {
  const url = files[`./assets/img/${name}`];
  if (!url) throw new Error(`Imagen no encontrada: ${name}`);
  return url;
};
