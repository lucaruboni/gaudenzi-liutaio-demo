# Note di vue-vite-architect

Note durevoli del dominio (trappole, convenzioni, scoperte). Brevi. Aggiornate dall'agente stesso.

- vite-ssg/unhead imposta di default `lang="en"` e un viewport senza `viewport-fit=cover`: il `<head>` si gestisce in `src/data/head.js` via `useHead`, non in `index.html`.
- Codice che usa `window`, `document`, `localStorage`, `Date` "di oggi" va in `onMounted` o negli handler: il componente gira anche in SSR al build.
- `<video>` dell'hero: `muted`/`playsinline`/`autoplay` devono uscire nell'HTML pre-renderizzato (iOS decide l'autoplay al parsing). `check-dist` lo verifica.
- `<model-viewer>` è dichiarato custom element in `vite.config.js` (`isCustomElement`) e viene montato con `v-if` dopo l'import dinamico: niente SSR del web component.
