module.exports = {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'fb-lense',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Broken Glasses' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato'},
      { rel: "stylesheet", href: 'https://cdn.rawgit.com/moonspam/NanumSquare/master/nanumsquare.css'}
    ],
    script: [
      { src: "//developers.kakao.com/sdk/js/kakao.min.js" },
      // { src: '~~/js/naver-login.js'},
      { src: "https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.0.js" },
      { src: "https://code.jquery.com/jquery-3.3.1.js" }
    ]
  },
  css: [
    '~/assets/css/main.css'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: '~/components/loading.vue',
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
  },
}
