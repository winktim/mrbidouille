const features = ['es2015', 'es2016', 'IntersectionObserver'].join('%2C')

export default {
  ssr: false,
  target: 'static',
  generate: {
    subFolders: false,
  },
  /*
   ** Headers of the page
   */
  head: {
    title: 'Mr. Bidouille',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 'http-equiv': 'X-UA-Compatible', 'content': 'ie=edge' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Tech and Hack blog about real cars and simulated ones, coming to you from the cheesy mountains of Switzerland',
      },
      { hid: 'theme-color', name: 'theme-color', content: '#212121' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest',
      },
    ],
    script: [
      {
        src: `https://polyfill.io/v3/polyfill.min.js?features=${features}`,
        body: true,
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#333' },
  /*
   ** Global CSS
   */
  css: [
    '~/assets/scss/tailwind.scss',
    '~/assets/scss/icons.scss',
    '~/assets/scss/components.scss',
    '~/assets/scss/fonts.scss',
    '~/assets/scss/reset.scss',
    '~/assets/scss/marked.scss',
  ],

  /*
   ** Nuxt.js modules
   */
  buildModules: ['nuxt-purgecss'],

  purgeCSS: {
    mode: 'webpack',
    whitelist: [
      'nuxt-link-exact-active',
      'page-enter-active',
      'page-leave-active',
      'page-leave-to',
      'page-enter',
    ],
    whitelistPatternsChildren: [/marked$/],
  },

  /*
   ** Build configuration
   */
  build: {
    extractCSS: true,
    postcss: {
      plugins: {
        tailwindcss: './tailwind.config.js',
      },
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
}
