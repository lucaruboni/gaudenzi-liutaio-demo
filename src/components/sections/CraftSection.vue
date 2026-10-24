<script setup>
import lab from '@/assets/img/laboratorio.webp'
</script>

<template>
  <section id="liuteria" class="section">
    <div class="wrap split">
      <div class="split-body">
        <p class="eyebrow">Dietro ogni strumento</p>
        <h2>Niente è lasciato al caso</h2>
        <p class="manifesto">Costruire una chitarra non è assemblare delle parti. È trovare un equilibrio.</p>
        <p>
          Ogni scelta (legni, struttura, spessori) è fatta per ottenere controllo, risposta e dinamica. Dal
          2006 studio e analizzo strumenti per capire cosa funziona davvero. Oggi applico tutto questo in ogni
          chitarra che costruisco.
        </p>
        <p class="sign">Mauro Gaudenzi · Liutaio</p>
      </div>
      <div class="split-media">
        <img
          :src="lab"
          alt="Fasce e controfasce di una chitarra in lavorazione nel laboratorio"
          width="700"
          height="467"
          loading="lazy"
        />
      </div>
    </div>
  </section>
</template>
