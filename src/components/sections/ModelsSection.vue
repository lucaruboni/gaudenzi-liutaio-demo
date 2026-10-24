<script setup>
import { ref } from 'vue'
import ModelCard from '@/components/ui/ModelCard.vue'
import { defaultFilter, matchesFilter, modelFilters, models } from '@/data/models'

const active = ref(defaultFilter)
const countFor = (key) => models.filter((m) => matchesFilter(m, key)).length
</script>

<template>
  <section id="chitarre" class="section">
    <div class="wrap">
      <div class="head">
        <p class="eyebrow">Le Gaudenzi</p>
        <h2>Tutti i modelli della liuteria</h2>
        <p class="lead">
          Orchestra Model, Dreadnought, Grand Concert e Small Body, più le elettriche e semiacustiche Swallow,
          Stardust e SW2. Amplificazione su richiesta, permuta del tuo strumento possibile.
        </p>
      </div>
      <div class="filters-scroll">
        <div class="filters" role="group" aria-label="Filtra modelli">
          <button
            v-for="f in modelFilters"
            :key="f.key"
            class="chip"
            type="button"
            :data-filter="f.key"
            :aria-pressed="String(active === f.key)"
            @click="active = f.key"
          >
            {{ f.label }}<span class="n">{{ countFor(f.key) }}</span>
          </button>
        </div>
      </div>
      <div id="models" class="models">
        <ModelCard v-for="m in models" :key="m.slug" :model="m" :hidden="!matchesFilter(m, active)" />
      </div>
      <p class="models-note">
        Prezzi dal catalogo attuale di gaudenziguitars.com. Le schede si aprono sul sito.
      </p>
    </div>
  </section>
</template>
