// Tutte le immagini passano da qui: Vite le emette con hash nel nome (revisioning / cache busting).
const files = import.meta.glob('../assets/img/*.{webp,png}', { eager: true, import: 'default' })

export function img(file) {
  const url = files[`../assets/img/${file}`]
  if (!url) throw new Error(`Immagine non trovata in src/assets/img: ${file}`)
  return url
}
