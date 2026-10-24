<script setup>
import { onMounted, ref } from 'vue'
import { useHead } from '@unhead/vue'
import heroVideo from '@/assets/video/hero-gaudenzi.mp4'
import heroPoster from '@/assets/img/hero-video-poster.webp'

// Il poster è il primo contenuto visibile (LCP): lo carichiamo subito.
useHead({ link: [{ rel: 'preload', as: 'image', href: heroPoster, fetchpriority: 'high' }] })

const video = ref(null)

// Chi chiede meno movimento vede solo il poster.
onMounted(() => {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) video.value?.pause()
})
</script>

<template>
  <section class="hero dark">
    <div class="hero-media">
      <video
        ref="video"
        :src="heroVideo"
        :poster="heroPoster"
        width="1280"
        height="720"
        autoplay
        muted
        loop
        playsinline
        preload="auto"
        disablepictureinpicture
        aria-hidden="true"
        tabindex="-1"
      ></video>
    </div>
    <div class="wrap hero-text-wrap">
      <div class="hero-text">
        <p class="eyebrow">Design &amp; Building · Cattolica</p>
        <h1>Chitarre acustiche ed elettriche <em>Made in Italy</em></h1>
        <p class="hero-sub">
          Strumenti realizzati su misura da Mauro Gaudenzi, con la massima cura, per creare un legame col
          musicista e accompagnarlo per tutta la vita.
        </p>
        <div class="hero-actions">
          <a class="btn" href="#chitarre">Scopri le acustiche</a>
          <a class="btn btn-outline" href="#riparazioni">Riparazioni e setup</a>
        </div>
        <p class="hero-caption">In foto: OM24R · Abete Roasted e Palissandro</p>
      </div>
    </div>
  </section>
</template>
