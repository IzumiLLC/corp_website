<template>
  <div
    class="py-40 text-center bg-gradient-to-br from-light-blue-300 to-blue-400 text-white text-shadow"
  >
    <h2 class="text-3xl font-bold">楽をつくる、楽しいをつくる</h2>
    <h3 class="mt-2 text-xl">Creating Ease, Creating Fun</h3>
  </div>
  <div id="products" class="px-20 py-10 bg-white">
    <h4 class="text-2xl font-bold">Products</h4>
    <div class="pt-4">
      <p v-for="i in 20" :key="i">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
        maxime magnam, dolorum sapiente possimus, voluptatum quo saepe aliquid
        facere repellat aperiam ut nemo perspiciatis veniam facilis corporis
        neque quae error!
      </p>
    </div>
  </div>
  <div id="about" class="px-20 py-10 bg-dark-100 text-white">
    <h4 class="text-2xl font-bold">About</h4>
    <div class="pt-4">
      <p v-for="i in 20" :key="i">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
        maxime magnam, dolorum sapiente possimus, voluptatum quo saepe aliquid
        facere repellat aperiam ut nemo perspiciatis veniam facilis corporis
        neque quae error!
      </p>
    </div>
  </div>
  <div id="contact" class="px-20 py-10 bg-white">
    <h4 class="text-2xl font-bold">Contact</h4>
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
