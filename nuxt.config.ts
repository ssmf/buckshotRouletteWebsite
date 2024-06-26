// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  nitro: {
    static: true,
  },
  devtools: { enabled: true },
  css: ['~/assets/main.css'],
  modules: ["@nuxtjs/sanity"],
  sanity: {
    projectId: 'exa8b4ra',
    dataset: 'production',
  },
})