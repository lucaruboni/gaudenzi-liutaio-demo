import { describe, expect, it } from 'vitest'
import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { defaultFilter, matchesFilter, modelFilters, models } from '@/data/models'

const imgDir = resolve('src/assets/img') + '/'
const count = (key) => models.filter((m) => matchesFilter(m, key)).length

describe('catalogo modelli', () => {
  it('ha slug unici', () => {
    expect(new Set(models.map((m) => m.slug)).size).toBe(models.length)
  })

  it('usa solo filtri dichiarati', () => {
    const keys = new Set(modelFilters.map((f) => f.key))
    for (const m of models) for (const f of m.filters) expect(keys.has(f), `${m.slug}: ${f}`).toBe(true)
  })

  it('ha un’immagine per ogni modello', () => {
    for (const m of models) expect(existsSync(`${imgDir}${m.slug}.webp`), m.slug).toBe(true)
  })

  it('conta i modelli per filtro come la demo originale', () => {
    expect(Object.fromEntries(modelFilters.map((f) => [f.key, count(f.key)]))).toEqual({
      acustica: 12,
      om: 7,
      dread: 2,
      gc: 1,
      small: 2,
      elettrica: 8,
      semi: 3,
      basso: 1,
      all: 21,
    })
    expect(defaultFilter).toBe('acustica')
  })
})
