# Pubblicazione su Cloudflare Pages

Il sito si pubblica con l'**integrazione Git di Cloudflare Pages**: Cloudflare legge il repository GitHub e a ogni push fa build e deploy. Non servono token né secret su GitHub.

## Stato: demo NON indicizzabile

Finché è una demo, il sito chiede di non essere indicizzato, su tre livelli:

| Dove                | Cosa                                                   |
| ------------------- | ------------------------------------------------------ |
| `public/_headers`   | `X-Robots-Tag: noindex, nofollow` su tutte le risposte |
| `src/data/head.js`  | `<meta name="robots" content="noindex, nofollow">`     |
| `public/robots.txt` | `Disallow: /` per tutti i crawler (anche quelli AI)    |

`scripts/check-dist.mjs` fa fallire il build se uno dei tre manca. Noindex non vuol dire privato: chi ha il link vede il sito. Per un accesso riservato serve Cloudflare Access (vedi in fondo).

## Configurazione (una volta sola)

1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Autorizza GitHub e scegli il repository `lucaruboni/gaudenzi-liutaio-demo`.
3. Impostazioni di build:

   | Campo                  | Valore                                                    |
   | ---------------------- | --------------------------------------------------------- |
   | Project name           | `gaudenzi-guitars` (diventa `gaudenzi-guitars.pages.dev`) |
   | Production branch      | `main`                                                    |
   | Framework preset       | None                                                      |
   | Build command          | `npm test && npm run build`                               |
   | Build output directory | `dist`                                                    |

4. **Environment variables** (Production e Preview): `NODE_VERSION` = `24`.
5. **Save and Deploy**.

Da quel momento:

- un push su `main` → produzione su `gaudenzi-guitars.pages.dev`;
- un push su un altro branch o una PR → anteprima su `<branch>.gaudenzi-guitars.pages.dev`.

Il build fallisce, e quindi non pubblica, se falliscono i test o `check-dist`. La CI su GitHub (`ci.yml`) fa in più lint e formattazione.

## Note

- Non attivare **Web Analytics** con iniezione automatica: lo script verrebbe bloccato dalla CSP. Se servono statistiche, prima la revisione privacy (agente `privacy-gdpr`).
- `.github/workflows/deploy.yml` è un'alternativa manuale (deploy da GitHub Actions con wrangler). Non usarla insieme all'integrazione Git, altrimenti ogni versione viene pubblicata due volte.
- Accesso riservato alla demo (opzionale): Pages → Settings → **Access policy** (Cloudflare Access, gratuito fino a 50 utenti), consentendo solo indirizzi email scelti.

## Go-live (quando il sito diventa pubblico)

1. Togliere il noindex nei tre file della tabella e aggiornare i controlli in `scripts/check-dist.mjs`.
2. `robots.txt`: `Allow: /` + `Sitemap:`.
3. Dominio personalizzato: Pages → Custom domains, SSL **Full (strict)**, Always Use HTTPS.
4. Lavoro dell'agente `seo-geo`: canonical, sitemap, JSON-LD.
