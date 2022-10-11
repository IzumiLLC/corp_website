<script setup lang="ts">
import '@unocss/reset/tailwind.css'
import { useHead } from '#imports'

useHead({
  title: 'Izumi LLC',
})
</script>

<template>
  <HomeHeader />
  <NuxtPage />
  <HomeFooter />
</template>
