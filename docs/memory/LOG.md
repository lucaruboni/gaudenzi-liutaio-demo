# Diario delle sessioni

## 2026-10-24 — Hero con video

- Sito online su `gaudenzi-liutaio-demo.lucaruboni.workers.dev`.
- Richiesta dell'utente: hero a 100vh e video `src/assets/video` (rinominato `hero-gaudenzi.mp4`: lo spazio nel nome) al posto della foto. Poster estratto dal primo fotogramma.
- Scoperto che gli asset statici dei Worker ignorano `Range` (200 invece di 206): aggiunto `worker/index.js` solo per `/assets/*.mp4`, verificato con `wrangler dev` (206 + header di `_headers` intatti).
- Verificato in Chromium: fondo hero = fondo schermo a 1920/1440/1000 px, video in riproduzione; resto pagina invariato (mobile 0 px; desktop solo rumore di ricampionamento nelle foto).

## 2026-10-24 — Pubblicazione su Cloudflare Pages, senza indicizzazione

- Scelta l'integrazione Git di Cloudflare Pages; guida in `docs/DEPLOY.md`; `deploy.yml` reso manuale per evitare doppi deploy.
- Noindex su tre livelli + controlli in `check-dist`.
- Manifest di Vite spostati in `.build/` a fine build (non più pubblicati).
- Merge su `main` e push. Il dashboard ha creato un Worker, non un Pages: il `wrangler.toml` in formato Pages bloccava `wrangler deploy` e il build command aveva `&` invece di `&&`. Passati a `[assets]`, nome allineato, wrangler fissato.

## 2026-10-23 — Migrazione a Vue e architettura agenti

- Demo `index.html` (CSS/JS inline) → Vue 3 + Vite 8 + vite-ssg; design invariato (0 px di differenza su 4 combinazioni viewport/tema).
- Trovati e risolti in migrazione: Lightning CSS scartava `backdrop-filter` (ordine dei prefissi) e convertiva `oklch` con `build.target` basso; vite-ssg forzava `lang="en"` e un viewport senza `viewport-fit=cover`.
- Creati 13 agenti, protocollo, memoria, comandi `/checkpoint` e `/riprendi`, hook di ripresa, CI/CD e header Cloudflare.
