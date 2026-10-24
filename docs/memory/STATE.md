# Stato del progetto

_Aggiornato: 2026-10-24 · Branch: `main`_

## In una riga

La demo statica è diventata un progetto Vue 3 + Vite 8 pre-renderizzato (vite-ssg), con rendering identico al pixel all'originale; architettura multi-agente, CI/CD e memoria pronte.

## Fatto

- Migrazione a Vue: 11 componenti (layout, sections, ui), contenuti in `src/data/*.js`, 3 composables, SCSS modulare in `src/styles/`.
- Verifica visiva: 0 pixel di differenza a 1440 e 390 px, tema chiaro e scuro (`docs/agents/VISUAL-CHECK.md`).
- Revisioning: asset con hash, manifest, cache immutabile per `/assets/*` (`public/_headers`).
- Qualità: ESLint, Stylelint, Prettier, 15 test Vitest, `scripts/check-dist.mjs` dopo ogni build.
- CI GitHub Actions (`ci.yml`), Dependabot. Deploy: Cloudflare **Worker con asset statici** `gaudenzi-liutaio-demo` con Workers Builds collegato a GitHub (`docs/DEPLOY.md`); `deploy.yml` solo manuale.
- Branch `feat/vue-migration` unito su `main` e pubblicato su GitHub (2026-10-24); CI verde.
- Demo **non indicizzabile** (noindex in `_headers`, meta robots, `robots.txt` Disallow), controllato da `check-dist`.
- Hero (2026-10-24, richiesta dell'utente): video **segnaposto** in loop con poster al posto della foto; da 900 px header + hero riempiono la prima schermata. Rispetta `prefers-reduced-motion`. Resto della pagina invariato.
- 13 agenti in `.claude/agents/` (orchestratore Opus 5.5, specialisti Sonnet 5.5, effort high), protocollo in `docs/agents/PROTOCOL.md`.

## In corso

- Nulla: hero con video committato e pubblicato su `main`.

## Prossimo passo

1. Deploy su `gaudenzi-liutaio-demo.lucaruboni.workers.dev` funzionante (2026-10-24). Dopo il push dell'hero: verificare in produzione `curl -sI -H 'Range: bytes=0-1' …/assets/hero-gaudenzi-*.mp4` → 206 (lo serve `worker/index.js`; in locale già verificato) e provare su un iPhone.
2. Verificare i settaggi di Workers Builds (impostazioni in `docs/DEPLOY.md`: build `npm test && npm run build`, deploy `npx wrangler deploy`, `NODE_VERSION=24`).
3. Sull'URL `workers.dev`: controllare header di sicurezza, cache e noindex con `curl -sI`.
4. Poi i P0 del BACKLOG: regressione visiva, font self-hosted, testi legali.

## Decisioni in attesa dell'utente

- Dominio personalizzato (per ora basta l'URL `workers.dev`) ed eventuale accesso riservato con Cloudflare Access.
- Backend del form contatti (Pages Function + Turnstile + email?) e cosa fare dei valori demo precompilati.
- Dati del titolare per informativa e footer (ragione sociale, P.IVA, sede, PEC).

## Segreti richiesti (solo nomi)

- Nessuno con l'integrazione Git. Solo per l'alternativa `deploy.yml`: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`.
