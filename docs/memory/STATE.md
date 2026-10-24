# Stato del progetto

_Aggiornato: 2026-10-24 · Branch: `feat/vue-migration`_

## In una riga

La demo statica è diventata un progetto Vue 3 + Vite 8 pre-renderizzato (vite-ssg), con rendering identico al pixel all'originale; architettura multi-agente, CI/CD e memoria pronte.

## Fatto

- Migrazione a Vue: 11 componenti (layout, sections, ui), contenuti in `src/data/*.js`, 3 composables, SCSS modulare in `src/styles/`.
- Verifica visiva: 0 pixel di differenza a 1440 e 390 px, tema chiaro e scuro (`docs/agents/VISUAL-CHECK.md`).
- Revisioning: asset con hash, manifest, cache immutabile per `/assets/*` (`public/_headers`).
- Qualità: ESLint, Stylelint, Prettier, 15 test Vitest, `scripts/check-dist.mjs` dopo ogni build.
- CI GitHub Actions (`ci.yml`), Dependabot. Deploy: integrazione Git di Cloudflare Pages (`docs/DEPLOY.md`); `deploy.yml` solo manuale.
- Demo **non indicizzabile** (noindex in `_headers`, meta robots, `robots.txt` Disallow), controllato da `check-dist`.
- 13 agenti in `.claude/agents/` (orchestratore Opus 5.5, specialisti Sonnet 5.5, effort high), protocollo in `docs/agents/PROTOCOL.md`.

## In corso

- Nulla. Il branch `feat/vue-migration` non è ancora committato/mergiato.

## Prossimo passo

1. Commit del branch, merge su `main` e push su GitHub (con conferma dell'utente).
2. L'utente crea il progetto Pages dal dashboard Cloudflare seguendo `docs/DEPLOY.md` (repo `lucaruboni/gaudenzi-liutaio-demo`, build `npm test && npm run build`, output `dist`, `NODE_VERSION=24`).
3. Poi i P0 del BACKLOG: regressione visiva, font self-hosted, testi legali.

## Decisioni in attesa dell'utente

- Dominio personalizzato (per ora basta `gaudenzi-guitars.pages.dev`) ed eventuale accesso riservato con Cloudflare Access.
- Backend del form contatti (Pages Function + Turnstile + email?) e cosa fare dei valori demo precompilati.
- Dati del titolare per informativa e footer (ragione sociale, P.IVA, sede, PEC).

## Segreti richiesti (solo nomi)

- Nessuno con l'integrazione Git. Solo per l'alternativa `deploy.yml`: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`.
