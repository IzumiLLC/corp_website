// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: 'src',
  typescript: {
    strict: true,
  },

  runtimeConfig: {
    apiFormEndpoint: process.env.API_FORM_ENDPOINT,
    public: {},
  },

  modules: ['@unocss/nuxt', '@formkit/nuxt'],

  formkit: {
    defaultConfig: false,
    configFile: './formkit.config.ts',
  },
})
