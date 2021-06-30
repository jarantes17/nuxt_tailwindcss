export default {
  head: {
    title: 'nuxt_tailwindcss',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  css: [],

  plugins: ['@/plugins/vee-validate.ts'],

  components: [{ path: '@/components', pathPrefix: false }],

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],

  modules: ['@nuxtjs/axios', '@nuxtjs/style-resources'],

  styleResources: {
    scss: ['@/components/bosons/*.scss']
  },

  axios: {},

  googleFonts: {
    display: 'swap',
    families: {
      Inter: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900]
      }
    }
  },

  build: {
    transpile: ['vee-validate', 'vee-validate/dist/rules'],
    extractCSS: true
  }
}
