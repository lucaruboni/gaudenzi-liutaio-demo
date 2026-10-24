<script setup>
import heroDesktop from '@/assets/img/hero-om24r.webp'
import heroMobile from '@/assets/img/hero-om24r-m.webp'
</script>

<template>
  <section class="hero dark">
    <div class="hero-media">
      <picture>
        <source media="(min-width: 900px)" :srcset="heroDesktop" />
        <img
          :src="heroMobile"
          alt="Gaudenzi OM24R, tavola in abete roasted e battipenna tartarugato"
          width="700"
          height="515"
          fetchpriority="high"
        />
      </picture>
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
