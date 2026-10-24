# Stato del progetto

_Aggiornato: 2026-10-24 · Branch: `feat/vue-migration`_

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
- 13 agenti in `.claude/agents/` (orchestratore Opus 5.5, specialisti Sonnet 5.5, effort high), protocollo in `docs/agents/PROTOCOL.md`.

## In corso

- Nulla. Il branch `feat/vue-migration` non è ancora committato/mergiato.

## Prossimo passo

1. Verificare il primo deploy di Workers Builds (impostazioni in `docs/DEPLOY.md`: build `npm test && npm run build`, deploy `npx wrangler deploy`, `NODE_VERSION=24`).
2. Sull'URL `workers.dev`: controllare header di sicurezza, cache e noindex con `curl -sI`.
3. Poi i P0 del BACKLOG: regressione visiva, font self-hosted, testi legali.

## Decisioni in attesa dell'utente

- Dominio personalizzato (per ora basta l'URL `workers.dev`) ed eventuale accesso riservato con Cloudflare Access.
- Backend del form contatti (Pages Function + Turnstile + email?) e cosa fare dei valori demo precompilati.
- Dati del titolare per informativa e footer (ragione sociale, P.IVA, sede, PEC).

## Segreti richiesti (solo nomi)

- Nessuno con l'integrazione Git. Solo per l'alternativa `deploy.yml`: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`.
