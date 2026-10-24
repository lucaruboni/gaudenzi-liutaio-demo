<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { model3d } from '@/data/model3d'
import { modelUrl as src } from '@/utils/model'

const box = ref(null)
const ready = ref(false)
const autoRotate = ref(true)
let observer

// model-viewer (three.js, ~250 kB gzip) si carica solo quando la sezione sta per entrare nello schermo.
async function load() {
  observer?.disconnect()
  await import('@google/model-viewer')
  ready.value = true
}

onMounted(() => {
  autoRotate.value = !matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!('IntersectionObserver' in window)) return load()
  observer = new IntersectionObserver((entries) => entries.some((e) => e.isIntersecting) && load(), {
    rootMargin: '400px 0px',
  })
  observer.observe(box.value)
})
onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <div ref="box" class="viewer3d">
    <model-viewer
      v-if="ready && src"
      :src="src"
      :alt="model3d.alt"
      camera-controls
      disable-zoom
      touch-action="pan-y"
      :auto-rotate="autoRotate || null"
      auto-rotate-delay="1500"
      rotation-per-second="18deg"
      camera-orbit="-30deg 80deg auto"
      environment-image="neutral"
      shadow-intensity="1"
      exposure="1"
      interaction-prompt="auto"
    ></model-viewer>
  </div>
</template>
