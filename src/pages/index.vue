<template>
  <div class="mt-8 text-center">
    <h2 class="text-2xl font-bold">楽をつくる、楽しいをつくる</h2>
    <h3 class="text-lg">Creating Ease, Creating Fun</h3>
  </div>
  <div id="products" class="mt-8 px-20">
    <p v-for="i in 50" :key="i">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus maxime
      magnam, dolorum sapiente possimus, voluptatum quo saepe aliquid facere
      repellat aperiam ut nemo perspiciatis veniam facilis corporis neque quae
      error!
    </p>
  </div>
  <div id="about" class="mt-8 px-20">
    <p v-for="i in 50" :key="i">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus maxime
      magnam, dolorum sapiente possimus, voluptatum quo saepe aliquid facere
      repellat aperiam ut nemo perspiciatis veniam facilis corporis neque quae
      error!
    </p>
  </div>
  <div id="contact" class="mt-8 px-20">
    <p v-for="i in 50" :key="i">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus maxime
      magnam, dolorum sapiente possimus, voluptatum quo saepe aliquid facere
      repellat aperiam ut nemo perspiciatis veniam facilis corporis neque quae
      error!
    </p>
  </div>
</template>
