import { cpSync, existsSync, rmSync } from 'node:fs'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Revisioning: ogni asset importato da src/ esce come assets/[name]-[hash].[ext].
// Il manifest mappa sorgente → file con hash: a fine build viene spostato da dist/.vite a .build/
// così non viene pubblicato (Cloudflare Pages pubblica tutto il contenuto di dist/).
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
  build: {
    manifest: true,
    // Nessun data: URI: ogni immagine diventa un file con hash (cache immutabile, CSP img-src 'self').
    assetsInlineLimit: 0,
    cssCodeSplit: false,
  },
  ssgOptions: {
    script: 'async',
    formatting: 'none',
    onFinished() {
      if (!existsSync('dist/.vite')) return
      cpSync('dist/.vite', '.build', { recursive: true })
      rmSync('dist/.vite', { recursive: true, force: true })
    },
  },
  test: {
    environment: 'happy-dom',
    include: ['tests/unit/**/*.spec.js'],
  },
})
