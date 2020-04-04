
export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Archivo:400,500,600,700&display=swap'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800&display=swap'}

    ],
       script: [
      { hid: 'stripe', src: 'https://kit.fontawesome.com/bb825573ac.js', defer: true }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [

      '@/assets/scss/main.scss'
  ],

  pageTransition: {
    name: 'fade',
    mode: 'out-in'

  },
 
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
   { src: '~plugins/nuxt-video-player-plugin.js', ssr: false } 
   
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
  ],
  /*
  ** Build configuration
  */
  build: {
      extend (config) {
      
    }
  },
    axios:{
     baseURL: 'http://cms.test/api/'
  },

}
