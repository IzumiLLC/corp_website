<script setup lang="ts">
import { useRuntimeConfig } from '#imports'
import { FormKit } from '@formkit/vue'

const { apiFormEndpoint } = useRuntimeConfig()
</script>

<template>
  <div id="contact" class="py-10 bg-light-300">
    <InnerWrap>
      <h3 class="text-2xl font-bold">Contact</h3>
      <div class="pt-4">
        <FormKit type="form" method="post" :action="apiFormEndpoint">
          <FormKit
            type="text"
            name="name"
            label="お名前"
            validation="required|length:3,20"
            validation-visiblity="dirty"
          />
          <FormKit
            type="email"
            name="email"
            label="メールアドレス"
            placeholder="email@example.com"
            validation="required|email"
            validation-visiblity="dirty"
          />
          <FormKit
            type="textarea"
            name="inquiry"
            label="お問い合わせ内容"
            validation="required|length:20,200"
            validation-visiblity="dirty"
          />
        </FormKit>
      </div>
    </InnerWrap>
  </div>
</template>
