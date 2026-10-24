<script setup>
import { onMounted, ref } from 'vue'
import { openingHours } from '@/data/hours'

// Il giorno corrente si calcola solo sul client: l'HTML pre-renderizzato resta neutro (niente hydration mismatch).
const today = ref(null)
onMounted(() => {
  today.value = new Date().getDay()
})
</script>

<template>
  <table id="hours" class="hours">
    <tbody>
      <tr v-for="row in openingHours" :key="row.day" :data-d="row.day" :class="{ today: row.day === today }">
        <th>{{ row.label }}</th>
        <td>{{ row.hours }}</td>
      </tr>
    </tbody>
  </table>
</template>
