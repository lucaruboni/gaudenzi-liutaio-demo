import { ref } from 'vue'

// Chiave condivisa con public/theme-init.js (che applica il tema prima del paint).
export const THEME_KEY = 'gg-theme'

export function useTheme() {
  const theme = ref(null)

  function current() {
    const root = document.documentElement
    return (
      root.getAttribute('data-theme') ||
      (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')
    )
  }

  function toggle() {
    const next = current() === 'light' ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', next)
    theme.value = next
    try {
      localStorage.setItem(THEME_KEY, next)
    } catch {
      // storage non disponibile (navigazione privata): il tema vale solo per la sessione
    }
  }

  return { theme, toggle }
}
