import { model3d } from '@/data/model3d'

// Il .glb è opzionale: senza file la sezione 3D non viene mostrata (vedi App.vue).
const files = import.meta.glob('../assets/3d/*.glb', { eager: true, query: '?url', import: 'default' })

export const modelUrl = files[`../assets/3d/${model3d.file}`] ?? null
