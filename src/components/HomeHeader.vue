<template>
  <header class="sticky top-0 bg-white shadow">
    <!--
      <div class="bg-true-gray-700 text-white text-sm text-center py-2.5">
      Announcement
      </div>
    -->
    <div class="py-3 px-10">
      <div class="flex items-center justify-between">
        <NuxtLink to="/">
          <div class="i-izumi-withtype h-8 w-28" />
        </NuxtLink>
        <nav class="flex">
          <NuxtLink
            :to="{ path: '/', hash: '#products' }"
            class="p-3 text-sm font-bold hover:underline"
          >
            プロダクト
          </NuxtLink>
          <NuxtLink
            :to="{ path: '/', hash: '#about' }"
            class="p-3 text-sm font-bold hover:underline"
          >
            会社概要
          </NuxtLink>
          <NuxtLink
            :to="{ path: '/', hash: '#contact' }"
            class="p-3 text-sm font-bold hover:underline"
          >
            お問い合わせ
          </NuxtLink>
        </nav>
      </div>
    </div>
  </header>
</template>
