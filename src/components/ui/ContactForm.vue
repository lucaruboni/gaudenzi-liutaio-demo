<script setup>
import { reactive, ref } from 'vue'
import { demoValues, requestTypes, validateContact } from '@/data/contact-form'
import { site } from '@/data/site'

const form = reactive({ ...demoValues })
const message = ref('')
const isError = ref(false)

function onSubmit() {
  if (!validateContact(form)) {
    isError.value = true
    message.value = 'Inserisci nome ed email validi.'
    return
  }
  // TODO(backend): invio reale (es. Cloudflare Pages Function + Turnstile). Vedi docs/memory/BACKLOG.md.
  isError.value = false
  message.value = `Demo: sul sito vero la richiesta arriva a ${site.email}.`
}
</script>

<template>
  <form id="form" class="form" novalidate @submit.prevent="onSubmit">
    <div class="field">
      <label for="f-name">Nome</label
      ><input id="f-name" v-model="form.name" name="name" autocomplete="name" />
    </div>
    <div class="field">
      <label for="f-mail">Email</label
      ><input id="f-mail" v-model="form.email" name="email" type="email" autocomplete="email" />
    </div>
    <div class="field">
      <label for="f-type">Richiesta</label>
      <select id="f-type" v-model="form.type" name="type">
        <option v-for="t in requestTypes" :key="t">{{ t }}</option>
      </select>
    </div>
    <div class="field">
      <label for="f-inst">Modello o strumento</label
      ><input id="f-inst" v-model="form.instrument" name="instrument" />
    </div>
    <div class="field full">
      <label for="f-msg">Messaggio</label
      ><textarea id="f-msg" v-model="form.message" name="message"></textarea>
    </div>
    <div class="form-foot">
      <button class="btn" type="submit">Invia richiesta</button>
      <span id="form-msg" class="form-msg" :class="{ 'is-error': isError }" role="status">{{ message }}</span>
    </div>
  </form>
</template>
