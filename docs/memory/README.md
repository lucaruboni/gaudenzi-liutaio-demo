# Memoria di progetto

Questa cartella è la "cache" persistente del lavoro con gli agenti: tutto ciò che serve per riprendere dopo `/compact`, `/clear` o in una sessione nuova, con qualsiasi agente.

| File               | Contenuto                                                    | Chi lo scrive                               | Come                     |
| ------------------ | ------------------------------------------------------------ | ------------------------------------------- | ------------------------ |
| `STATE.md`         | Fotografia attuale: fatto, in corso, prossimo passo, blocchi | orchestratore                               | sovrascritto             |
| `BACKLOG.md`       | Compiti con priorità P0–P3 e agente proprietario             | orchestratore                               | aggiornato               |
| `DECISIONS.md`     | Registro delle decisioni (rimanda agli ADR in `docs/adr/`)   | orchestratore                               | aggiunte in fondo        |
| `LOG.md`           | Diario delle sessioni, più recente in cima                   | orchestratore                               | aggiunte in cima         |
| `agents/<nome>.md` | Trappole e convenzioni del dominio di ogni specialista       | lo specialista                              | aggiornato               |
| `.snapshot.md`     | Stato git automatico (branch, modifiche, ultimi commit)      | hook PreCompact / `npm run memory:snapshot` | generato, non versionato |

## Ciclo di lavoro

1. Lavori normalmente; l'orchestratore aggiorna la memoria a fine compito.
2. Prima di `/compact` o `/clear`: lancia **`/checkpoint`** (salva STATE, BACKLOG, DECISIONS, LOG).
3. Dopo `/clear` o `/compact`: l'hook `SessionStart` reinietta automaticamente `STATE.md` nel contesto; per il quadro completo lancia **`/riprendi`**.

Regole: niente segreti o dati personali reali; frasi brevi e fattuali; date assolute (AAAA-MM-GG); niente duplicati di ciò che sta già nel codice o in git.
