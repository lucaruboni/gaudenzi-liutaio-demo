# Note di security-engineer

Note durevoli del dominio (trappole, convenzioni, scoperte). Brevi. Aggiornate dall'agente stesso.

- CSP e 3D: hash `sha256-` dello `<style>` interno di model-viewer in `public/_headers`; `check-dist` lo ricalcola dal bundle a ogni build. Aggiornando model-viewer, se la build fallisce, aggiorna l'hash (mai `'unsafe-inline'`).
- Per verificare la CSP in un browser vero: `wrangler dev` + Chrome DevTools Protocol in ascolto su `securitypolicyviolation` (gli iframe sono vietati da `frame-ancestors`).
