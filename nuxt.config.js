const axios = require('axios')

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      { hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/zmot-institute-android-chrome-192x192.png' },
      { rel: 'canonical', href: 'https://zmotinstitute.com/' },
      { rel: 'alternate', hreflang: 'en', href: 'https://zmotinstitute.com/' },
      { rel: 'alternate', hreflang: 'es' ,href: 'https://zmotinstitute.com/es' },
      { rel: 'alternate', hreflang: 'pt-br' ,href: 'https://zmotinstitute.com/pt-br' },
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
    '@/assets/scss/style.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
      src: './plugins/GoogleAnalytics.js',
      mode: 'client'
    },
    {
      src: "@/plugins/aos",
      ssr: false
    },
    {
      src: '@/plugins/vue-agile',
      ssr: false
    },
    {
      src: '@/plugins/vue-tel-input',
      mode: 'client'
    },
    {
      src: '@/plugins/icons',
      mode: 'client'
    }
  ],
  router: {
  },
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    ['nuxt-fontawesome', {
      imports: [
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas']
        },
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: ['fab']
        }
      ]
    }],
    '@nuxtjs/robots',
    'nuxt-ssr-cache',
    "nuxt-compress",
    [
      'vue-sweetalert2/nuxt',
      {
        confirmButtonColor: '#41b882',
        cancelButtonColor: '#ff7674'
      }
    ],
    ['nuxt-i18n', {
      baseUrl: 'https://zmotinstitute.com', //need to change it when HTTPS
      seo: false,
      strategy: 'prefix_except_default',
      locales: [
        {
          name: 'English',
          code: 'en',
          iso: 'en-US'
        },
        {
          name: 'Português',
          code: 'pt-br',
          iso: 'pt-BR'
        },
        {
          name: 'Español',
          code: 'es',
          iso: 'es-ES'
        },
      ],
      defaultLocale: 'en',
      detectBrowserLanguage: {
        useCookie: true,
        alwaysRedirect: true
      },
      vueI18n: {
        fallbackLocale: 'en',
        messages: {
          en: require('./locales/en.json'),
          'pt-br': require('./locales/pt-br.json'),
          es: require('./locales/es.json')
        }
      }
    }],
    [
      "@nuxtjs/google-tag-manager",
      {
        id: "GTM-K3SW4XN",
        pageTracking: true
      }
    ],
    [
      '@nuxtjs/recaptcha', {
        /* reCAPTCHA options */
        hideBadge: false, // Hide badge element (v3 & v2 via size=invisible)
        siteKey: "6LdXyQEVAAAAAD5ECL2PFXuM39YFgpUpUY05_loV",
        version: 2,     // Version
        size: "normal"        // Size: 'compact', 'normal', 'invisible' (v2)
      }
    ],
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    hostname: 'https://zmotinstitute.com',
    // gzip: false,
    // i18n:true
    i18n: {
      defaultLocale: 'en',
      locales: ['en', 'es', 'pt-br'],
      routesNameSeparator: '___'
    },

    routes: async () => {
      const { data } = await axios.get('https://thezmot.com/wp-json/wp/v2/posts')
      return data.map((blog) => ({
        url:`/blog/${blog.slug}`,
        links: [
          { lang: 'en', url: blog.slug },
          { lang: 'es', url: `es/${blog.slug}` },
          { lang: 'pt-br', url: `pt-br/${blog.slug}` }
        ]
      }))
    }
  },
  /*
  ** Build configuration
  */
  build: {
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    }
  },
  robots: {
    UserAgent: '*',
    Disallow: ''
  },
  cache: {
    useHostPrefix: false,
    pages: [
      '/',
    ],

    key(route, context) {
      // custom function to return cache key, when used previous
      // properties (useHostPrefix, pages) are ignored. return
      // falsy value to bypass the cache
    },

    store: {
      type: 'memory',
      // maximum number of pages to store in memory
      max: 100,
      // number of seconds to store this page in cache
      ttl: 31536000,
    },
  },
  "nuxt-compress": {
    gzip: {
      cache: true
    },
    brotli: {
      threshold: 10240
    }
  },
  server: {
    port: 3000, // default: 3000
    host: '127.0.0.1' // default: localhost
  }
}
