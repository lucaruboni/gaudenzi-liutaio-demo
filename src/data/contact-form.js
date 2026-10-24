export const requestTypes = [
  'Chitarra su misura',
  'Informazioni su un modello',
  'Riparazione o setup',
  'Negozio',
]

// Valori dimostrativi della demo di proposta: da svuotare quando il form verrà collegato a un backend reale.
export const demoValues = {
  name: 'Marco Bianchi',
  email: 'marco@example.com',
  type: 'Chitarra su misura',
  instrument: 'OM22C',
  message: 'Ciao Mauro, mi interessa la OM22C con amplificazione. Posso passare sabato mattina a provarla?',
}

export function validateContact({ name, email }) {
  return Boolean(name.trim()) && /^\S+@\S+\.\S+$/.test(email.trim())
}
