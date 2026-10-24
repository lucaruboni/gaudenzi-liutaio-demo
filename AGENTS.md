# AGENTS.md — Gaudenzi Guitars

Istruzioni per qualunque agente AI (Claude Code, Codex, Cursor, Copilot, Gemini…) che lavora su questo repository. Le regole operative comuni sono in [`docs/agents/PROTOCOL.md`](docs/agents/PROTOCOL.md): leggilo prima di iniziare.

## Il progetto

Sito della liuteria **Gaudenzi Guitars** di Mauro Gaudenzi (Cattolica, RN): chitarre acustiche ed elettriche su misura, riparazioni, negozio. Una pagina in italiano, pre-renderizzata.

Stack: **Vue 3.5** (`<script setup>`) · **Vite 8** · **vite-ssg** (pre-rendering) · **@unhead/vue** · **SCSS** (sass-embedded) · **Vitest** + Vue Test Utils + happy-dom · ESLint, Stylelint, Prettier · **Node 24** · deploy su **Cloudflare Pages** via **GitHub Actions**.

## Regola numero uno: il design è congelato

Il riferimento visivo è [`docs/legacy-demo.html`](docs/legacy-demo.html) (la demo originale). Colori, spaziature, tipografia, layout e testi non cambiano se il compito non lo chiede esplicitamente. Dopo ogni modifica a stili o markup: verifica visiva secondo [`docs/agents/VISUAL-CHECK.md`](docs/agents/VISUAL-CHECK.md) (atteso 0 pixel di differenza).

## Prima di lavorare: la memoria

1. [`docs/memory/STATE.md`](docs/memory/STATE.md) — dove siamo e il prossimo passo
2. [`docs/memory/BACKLOG.md`](docs/memory/BACKLOG.md) — compiti e proprietari
3. [`docs/memory/DECISIONS.md`](docs/memory/DECISIONS.md) e [`docs/adr/`](docs/adr/) — decisioni da rispettare
4. `docs/memory/agents/<dominio>.md` — trappole note del tuo dominio

A fine lavoro aggiorna la memoria (vedi [`docs/memory/README.md`](docs/memory/README.md)).

## Comandi

| Comando                   | Cosa fa                                               |
| ------------------------- | ----------------------------------------------------- |
| `npm ci`                  | installa le dipendenze dal lockfile                   |
| `npm run dev`             | server di sviluppo Vite                               |
| `npm run build`           | pre-rendering in `dist/` + `scripts/check-dist.mjs`   |
| `npm run preview`         | serve `dist/` in locale                               |
| `npm test`                | test Vitest                                           |
| `npm run lint`            | ESLint + Stylelint                                    |
| `npm run format`          | Prettier                                              |
| `npm run check`           | tutto quello che fa la CI: formato, lint, test, build |
| `npm run memory:snapshot` | fotografia git in `docs/memory/.snapshot.md`          |

Un lavoro è finito solo con `npm run check` verde.

## Struttura

```
index.html                 shell HTML (font, theme-init); il <head> vero è in src/data/head.js
public/                    file con URL fisso: _headers (Cloudflare), robots.txt, theme-init.js
src/
  main.js                  entry vite-ssg
  App.vue                  composizione della pagina + useHead
  components/layout/       SiteHeader, SiteFooter
  components/sections/     una sezione della pagina per file, nell'ordine della pagina
  components/ui/           ModelCard, ContactForm, CopyButton, OpeningHours
  composables/             useTheme, useClipboard
  data/                    contenuti: site, models, artists, repairs, shop, hours, contact-form, head
  utils/img.js             risoluzione delle immagini con hash
  assets/img/              immagini (escono con hash nel nome)
  styles/                  SCSS: abstracts, base, layout, components; entry main.scss (ordine fisso)
tests/unit/                test Vitest
scripts/                   check-dist.mjs (controlli sul build), memory.mjs (memoria agenti)
docs/                      adr/, agents/, memory/, legacy-demo.html
.github/                   workflow CI e deploy, Dependabot, template PR
.claude/                   agenti, comandi e impostazioni di Claude Code
```

## Convenzioni

- Contenuti e documentazione in italiano; identificatori, nomi di file e commit in inglese (Conventional Commits: `feat:`, `fix:`, `chore:`, `docs:`, `test:`, `ci:`).
- I contenuti stanno in `src/data/`, non nei template. Le classi CSS e la struttura del markup sono quelle della demo: il CSS ne dipende.
- Niente `<style>` negli SFC, niente attributi `style=""`, niente script inline, niente `v-html`: la CSP in `public/_headers` li blocca e `check-dist` fallisce.
- Componenti SSR-safe: API del browser solo in `onMounted` o negli handler.
- Ogni nuova logica pura ha un test; ogni bug corretto ha un test che lo riproduce.
- Nuove dipendenze solo motivate; versioni esatte. Nuovi servizi esterni solo dopo revisione privacy e sicurezza.

## Mai

- Committare segreti, `.env`, token o dati personali reali.
- Push, deploy, modifiche a DNS/Cloudflare/GitHub remoti senza conferma esplicita dell'utente.
- Cambiare il design "già che c'ero".
- Indebolire o saltare test per far passare la CI.

## Ruoli specialistici

Il lavoro è diviso per dominio; le definizioni complete sono in [`.claude/agents/`](.claude/agents/) e valgono come guida anche per agenti diversi da Claude.

| Agente                | Dominio                                                 |
| --------------------- | ------------------------------------------------------- |
| `orchestrator`        | pianificazione, delega, verifica, memoria               |
| `vue-vite-architect`  | Vue, Vite, vite-ssg, componenti                         |
| `javascript-engineer` | logica JS, dati, utility, Web API                       |
| `scss-architect`      | SCSS, token, cascata, Stylelint                         |
| `build-revisioning`   | hash degli asset, manifest, immagini, font, budget      |
| `github-cicd`         | GitHub, Actions, Dependabot, rilasci                    |
| `node-npm`            | Node, npm, lockfile, supply chain dei pacchetti         |
| `cloudflare-edge`     | Cloudflare Pages, DNS, HTTPS, header, cache, Functions  |
| `privacy-gdpr`        | GDPR, Codice privacy, Garante, cookie, normative estere |
| `seo-geo`             | SEO e GEO/AEO (visibilità nelle risposte AI)            |
| `security-engineer`   | sicurezza difensiva, CSP, segreti, threat model         |
| `test-engineer`       | unit, componenti, e2e, visivi, accessibilità            |
| `pentester`           | penetration test autorizzati, solo report               |
