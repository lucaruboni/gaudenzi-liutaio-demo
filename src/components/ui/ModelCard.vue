<script setup>
import { computed } from 'vue'
import { site } from '@/data/site'
import { img } from '@/utils/img'

const props = defineProps({
  model: { type: Object, required: true },
})

const href = computed(() => `${site.shopUrl}/prodotto/${props.model.slug}/`)
</script>

<template>
  <article class="model" :data-f="model.filters.join(' ')">
    <a class="model-media" :href="href" target="_blank" rel="noopener">
      <img
        :src="img(`${model.slug}.webp`)"
        :alt="`Gaudenzi ${model.name}`"
        width="480"
        height="600"
        loading="lazy"
      />
    </a>
    <div class="model-body">
      <span class="model-type">{{ model.type }}</span>
      <h3>{{ model.name }}</h3>
      <p class="model-spec">{{ model.spec }}</p>
      <p class="model-blurb">{{ model.blurb }}</p>
      <div class="model-foot">
        <span class="price">{{ model.price }}</span
        ><a class="model-link" :href="href" target="_blank" rel="noopener">Scheda ↗</a>
      </div>
    </div>
  </article>
</template>
