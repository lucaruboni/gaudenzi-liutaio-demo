import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import ContactForm from '@/components/ui/ContactForm.vue'
import { validateContact } from '@/data/contact-form'

describe('validateContact', () => {
  it.each([
    [{ name: 'Ada', email: 'ada@example.com' }, true],
    [{ name: '  ', email: 'ada@example.com' }, false],
    [{ name: 'Ada', email: 'ada@' }, false],
    [{ name: 'Ada', email: 'ada example.com' }, false],
  ])('%o → %s', (input, ok) => expect(validateContact(input)).toBe(ok))
})

describe('ContactForm', () => {
  it('segnala errore con email non valida', async () => {
    const w = mount(ContactForm)
    await w.get('#f-mail').setValue('non-valida')
    await w.get('form').trigger('submit')
    expect(w.get('#form-msg').text()).toBe('Inserisci nome ed email validi.')
    expect(w.get('#form-msg').classes()).toContain('is-error')
  })

  it('conferma con dati validi', async () => {
    const w = mount(ContactForm)
    await w.get('form').trigger('submit')
    expect(w.get('#form-msg').text()).toContain('info@gaudenziguitars.com')
    expect(w.get('#form-msg').classes()).not.toContain('is-error')
  })
})
