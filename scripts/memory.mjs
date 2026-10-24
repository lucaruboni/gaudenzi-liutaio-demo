// Memoria di progetto per gli agenti (vedi docs/memory/README.md).
//   node scripts/memory.mjs snapshot → scrive docs/memory/.snapshot.md con lo stato git (hook PreCompact)
//   node scripts/memory.mjs context  → stampa STATE.md + snapshot (hook SessionStart: finisce nel contesto)
import { execSync } from 'node:child_process'
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const mem = (f) => join(root, 'docs/memory', f)
const git = (cmd) => {
  try {
    return execSync(`git ${cmd}`, { cwd: root, encoding: 'utf8' }).trim()
  } catch {
    return '(git non disponibile)'
  }
}

function snapshot() {
  const body = [
    `# Snapshot automatico`,
    ``,
    `_Generato: ${new Date().toISOString()}_`,
    ``,
    `- Branch: \`${git('branch --show-current')}\``,
    ``,
    `## File modificati`,
    '```',
    git('status --short') || '(nessuno)',
    '```',
    ``,
    `## Ultimi commit`,
    '```',
    git('log --oneline -8'),
    '```',
    ``,
  ].join('\n')
  writeFileSync(mem('.snapshot.md'), body)
  return body
}

const mode = process.argv[2]
if (mode === 'snapshot') {
  snapshot()
  console.log('docs/memory/.snapshot.md aggiornato')
} else if (mode === 'context') {
  const state = existsSync(mem('STATE.md')) ? readFileSync(mem('STATE.md'), 'utf8') : '(STATE.md mancante)'
  console.log(
    [
      'Memoria di progetto (docs/memory). Leggi BACKLOG.md e le note del tuo agente prima di lavorare.',
      '',
      state,
      '',
      snapshot(),
    ].join('\n')
  )
} else {
  console.error('Uso: node scripts/memory.mjs snapshot|context')
  process.exit(1)
}
