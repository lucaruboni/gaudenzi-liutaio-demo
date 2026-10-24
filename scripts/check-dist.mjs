// Controlli sul build (dist/) che i test unitari non vedono. Gira in CI dopo `npm run build`.
import { createHash } from 'node:crypto'
import { existsSync, readFileSync, readdirSync } from 'node:fs'

const html = readFileSync('dist/index.html', 'utf8')
const assets = readdirSync('dist/assets')
const css = assets
  .filter((f) => f.endsWith('.css'))
  .map((f) => readFileSync(`dist/assets/${f}`, 'utf8'))
  .join('')
const errors = []
const check = (ok, msg) => ok || errors.push(msg)

// CSP: niente script inline né attributi style nell'HTML pre-renderizzato.
check(!/<script(?![^>]*\bsrc=)[^>]*>/.test(html), 'script inline in dist/index.html (vietati dalla CSP)')
check(!/\sstyle="/.test(html), 'attributo style="" in dist/index.html (vietato dalla CSP)')
// SEO: il contenuto deve essere nell'HTML, non solo dopo l'idratazione.
check(html.includes('<h1>'), 'h1 assente: il pre-rendering non ha funzionato')
check(/<html[^>]*lang="it"/.test(html), 'lang="it" assente su <html>')
check(html.includes('viewport-fit=cover'), 'viewport senza viewport-fit=cover (safe area iOS)')
check((html.match(/name="viewport"/g) || []).length === 1, 'meta viewport duplicato')
// Demo non indicizzabile (decisione 2026-10-24): al go-live aggiornare questi controlli insieme ai file.
check(html.includes('name="robots" content="noindex, nofollow"'), 'meta robots noindex mancante')
check(
  readFileSync('dist/_headers', 'utf8').includes('X-Robots-Tag: noindex'),
  'X-Robots-Tag noindex mancante in _headers'
)
check(/Disallow: \/\s*$/m.test(readFileSync('dist/robots.txt', 'utf8')), 'robots.txt non blocca i crawler')
check(!existsSync('dist/.vite'), 'dist/.vite verrebbe pubblicato (manifest)')
// Video dell'hero: gli attributi devono esserci già nell'HTML pre-renderizzato, o l'autoplay su iOS non parte.
const video = html.match(/<video[^>]*>/)?.[0] ?? ''
for (const a of ['autoplay', 'muted', 'loop', 'playsinline', 'poster='])
  check(video.includes(a), `video dell'hero senza ${a}`)
// CSP e <model-viewer>: ogni <style> interno del web component deve avere il suo hash in style-src.
const csp = readFileSync('dist/_headers', 'utf8').match(/Content-Security-Policy: (.*)/)?.[1] ?? ''
check(!csp.includes("'unsafe-inline'") && !/'unsafe-eval'/.test(csp), 'CSP con unsafe-inline/unsafe-eval')
for (const f of assets.filter((a) => a.startsWith('model-viewer') && a.endsWith('.js'))) {
  for (const [, style] of readFileSync(`dist/assets/${f}`, 'utf8').matchAll(/<style>([\s\S]*?)<\/style>/g)) {
    const hash = `'sha256-${createHash('sha256').update(style).digest('base64')}'`
    check(csp.includes(hash), `CSP: manca ${hash} per uno <style> di ${f} (aggiornare public/_headers)`)
  }
}
// Revisioning: ogni asset ha l'hash nel nome.
for (const f of assets) check(/-[\w-]{8}\.\w+$/.test(f), `asset senza hash: ${f}`)
// Design: Lightning CSS ha già scartato una volta backdrop-filter non prefissato (ADR 0002).
check(css.includes('backdrop-filter:blur(10px)'), 'backdrop-filter non prefissato mancante nel CSS')
check(css.includes('oklch('), 'colori oklch convertiti: controlla i target CSS del build')

if (errors.length) {
  console.error(`check-dist: ${errors.length} problemi\n - ${errors.join('\n - ')}`)
  process.exit(1)
}
console.log(`check-dist: ok (${assets.length} asset)`)
