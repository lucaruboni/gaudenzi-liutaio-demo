# CLAUDE.md

@AGENTS.md

## Specifico per Claude Code

### Orchestrazione

- La sessione principale gira come agente **`orchestrator`** (Opus 5.5, effort high), impostato in `.claude/settings.json` (`"agent": "orchestrator"`). Per avviarlo esplicitamente: `claude --agent orchestrator`.
- Gli specialisti sono subagenti in `.claude/agents/` (Sonnet 5.5, effort high). L'orchestratore li invoca con il tool Agent; i subagenti non possono lanciarne altri, quindi il coordinamento resta all'orchestratore.
- Compiti indipendenti in parallelo (più chiamate Agent nello stesso messaggio); compiti con dipendenze in sequenza.
- Ogni prompt a uno specialista cita `docs/agents/PROTOCOL.md` e include obiettivo, contesto minimo, vincoli e criterio di completamento.

### Memoria e contesto

- All'avvio e dopo `/clear` o `/compact`, l'hook `SessionStart` inserisce nel contesto `docs/memory/STATE.md` e uno snapshot git (`scripts/memory.mjs context`).
- Prima di `/compact` l'hook `PreCompact` aggiorna lo snapshot git in automatico; lo stato ragionato lo salva **`/checkpoint`**, da lanciare prima di `/compact` o `/clear`.
- Dopo una ripresa, **`/riprendi`** ricostruisce il quadro completo.
- La memoria del progetto vive nel repository (`docs/memory/`), così vale anche per altri agenti e altre macchine. Non usare la memoria personale di Claude per fatti del progetto.

### Permessi

`.claude/settings.json` consente senza conferma gli script npm, i linter e i comandi git in sola lettura; chiede conferma per `git push`, `wrangler` e `gh`; vieta la lettura di `.env*`, i force push e `git reset --hard`. Preferenze personali in `.claude/settings.local.json` (non versionato).
