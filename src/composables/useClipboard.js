import { ref } from 'vue'

// Copia il testo di un elemento; se la Clipboard API non c'è o fallisce, seleziona il testo per la copia manuale.
export function useClipboard(resetMs = 1600) {
  const copied = ref(false)
  let timer

  function selectContents(el) {
    const range = document.createRange()
    range.selectNodeContents(el)
    const sel = getSelection()
    sel.removeAllRanges()
    sel.addRange(range)
  }

  function done() {
    copied.value = true
    clearTimeout(timer)
    timer = setTimeout(() => (copied.value = false), resetMs)
  }

  function copyFrom(el) {
    const text = el.textContent
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text).then(done, () => selectContents(el))
    }
    selectContents(el)
    return Promise.resolve()
  }

  return { copied, copyFrom }
}
