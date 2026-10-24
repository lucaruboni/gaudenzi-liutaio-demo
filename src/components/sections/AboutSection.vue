<script setup>
import mauro from '@/assets/img/mauro.webp'
import { models } from '@/data/models'
import { site } from '@/data/site'

const acousticCount = models.filter((m) => m.filters.includes('acustica')).length
</script>

<template>
  <section id="chi-siamo" class="section section-alt">
    <div class="wrap split rev">
      <div class="split-body">
        <p class="eyebrow">Chi siamo</p>
        <h2>Mauro Gaudenzi, liutaio</h2>
        <p class="quote">
          “Le mie chitarre sono strumenti realizzati su misura, con la massima cura. Devono poter creare un
          legame col musicista e accompagnarlo per tutta la vita.”
        </p>
        <p>
          Dalla progettazione alla realizzazione di chitarre acustiche ed elettriche. I migliori legni
          accuratamente selezionati, hardware ed elettronica di alta qualità, per strumenti dal design
          innovativo, alta suonabilità e finiture esclusive.
        </p>
        <div class="stats" aria-label="In breve">
          <div class="stat">
            <div class="stat-v">{{ site.since }}</div>
            <div class="stat-l">Liuteria dal</div>
          </div>
          <div class="stat">
            <div class="stat-v">{{ acousticCount }}</div>
            <div class="stat-l">Acustiche in catalogo</div>
          </div>
          <div class="stat">
            <div class="stat-v">7–10 gg</div>
            <div class="stat-l">Tempi medi riparazione</div>
          </div>
          <div class="stat">
            <div class="stat-v">RN</div>
            <div class="stat-l">Fatte a Cattolica</div>
          </div>
        </div>
        <a class="btn btn-outline" href="#contatti">Progetta la tua chitarra</a>
      </div>
      <div class="split-media">
        <img
          :src="mauro"
          alt="Mauro Gaudenzi con una chitarra acustica Gaudenzi"
          width="900"
          height="703"
          loading="lazy"
        />
      </div>
    </div>
  </section>
</template>
