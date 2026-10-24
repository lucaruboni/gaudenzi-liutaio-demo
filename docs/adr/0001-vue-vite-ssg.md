# ADR 0001 — Vue 3 + Vite, pagina singola pre-renderizzata con vite-ssg

- Stato: accettato · Data: 2026-10-23

## Contesto

La demo era un unico `index.html` con CSS e JS inline. Serve una base manutenibile da più agenti, senza perdere SEO: una SPA che rende tutto lato client darebbe ai crawler (e ai crawler AI che non eseguono JS) una pagina vuota.

## Decisione

Vue 3 (Composition API, `<script setup>`) con Vite 8. In build `vite-ssg/single-page` pre-renderizza `dist/index.html` con tutto il contenuto; sul client Vue idrata la pagina. Il `<head>` è gestito con unhead (`useHead`). Contenuti in `src/data/*.js`, separati dai componenti.

## Conseguenze

- I componenti devono essere SSR-safe (niente API del browser nel setup a livello alto).
- Per più pagine si passerà a `vite-ssg` con vue-router (nuovo ADR).
- Il bundle include il runtime di Vue e unhead (~44 kB gzip): accettabile, da misurare con Lighthouse.
- Alternative scartate: Nuxt (troppo per una pagina), SPA pura (SEO), Astro (cambio di paradigma non richiesto).
