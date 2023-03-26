export default defineNuxtConfig({
  ssr: false,
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
  ],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    ssr: {
      noExternal: ["vuetify"],
    }
  },
  sourcemap: {
    server: false,
    client: false,
  },
})
