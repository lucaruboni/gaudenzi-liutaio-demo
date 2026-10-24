<script setup>
import { artists } from '@/data/artists'
import { img } from '@/utils/img'
</script>

<template>
  <section id="artisti" class="section">
    <div class="wrap">
      <div class="head">
        <p class="eyebrow">Chi suona Gaudenzi</p>
        <h2>Artisti</h2>
      </div>
      <div class="artists">
        <figure v-for="a in artists" :key="a.name" class="artist">
          <img :src="img(a.image)" :alt="a.name" width="480" height="480" loading="lazy" />
          <figcaption>
            <span class="artist-name">{{ a.name }}</span
            ><span class="artist-role">{{ a.role }}</span>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>
