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
        {
          name: "description",
          content: "Approbierter Psychotherapeut in Mainz, Tiefenpsychologisch fundierte Psychotherapie, Einzeltherapie Mainz, Gruppentherapie Mainz, Paartherapie Mainz, Psychotherapie Marcel Cattarius"
        },
        {
          property: "og:title",
          content: "Psychotherapie Marcel Cattarius Mainz",
        },
        {
          property: "og:description",
          content: "Approbierter Psychotherapeut in Mainz, Tiefenpsychologisch fundierte Psychotherapie, Einzeltherapie Mainz, Gruppentherapie Mainz, Paartherapie Mainz, Psychotherapie Marcel Cattarius",
        },
        {
          property: "og:url", content:"https://www.psychotherapiecattarius.de%22/%3E",
        },
        {
          property: "og:site_name", content: "psychotherapiecattarius",
        },
        {
          property: "og:type", content: "website",
        },
        {
          name: "keywords",
          content: "Psychotherapie Mainz, Einzeltherapie Mainz, Gruppentherapie Mainz, Psychologe Mainz, Psychotherapeut, Psychotherapeutin, Psychotherapie, Paartherapie"
        },
      ],
      htmlAttrs: {
        lang: 'de',
      },
    }
  },

})
