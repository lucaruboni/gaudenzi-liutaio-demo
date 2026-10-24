<script setup>
import { useHead } from '@unhead/vue'
import { head } from '@/data/head'
import SiteHeader from '@/components/layout/SiteHeader.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import ModelsSection from '@/components/sections/ModelsSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import CraftSection from '@/components/sections/CraftSection.vue'
import WoodBand from '@/components/sections/WoodBand.vue'
import RepairsSection from '@/components/sections/RepairsSection.vue'
import ArtistsSection from '@/components/sections/ArtistsSection.vue'
import ShopSection from '@/components/sections/ShopSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'

useHead(head)
</script>

<template>
  <SiteHeader />
  <main id="top">
    <HeroSection />
    <ModelsSection />
    <AboutSection />
    <CraftSection />
    <WoodBand />
    <RepairsSection />
    <ArtistsSection />
    <ShopSection />
    <ContactSection />
  </main>
  <SiteFooter />
</template>
