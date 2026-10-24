# Diario delle sessioni

## 2026-10-24 — Pubblicazione su Cloudflare Pages, senza indicizzazione

- Scelta l'integrazione Git di Cloudflare Pages; guida in `docs/DEPLOY.md`; `deploy.yml` reso manuale per evitare doppi deploy.
- Noindex su tre livelli + controlli in `check-dist`.
- Manifest di Vite spostati in `.build/` a fine build (non più pubblicati).
- Merge su `main` e push. Il dashboard ha creato un Worker, non un Pages: il `wrangler.toml` in formato Pages bloccava `wrangler deploy` e il build command aveva `&` invece di `&&`. Passati a `[assets]`, nome allineato, wrangler fissato.

## 2026-10-23 — Migrazione a Vue e architettura agenti

- Demo `index.html` (CSS/JS inline) → Vue 3 + Vite 8 + vite-ssg; design invariato (0 px di differenza su 4 combinazioni viewport/tema).
- Trovati e risolti in migrazione: Lightning CSS scartava `backdrop-filter` (ordine dei prefissi) e convertiva `oklch` con `build.target` basso; vite-ssg forzava `lang="en"` e un viewport senza `viewport-fit=cover`.
- Creati 13 agenti, protocollo, memoria, comandi `/checkpoint` e `/riprendi`, hook di ripresa, CI/CD e header Cloudflare.
