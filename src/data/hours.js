// `day` segue Date.getDay(): 0 = domenica … 6 = sabato. Orario estivo.
export const openingHours = [
  { day: 1, label: 'Lunedì', hours: '10.30–12.30' },
  { day: 2, label: 'Martedì', hours: '16.00–19.30' },
  { day: 3, label: 'Mercoledì', hours: '16.00–19.30' },
  { day: 4, label: 'Giovedì', hours: '10.30–12.30 · 16.00–19.30' },
  { day: 5, label: 'Venerdì', hours: '10.30–12.30 · 16.00–19.30' },
  { day: 6, label: 'Sabato', hours: '10.30–13.00' },
  { day: 0, label: 'Domenica', hours: 'Chiuso' },
]
