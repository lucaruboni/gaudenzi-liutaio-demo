# Gaudenzi Guitars — sito

Sito della liuteria Gaudenzi (Cattolica, RN). Vue 3 + Vite 8, pre-renderizzato con vite-ssg, deploy su Cloudflare Pages.

```bash
nvm use          # Node 24
npm ci
npm run dev      # sviluppo
npm run check    # formato, lint, test, build (come la CI)
```

- Istruzioni per sviluppatori e agenti AI: [AGENTS.md](AGENTS.md)
- Stato del lavoro e backlog: [docs/memory/](docs/memory/)
- Decisioni architetturali: [docs/adr/](docs/adr/)
- Design di riferimento (congelato): [docs/legacy-demo.html](docs/legacy-demo.html)

## Deploy

Cloudflare Pages collegato al repository GitHub: push su `main` → produzione, altri branch → anteprima. Configurazione passo passo in [docs/DEPLOY.md](docs/DEPLOY.md).

La demo **non è indicizzabile** (noindex + robots.txt), come previsto in docs/DEPLOY.md.
