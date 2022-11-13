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
  <div id="contact" class="px-20 py-10 bg-white">
    <h3 class="text-2xl font-bold">Contact</h3>
    <div class="pt-4">
      <p v-for="i in 20" :key="i">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
        maxime magnam, dolorum sapiente possimus, voluptatum quo saepe aliquid
        facere repellat aperiam ut nemo perspiciatis veniam facilis corporis
        neque quae error!
      </p>
    </div>
  </div>
</template>
