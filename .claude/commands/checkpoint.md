---
description: Salva lo stato del lavoro nella memoria di progetto prima di /compact o /clear
---

Salva la memoria di progetto così che una sessione nuova possa ripartire senza perdere nulla. Note aggiuntive dell'utente: $ARGUMENTS

1. Esegui `node scripts/memory.mjs snapshot` e leggi `docs/memory/.snapshot.md`, `git status`, `git log -5`.
2. Sovrascrivi `docs/memory/STATE.md` mantenendone la struttura (In una riga, Fatto, In corso, Prossimo passo, Decisioni in attesa dell'utente, Segreti richiesti). Data assoluta di oggi. Max ~60 righe. Scrivi "In corso" in modo che un agente senza contesto sappia esattamente da dove riprendere (file, comando, punto preciso).
3. Aggiorna `docs/memory/BACKLOG.md`: nuovi compiti emersi, priorità cambiate, completati spostati in fondo con la data.
4. Aggiungi a `docs/memory/DECISIONS.md` le decisioni prese in questa sessione (e crea l'ADR se è architetturale).
5. Aggiungi in cima a `docs/memory/LOG.md` una voce per questa sessione (3–6 punti: cosa, esito, problemi trovati).
6. Se gli specialisti hanno segnalato note "Per la memoria", verifica che siano finite in `docs/memory/agents/<nome>.md`.
7. Niente segreti, niente dati personali reali, niente duplicati di ciò che è già nel codice.

Chiudi con 3 righe: cosa hai salvato, il prossimo passo, e il suggerimento "ora puoi usare /compact o /clear".
