import { site } from './site'

// <head> gestito da unhead (vite-ssg): senza questi valori il pre-rendering imposta lang="en"
// e un viewport senza viewport-fit=cover (necessario per le safe area iOS del design).
export const head = {
  htmlAttrs: { lang: 'it' },
  title: site.name,
  meta: [
    // Demo: niente indicizzazione. Al go-live togliere qui, in public/_headers e public/robots.txt (BACKLOG).
    { name: 'robots', content: 'noindex, nofollow' },
    { name: 'viewport', content: 'width=device-width,initial-scale=1,viewport-fit=cover' },
    {
      name: 'description',
      content:
        'Chitarre acustiche ed elettriche Made in Italy, costruite su misura da Mauro Gaudenzi. Liuteria, riparazioni, setup e negozio a Cattolica (RN).',
    },
  ],
}
