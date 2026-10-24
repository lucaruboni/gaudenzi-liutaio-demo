import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Model3DSection from '@/components/sections/Model3DSection.vue'
import { model3d } from '@/data/model3d'

describe('Model3DSection', () => {
  it('mostra l’attribuzione richiesta dalla licenza CC BY (titolo, autore, licenza con link)', () => {
    const credit = mount(Model3DSection).get('.viewer3d-credit')
    expect(credit.text()).toContain(model3d.credit.title)
    expect(credit.text()).toContain(model3d.credit.author)
    const links = credit.findAll('a').map((a) => a.attributes('href'))
    expect(links).toContain(model3d.credit.url)
    expect(links).toContain(model3d.credit.licenseUrl)
  })

  it('non carica model-viewer finché la sezione non è vicina allo schermo', () => {
    expect(mount(Model3DSection).find('model-viewer').exists()).toBe(false)
  })
})
