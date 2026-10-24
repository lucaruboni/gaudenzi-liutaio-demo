import { afterEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import SiteHeader from '@/components/layout/SiteHeader.vue'

afterEach(() => {
  document.documentElement.removeAttribute('data-theme')
  localStorage.clear()
})

describe('SiteHeader', () => {
  it('apre e chiude il menu mobile', async () => {
    const w = mount(SiteHeader)
    const btn = w.get('#menu-btn')
    expect(w.get('#mobile-nav').attributes('hidden')).toBeDefined()
    await btn.trigger('click')
    expect(w.get('#mobile-nav').attributes('hidden')).toBeUndefined()
    expect(btn.attributes('aria-expanded')).toBe('true')
    await w.get('.mobile-nav a').trigger('click')
    expect(w.get('#mobile-nav').attributes('hidden')).toBeDefined()
  })

  it('alterna il tema e lo salva', async () => {
    document.documentElement.setAttribute('data-theme', 'dark')
    const w = mount(SiteHeader)
    await w.get('#theme-btn').trigger('click')
    expect(document.documentElement.getAttribute('data-theme')).toBe('light')
    expect(localStorage.getItem('gg-theme')).toBe('light')
  })
})
