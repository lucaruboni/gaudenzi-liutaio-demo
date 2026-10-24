# Backlog

Priorità: **P0** blocca il go-live · **P1** importante · **P2** miglioramento · **P3** idea.

## Aperti

| P   | Compito                                                                                                                                   | Proprietario             | Revisori                                             |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ | ---------------------------------------------------- |
| P0  | Regressione visiva automatica con Playwright (1440/390, chiaro/scuro, baseline da `docs/legacy-demo.html`, container pinnato) e job in CI | test-engineer            | github-cicd, scss-architect                          |
| P0  | Self-hosting di Montserrat e Yellowtail (woff2, subset latin), rimozione di Google Fonts e aggiornamento CSP, rendering identico          | build-revisioning        | privacy-gdpr, security-engineer                      |
| P0  | Informativa privacy + cookie policy (bozza con segnaposto) e link nel footer; P.IVA nel footer                                            | privacy-gdpr             | seo-geo                                              |
| P0  | Verificare il primo deploy del Worker `gaudenzi-liutaio-demo` e header/noindex sull'URL `workers.dev`                                     | utente + cloudflare-edge | security-engineer                                    |
| P2  | Go-live: dominio personalizzato, SSL Full (strict), togliere il noindex (solo su richiesta dell'utente)                                   | cloudflare-edge          | seo-geo                                              |
| P1  | Backend del form: Pages Function con validazione, Turnstile, rate limit, invio email; togliere i valori demo                              | cloudflare-edge          | javascript-engineer, security-engineer, privacy-gdpr |
| P1  | Pinnare a SHA le Actions (incluso `cloudflare/wrangler-action` del deploy manuale) e rulesets su main                                     | github-cicd              | security-engineer                                    |
| P2  | JSON-LD, canonical, sitemap, `llms.txt` (preparare ora, attivare al go-live: oggi il sito è noindex)                                      | seo-geo                  | security-engineer                                    |
| P1  | Test e2e + axe per accessibilità (menu, filtri, form, tema)                                                                               | test-engineer            | javascript-engineer                                  |
| P1  | Primo pentest sul deploy di anteprima (perimetro scritto)                                                                                 | pentester                | security-engineer                                    |
| P2  | Ridurre il JS iniziale (oggi ~44 kB gzip, in gran parte runtime Vue + unhead) se Lighthouse lo indica                                     | vue-vite-architect       | build-revisioning                                    |
| P2  | Immagini responsive (`srcset`/AVIF) misurando il guadagno                                                                                 | build-revisioning        | seo-geo                                              |
| P2  | `tavola.webp` non è usata: chiedere all'utente se tenerla                                                                                 | build-revisioning        | —                                                    |
| P2  | Rimuovere `class=""` vuoti nell'HTML pre-renderizzato (orari)                                                                             | vue-vite-architect       | —                                                    |
| P3  | Versione inglese (i18n, `hreflang`)                                                                                                       | vue-vite-architect       | seo-geo                                              |

## Completati

- 2026-10-24 — Merge su `main` e push; progetto adattato a Worker con asset statici (`wrangler.toml` `[assets]`, wrangler 4.149.0 fissato).

- 2026-10-24 — Deploy via integrazione Git di Cloudflare Pages documentato; demo resa non indicizzabile; manifest fuori da `dist/`.

- 2026-10-23 — Migrazione della demo a Vue 3 + Vite 8 + vite-ssg a design invariato; architettura agenti, CI/CD, memoria.
