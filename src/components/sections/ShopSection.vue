<script setup>
import { shopCategories } from '@/data/shop'
import { site } from '@/data/site'
</script>

<template>
  <section id="negozio" class="section section-alt">
    <div class="wrap split">
      <div class="split-body">
        <p class="eyebrow">Il negozio</p>
        <h2>Brand selezionati</h2>
        <p>
          Scelti per prestigio e miglior rapporto qualità/prezzo, con setup fatto in laboratorio. Ordina
          online o passa in negozio a Cattolica.
        </p>
        <div class="cats">
          <a v-for="c in shopCategories" :key="c.href" :href="c.href" target="_blank" rel="noopener">{{
            c.label
          }}</a>
        </div>
        <p class="brands">Effetti Dunlop, MXR, Formulab e altri marchi.</p>
      </div>
      <div class="yt">
        <p class="eyebrow">YouTube · @gaudenziguitars</p>
        <h3>I miei lavori su YouTube</h3>
        <p>
          Presentazioni delle chitarre, riparazioni prima e dopo, tutorial sulla manutenzione e lavorazioni
          dal vivo.
        </p>
        <a class="btn btn-outline" :href="site.social.youtube" target="_blank" rel="noopener"
          >Guarda il canale ↗</a
        >
      </div>
    </div>
  </section>
</template>
