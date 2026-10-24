import { ViteSSG } from 'vite-ssg/single-page'
import App from './App.vue'
import './styles/main.scss'

// vite-ssg pre-renderizza l'HTML in build (SEO / crawler AI) e idrata sul client.
export const createApp = ViteSSG(App)
