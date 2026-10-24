# Pubblicazione su Cloudflare (Workers con asset statici)

Il sito è un **Worker con soli asset statici** collegato al repository GitHub (Workers Builds): a ogni push Cloudflare esegue build e deploy. Non servono token su GitHub. È il sostituto attuale di Cloudflare Pages; `public/_headers` funziona allo stesso modo.

Configurazione in `wrangler.toml`: `name = "gaudenzi-liutaio-demo"` (deve coincidere con il nome del Worker nel dashboard) e `[assets] directory = "./dist"`.

## Stato: demo NON indicizzabile

| Dove                | Cosa                                                   |
| ------------------- | ------------------------------------------------------ |
| `public/_headers`   | `X-Robots-Tag: noindex, nofollow` su tutte le risposte |
| `src/data/head.js`  | `<meta name="robots" content="noindex, nofollow">`     |
| `public/robots.txt` | `Disallow: /` per tutti i crawler (anche quelli AI)    |

`scripts/check-dist.mjs` fa fallire il build se uno dei tre manca. Noindex non vuol dire privato: chi ha il link vede il sito.

## Impostazioni nel dashboard

Workers & Pages → il Worker `gaudenzi-liutaio-demo` → Settings → **Build**:

| Campo                                | Valore                                                                  |
| ------------------------------------ | ----------------------------------------------------------------------- |
| Git repository                       | `lucaruboni/gaudenzi-liutaio-demo`                                      |
| Branch di produzione                 | `main`                                                                  |
| Build command                        | `npm test && npm run build` (due `&`: con uno solo i test non bloccano) |
| Deploy command                       | `npx wrangler deploy`                                                   |
| Non-production branch deploy command | `npx wrangler versions upload` (anteprime dei branch)                   |
| Root directory                       | `/`                                                                     |
| Variabile di build                   | `NODE_VERSION` = `24`                                                   |

`npx wrangler` usa la versione fissata in `package.json` (devDependency), non l'ultima uscita.

Da quel momento:

- push su `main` → produzione su `gaudenzi-liutaio-demo.<account>.workers.dev`;
- push su altri branch → versione di anteprima con un URL dedicato.

Se il build fallisce: Worker → **Deployments** → build fallito → **View build log**.

## Verifica in locale

```bash
npm run build && npx wrangler deploy --dry-run   # valida config e asset senza pubblicare
npx wrangler dev                                  # serve dist/ come in produzione, con _headers
```

## Note

- Non attivare Web Analytics con iniezione automatica: la CSP bloccherebbe lo script. Prima la revisione privacy (`privacy-gdpr`).
- `.github/workflows/deploy.yml` è un'alternativa manuale (deploy da GitHub Actions con i secret `CLOUDFLARE_API_TOKEN` e `CLOUDFLARE_ACCOUNT_ID`). Non usarla insieme a Workers Builds.
- Accesso riservato (opzionale): Cloudflare Access sul dominio `workers.dev` del Worker (Settings → Domains & Routes).

## Go-live

1. Togliere il noindex nei tre file della tabella e aggiornare `scripts/check-dist.mjs`.
2. `robots.txt`: `Allow: /` + `Sitemap:`.
3. Dominio personalizzato: Worker → Settings → Domains & Routes → Custom domain; SSL **Full (strict)**, Always Use HTTPS.
4. Lavoro di `seo-geo`: canonical, sitemap, JSON-LD.
