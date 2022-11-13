<script setup lang="ts">
import { useFetch } from '#imports'

const [{ data: products }, { data: corp }] = await Promise.all([
  await useFetch('/api/products'),
  await useFetch('/api/corp'),
])
</script>

<template>
  <HomeSectionHero />
  <HomeSectionProducts :products="products" />
  <HomeSectionAbout :corp="corp" />
  <HomeSectionContact />
</template>
