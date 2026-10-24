# Note di scss-architect

Note durevoli del dominio (trappole, convenzioni, scoperte). Brevi. Aggiornate dall'agente stesso.

- Lightning CSS (minificatore CSS di Vite 8) scarta `backdrop-filter` se nel sorgente viene prima di `-webkit-backdrop-filter`. Scrivere sempre prima il prefisso. Controllato da `scripts/check-dist.mjs`.
- Non impostare `build.target` / `build.cssTarget` più vecchi del default di Vite: Lightning CSS convertirebbe gli `oklch()` in hex+lab.
- `env(..., 0px)`: l'unità serve (dentro `max()` uno 0 senza unità invalida la dichiarazione). Per questo `length-zero-no-unit` è disattivata.
