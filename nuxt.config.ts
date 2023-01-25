// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: [{ src: "//embed.typeform.com/next/embed.js" }],
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
});
