<script setup lang="ts">
import { defineProps } from 'vue'
import { Corp } from '~/types'

defineProps<{
  corp: Corp | null
}>()
</script>

<template>
  <div id="about" class="py-10 bg-dark-100 text-white">
    <InnerWrap>
      <h3 class="text-2xl font-bold">About</h3>
      <div class="pt-4">
        <dl>
          <dt class="text-lg font-bold">会社名</dt>
          <dd>{{ corp?.name }}</dd>
          <dt class="text-lg font-bold mt-2">本店所在地</dt>
          <dd>{{ corp?.location }}</dd>
          <dt class="text-lg font-bold mt-2">代表社員</dt>
          <dd>{{ corp?.representative }}</dd>
          <dt class="text-lg font-bold mt-2">設立</dt>
          <dd>{{ corp?.established }}</dd>
          <dt class="text-lg font-bold mt-2">社員数</dt>
          <dd>{{ `${corp?.employees}名` }}</dd>
        </dl>
        <p class="mt-2 text-xs">{{ `${corp?.updatedAt} 時点` }}</p>
      </div>
    </InnerWrap>
  </div>
</template>
