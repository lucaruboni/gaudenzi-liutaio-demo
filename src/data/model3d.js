import { site } from './site'

// Sezione 3D prima del catalogo. Il file è in src/assets/3d/ (ottimizzato: vedi docs/3D.md).
// Licenza CC BY 4.0: l'attribuzione (titolo, autore, licenza, link) deve restare visibile in pagina.
export const model3d = {
  file: 'acoustic_guitar.glb',
  alt: 'Modello 3D di una chitarra acustica dreadnought, simile alla Gaudenzi D23',
  productUrl: `${site.shopUrl}/prodotto/d23/`,
  credit: {
    title: 'Acoustic Guitar',
    author: 'afurokn',
    url: 'https://sketchfab.com/3d-models/acoustic-guitar-b52fcec4b641493f8939c50c253c4ac3',
    license: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
  },
}
