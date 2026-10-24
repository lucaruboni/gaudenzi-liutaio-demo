<script setup>
import { site } from '@/data/site'
import logo from '@/assets/img/logo.png'
</script>

<template>
  <footer class="footer dark">
    <div class="wrap">
      <div class="footer-grid">
        <div class="footer-brand">
          <img :src="logo" alt="Gaudenzi liuteria" width="369" height="142" loading="lazy" />
          <p>
            Chitarre elettriche ed acustiche Made in Italy. Liuteria, riparazioni e negozio a Cattolica dal
            {{ site.since }}.
          </p>
        </div>
        <div>
          <h4>Liuteria</h4>
          <ul>
            <li><a href="#chitarre">Acustiche</a></li>
            <li><a href="#chitarre">Elettriche</a></li>
            <li><a href="#riparazioni">Riparazioni</a></li>
          </ul>
        </div>
        <div>
          <h4>Scopri</h4>
          <ul>
            <li><a href="#artisti">Artisti</a></li>
            <li><a href="#negozio">Negozio</a></li>
            <li><a :href="site.social.youtube" target="_blank" rel="noopener">YouTube</a></li>
          </ul>
        </div>
        <div>
          <h4>Contatti</h4>
          <ul>
            <li>
              <a href="#contatti">{{ site.phone }}</a>
            </li>
            <!-- &#8203; = punto di a capo per l'indirizzo email su schermi stretti -->
            <li><a href="#contatti">info@gaudenzi&#8203;guitars.com</a></li>
            <li>
              <a href="#contatti">{{ site.address.street }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 {{ site.name }} · {{ site.address.city }} ({{ site.address.province }})</span
        ><span>Demo di proposta · nuovo sito</span>
      </div>
    </div>
  </footer>
</template>
