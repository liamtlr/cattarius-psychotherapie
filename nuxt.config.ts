// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    pageTransition: { name: 'fade' },
    head: {
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        { name: 'charset', content: 'UTF-8' },
      ],
      htmlAttrs: {
        lang: 'de',
      },
    }
  },

})
