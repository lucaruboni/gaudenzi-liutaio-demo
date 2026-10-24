// Gira in <head> prima del render: ripristina il tema scelto dall'utente (chiave condivisa con useTheme.js).
try {
  var saved = localStorage.getItem('gg-theme')
  if (saved === 'light' || saved === 'dark') document.documentElement.setAttribute('data-theme', saved)
} catch (e) {}
