# Verifica visiva (design congelato)

Finché non c'è la regressione visiva automatica (BACKLOG P0, agente `test-engineer`), ogni modifica a SCSS, template o `index.html` si verifica così:

1. Servi la demo originale: copia `docs/legacy-demo.html` come `index.html` in una cartella temporanea insieme a `src/assets/img/` rinominata `img/`, poi `python3 -m http.server 4401` da lì.
2. `npm run build && npx vite preview --port 4402`.
3. Screenshot a pagina intera di entrambe, larghezze **1440** e **390**, tema chiaro (default headless) e scuro (`--force-dark-mode`):
   `chromium --headless=new --hide-scrollbars --window-size=1440,9000 --virtual-time-budget=5000 --screenshot=out.png URL`
   (Chromium snap non scrive in /tmp: salva nella home.)
4. Differenza pixel per pixel (Pillow `ImageChops.difference`, soglia 8/255). Atteso: **0 pixel** diversi.

Stato al 2026-10-23: migrazione Vue → 0 pixel di differenza in tutte e 4 le combinazioni.

## Eccezioni approvate dall'utente

- **2026-10-24 — Hero**: video al posto della foto e, da 900 px, altezza a schermo intero. L'hero non va confrontato con `docs/legacy-demo.html`; il resto della pagina sì. Con una finestra alta 9000 px l'hero diventa alto 9000 px: per il confronto a pagina intera fissarne l'altezza (es. `min-height: 827px` per una finestra 1440×900) e allineare le pagine con lo scarto verticale.
