# ADR 0003 — Hosting su Cloudflare Pages

- Stato: accettato (dominio da decidere) · Data: 2026-10-23

## Contesto

Sito statico, con un futuro piccolo backend per il form contatti. Servono HTTPS, CDN, header personalizzati e deploy di anteprima per le PR.

## Decisione

Cloudflare Pages, progetto `gaudenzi-guitars`, con l'integrazione Git di Cloudflare (produzione su `main`, anteprima per gli altri branch; aggiornato il 2026-10-24: niente token su GitHub). Il workflow `deploy.yml` con wrangler resta come alternativa manuale. Header HTTP e cache in `public/_headers`: asset con hash immutabili per un anno, HTML sempre rivalidato, CSP restrittiva, HSTS. Il backend del form sarà una Pages Function.

## Conseguenze

- Il progetto si crea una volta dal dashboard (docs/DEPLOY.md); i secret servono solo per l'alternativa manuale.
- I manifest di Vite sono spostati in `.build/` a fine build, quindi non vengono pubblicati.
- Finché è una demo il sito è non indicizzabile (noindex su tre livelli).
- HSTS `preload` rimandato a quando il dominio è definitivo.
