# ADR 0002 — Architettura SCSS e cascata preservata

- Stato: accettato · Data: 2026-10-23

## Contesto

Il design della demo è congelato. Il CSS originale dipende dall'ordine delle regole (stessa specificità, media query in fondo).

## Decisione

- Stili globali in `src/styles/`, entry unico `main.scss` con partial in ordine fisso: `base/reset`, `base/tokens`, `base/global`, `layout`, `components/*` nell'ordine delle sezioni della pagina.
- Media query accanto al componente con il mixin `from(sm|md|lg)` (600/900/1080 px).
- Niente `<style>` negli SFC: l'ordine di iniezione dipenderebbe dagli import.
- Colori solo come custom properties in `base/_tokens.scss` (temi chiaro/scuro + `.dark`).
- Build con Lightning CSS (default Vite 8) e target di default: con target più vecchi gli `oklch()` vengono convertiti e `backdrop-filter` va scritto dopo `-webkit-backdrop-filter`, altrimenti viene scartato. `scripts/check-dist.mjs` controlla entrambe le cose.

## Conseguenze

Verificato: rendering identico al pixel alla demo (1440/390, chiaro/scuro). Ogni refactor di stile richiede la verifica visiva.
