import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import ModelsSection from '@/components/sections/ModelsSection.vue'

const visible = (w) => w.findAll('.model').filter((c) => c.attributes('hidden') === undefined)

describe('ModelsSection', () => {
  it('mostra le acustiche all’avvio', () => {
    const w = mount(ModelsSection)
    expect(visible(w)).toHaveLength(12)
    expect(w.get('[data-filter="acustica"]').attributes('aria-pressed')).toBe('true')
  })

  it('filtra al click su un chip e aggiorna aria-pressed', async () => {
    const w = mount(ModelsSection)
    await w.get('[data-filter="elettrica"]').trigger('click')
    expect(visible(w)).toHaveLength(8)
    expect(w.get('[data-filter="elettrica"]').attributes('aria-pressed')).toBe('true')
    expect(w.get('[data-filter="acustica"]').attributes('aria-pressed')).toBe('false')
    await w.get('[data-filter="all"]').trigger('click')
    expect(visible(w)).toHaveLength(21)
  })

  it('mostra i conteggi nei chip', () => {
    const w = mount(ModelsSection)
    expect(w.get('[data-filter="om"] .n').text()).toBe('7')
  })
})
