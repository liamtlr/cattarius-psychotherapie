// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    pageTransition: { name: 'fade' },
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: '//db.onlinewebfonts.com/c/c90524dd000fae4fafbd8f791869cfe1?family=Accent+Graphic',
          type: 'text/css',
        },
        {
          rel: 'stylesheet',
          href: '//db.onlinewebfonts.com/c/0ff8990774ec4865c7f45befbafd4910?family=Gotham',
          type: 'text/css',
        },
      ],
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
