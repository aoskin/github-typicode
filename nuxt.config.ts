// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/sitemap'],

  site: {
    trailingSlash: true,
  },

  sitemap: {
    sources: [
      'http://localhost:3001/',
      'http://localhost:3001/posts/1',
      'http://localhost:3001/posts/2',
    ]
  },

  routeRules: {
    '/': { prerender: true },
    '/posts/1': { prerender: true },
    '/posts/2': { prerender: true },
  },

  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  }
})