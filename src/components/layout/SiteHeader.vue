<script setup>
import { ref } from 'vue'
import { nav, site } from '@/data/site'
import { useTheme } from '@/composables/useTheme'
import logo from '@/assets/img/logo.png'

const { toggle: toggleTheme } = useTheme()
const menuOpen = ref(false)

function onMobileNavClick(e) {
  if (e.target.tagName === 'A') menuOpen.value = false
}
</script>

<template>
  <header class="site-header dark">
    <div class="wrap header-inner">
      <a class="brand" href="#top" aria-label="Gaudenzi Liuteria, torna su"
        ><img :src="logo" alt="Gaudenzi liuteria" width="369" height="142"
      /></a>
      <nav aria-label="Principale">
        <ul class="nav">
          <li v-for="item in nav" :key="item.href">
            <a :href="item.href">{{ item.label }}</a>
          </li>
        </ul>
      </nav>
      <div class="tools">
        <a
          class="icon-btn"
          :href="site.social.instagram"
          target="_blank"
          rel="noopener"
          aria-label="Instagram"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
          </svg>
        </a>
        <button
          id="theme-btn"
          class="icon-btn"
          type="button"
          aria-label="Cambia tema chiaro o scuro"
          @click="toggleTheme"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
            <circle cx="12" cy="12" r="4" />
            <path
              d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
            />
          </svg>
        </button>
        <a class="btn header-cta" href="#contatti">Contattami</a>
        <button
          id="menu-btn"
          class="icon-btn menu-btn"
          type="button"
          :aria-expanded="String(menuOpen)"
          aria-controls="mobile-nav"
          aria-label="Apri menu"
          @click="menuOpen = !menuOpen"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>
    </div>
    <div id="mobile-nav" class="wrap" :hidden="!menuOpen">
      <nav class="mobile-nav" aria-label="Menu" @click="onMobileNavClick">
        <a v-for="item in nav" :key="item.href" :href="item.href">{{ item.label }}</a>
      </nav>
    </div>
  </header>
</template>
