import { afterEach, describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createHead } from '@unhead/vue/client'
import HeroSection from '@/components/sections/HeroSection.vue'

const mountHero = () => mount(HeroSection, { global: { plugins: [createHead()] } })
const mockReducedMotion = (reduce) =>
  vi
    .spyOn(window, 'matchMedia')
    .mockImplementation((q) => ({ matches: reduce && q.includes('reduce'), media: q }))

afterEach(() => vi.restoreAllMocks())

describe('HeroSection', () => {
  it('usa un video decorativo che può partire da solo (anche su iOS)', () => {
    mockReducedMotion(false)
    const v = mountHero().get('.hero-media video')
    for (const attr of ['autoplay', 'muted', 'loop', 'playsinline'])
      expect(v.attributes(attr), attr).toBeDefined()
    expect(v.attributes('poster')).toBeTruthy()
    expect(v.attributes('aria-hidden')).toBe('true')
  })

  it('mette in pausa il video con prefers-reduced-motion', () => {
    mockReducedMotion(true)
    const pause = vi.spyOn(HTMLMediaElement.prototype, 'pause').mockImplementation(() => {})
    mountHero()
    expect(pause).toHaveBeenCalled()
  })

  it('non mette in pausa senza preferenza', () => {
    mockReducedMotion(false)
    const pause = vi.spyOn(HTMLMediaElement.prototype, 'pause').mockImplementation(() => {})
    mountHero()
    expect(pause).not.toHaveBeenCalled()
  })
})
