<script setup>
import { useClipboard } from '@/composables/useClipboard'

const props = defineProps({
  target: { type: String, required: true },
})

const { copied, copyFrom } = useClipboard()

function onClick() {
  const el = document.getElementById(props.target)
  if (el) copyFrom(el)
}
</script>

<template>
  <button class="copy" type="button" :data-copy="target" @click="onClick">
    {{ copied ? 'Copiato' : 'Copia' }}
  </button>
</template>
