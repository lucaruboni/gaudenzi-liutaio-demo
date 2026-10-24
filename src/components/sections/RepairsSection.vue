<script setup>
import { facts, services, shippingSteps } from '@/data/repairs'
</script>

<template>
  <section id="riparazioni" class="section section-alt">
    <div class="wrap">
      <div class="head">
        <p class="eyebrow">Laboratorio</p>
        <h2>Riparazioni e setup</h2>
        <p class="lead">
          Ogni strumento ha una storia e un’anima. Interventi su chitarre e bassi elettrici, acustici e
          semiacustici di ogni fascia, anche vintage o di liuteria. Preventivo personalizzato dopo una
          valutazione dello strumento.
        </p>
      </div>
      <div class="repairs">
        <div>
          <ul class="services">
            <li v-for="s in services" :key="s">{{ s }}</li>
          </ul>
          <div class="facts">
            <div v-for="f in facts" :key="f.k" class="fact" :class="{ promo: f.promo }">
              <span class="k">{{ f.k }}</span
              ><span class="v">{{ f.v }}</span>
            </div>
          </div>
        </div>
        <div class="ship-box">
          <h3>Vivi lontano? Spedisci lo strumento</h3>
          <ol class="ship">
            <li v-for="step in shippingSteps" :key="step">{{ step }}</li>
          </ol>
          <a class="btn" href="#contatti">Prenota una riparazione</a>
        </div>
      </div>
    </div>
  </section>
</template>
