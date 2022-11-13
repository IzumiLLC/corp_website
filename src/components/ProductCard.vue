<script setup lang="ts">
import { defineProps, resolveComponent } from 'vue'
import { Product } from '~/types'

defineProps<{
  name: Product['name']
  description: Product['description']
  thumbnail?: Product['thumbnail']
  url?: Product['url']
}>()

const NuxtLink = resolveComponent('NuxtLink')
</script>

<template>
  <component
    :is="url ? NuxtLink : 'div'"
    v-bind="url ? { to: url, target: '_blank', rel: 'noopener' } : {}"
    class="block w-full rounded-xl shadow bg-white"
    :class="{ 'hover:shadow-md': url }"
  >
    <div class="border-b border-true-gray-200">
      <img
        :src="thumbnail || '/img/no_image.png'"
        alt=""
        class="rounded-t-xl aspect-video w-full"
      />
    </div>
    <div class="p-3">
      <div class="flex items-center justify-between">
        <h4 class="font-bold">{{ name }}</h4>
        <div v-if="url" class="i-mdi-open-in-new w-4 h-4" />
      </div>
      <p class="mt-2 text-sm">{{ description }}</p>
    </div>
  </component>
</template>
