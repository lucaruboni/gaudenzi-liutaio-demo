# Protocollo comune degli agenti

Vale per ogni agente specialista in `.claude/agents/` e per qualunque altro agente AI (Codex, Cursor, Copilot, Gemini…) che lavora su questo repository.

## 1. Prima di toccare qualcosa

Leggi, in quest'ordine:

1. `AGENTS.md` (regole del progetto)
2. `docs/memory/STATE.md` (dove siamo)
3. `docs/memory/agents/<tuo-nome>.md` (le tue note dalle sessioni precedenti)
4. Gli ADR in `docs/adr/` che riguardano il tuo dominio

Se il compito contraddice un ADR, fermati e segnalalo all'orchestratore: non decidere da solo.

## 2. Regole d'oro

1. **Il design è congelato.** Il riferimento visivo è `docs/legacy-demo.html`. Nessun cambiamento di colori, spaziature, tipografia, layout o testi, a meno che il compito lo chieda esplicitamente. Un refactor CSS deve produrre un rendering identico al pixel (procedura in `docs/agents/VISUAL-CHECK.md`).
2. **Resta nel tuo dominio.** Se serve una modifica fuori dai file che possiedi, descrivila nel report: la assegna l'orchestratore.
3. **Niente commit, push, deploy o pubblicazioni** se l'orchestratore non lo ha chiesto in modo esplicito per quel compito.
4. **Niente segreti né dati personali reali** in codice, test, log o memoria. Token solo in GitHub Secrets / Cloudflare.
5. **Verifica prima di dichiarare finito.** Esegui i comandi pertinenti (`npm run check` come minimo se hai toccato codice) e riporta l'esito reale, anche se è rosso.
6. **Dipendenze**: nessun nuovo pacchetto senza motivarlo nel report (peso, manutenzione, licenza, alternative). Versioni esatte (`save-exact`).
7. **Lingua**: contenuti del sito e documentazione in italiano; identificatori nel codice in inglese.

## 3. Formato del report all'orchestratore

```markdown
## Esito

fatto | parziale | bloccato — una riga

## Modifiche

- path/del/file — cosa e perché

## Verifiche

- `comando` → esito (copia l'errore se fallisce)

## Rischi e domande aperte

- …

## Per la memoria

- 1–5 righe da salvare in docs/memory (decisioni, scoperte, trappole)
```

## 4. Memoria

- Puoi aggiornare solo `docs/memory/agents/<tuo-nome>.md`: trappole incontrate, convenzioni del tuo dominio, cose da ricordare. Breve, niente duplicati del codice.
- `STATE.md`, `BACKLOG.md`, `DECISIONS.md`, `LOG.md` li aggiorna solo l'orchestratore (un solo scrittore, niente conflitti).
