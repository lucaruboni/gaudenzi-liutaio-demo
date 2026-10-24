<script setup>
import ContactForm from '@/components/ui/ContactForm.vue'
import CopyButton from '@/components/ui/CopyButton.vue'
import OpeningHours from '@/components/ui/OpeningHours.vue'
import { site } from '@/data/site'

const a = site.address
</script>

<template>
  <section id="contatti" class="section">
    <div class="wrap contact">
      <div class="split-body">
        <p class="eyebrow">Contatti</p>
        <h2>Vieni in bottega</h2>
        <div class="contact-info">
          <div class="info-row">
            <span class="k">Indirizzo</span
            ><span class="v">{{ a.street }}, {{ a.postalCode }} {{ a.city }} ({{ a.province }})</span
            ><a class="link-u maps-link" :href="site.mapsUrl" target="_blank" rel="noopener"
              >Apri in Maps ↗</a
            >
          </div>
          <div class="info-row">
            <span class="k">Telefono e WhatsApp</span
            ><span class="v-line"
              ><span id="phone" class="v">{{ site.phone }}</span
              ><CopyButton target="phone"
            /></span>
          </div>
          <div class="info-row">
            <span class="k">Email</span
            ><span class="v-line"
              ><span id="email" class="v">{{ site.email }}</span
              ><CopyButton target="email"
            /></span>
          </div>
          <div class="info-row">
            <span class="k">Orario estivo</span>
            <OpeningHours />
            <p class="hours-note">
              Aperto fuori orario su appuntamento. Gli orari possono variare per lavori esterni: meglio
              chiamare prima.
            </p>
          </div>
          <div class="info-row">
            <span class="k">Social</span>
            <div class="socials">
              <a class="link-u" :href="site.social.instagram" target="_blank" rel="noopener">Instagram ↗</a>
              <a class="link-u" :href="site.social.facebook" target="_blank" rel="noopener">Facebook ↗</a>
              <a class="link-u" :href="site.social.youtube" target="_blank" rel="noopener">YouTube ↗</a>
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
    </div>
  </section>
</template>
