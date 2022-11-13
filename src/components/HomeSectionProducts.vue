<script setup lang="ts">
import { defineProps } from 'vue'
import { Product } from '~/types'

defineProps<{ products: Product[] | null }>()
</script>

<template>
  <div id="products" class="py-10 bg-light-300">
    <InnerWrap>
      <h3 class="text-2xl font-bold">Products</h3>
      <div class="pt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <ProductCard
          v-for="(product, idx) in products"
          :key="idx"
          v-bind="product"
        />
      </div>
    </InnerWrap>
  </div>
</template>
