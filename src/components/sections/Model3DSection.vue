<script setup>
import GuitarViewer from '@/components/ui/GuitarViewer.vue'
import { model3d } from '@/data/model3d'

const c = model3d.credit
</script>

<template>
  <section id="in-3d" class="section section-alt">
    <div class="wrap split">
      <div class="split-body">
        <p class="eyebrow">Guardala da vicino</p>
        <h2>La forma di una dreadnought</h2>
        <p>
          Spalle ampie, cassa profonda, suono pieno e potente: è la forma della D23. Ruota il modello e
          osserva com’è fatta da ogni lato, dalla tavola alla paletta.
        </p>
        <a class="btn btn-outline" :href="model3d.productUrl" target="_blank" rel="noopener"
          >Scheda della D23 ↗</a
        >
        <p class="viewer3d-credit">
          Modello illustrativo, non riproduce la D23 in ogni dettaglio: «<a
            :href="c.url"
            target="_blank"
            rel="noopener"
            >{{ c.title }}</a
          >» di {{ c.author }}, licenza
          <a :href="c.licenseUrl" target="_blank" rel="noopener">{{ c.license }}</a
          >.
        </p>
      </div>
      <div class="viewer3d-wrap">
        <GuitarViewer />
        <p class="viewer3d-hint">Trascina per ruotare</p>
      </div>
    </div>
  </section>
</template>
