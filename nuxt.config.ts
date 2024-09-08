// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: 'ar',
        dir: 'rtl',
      },
      link: [
        { rel: "icon", type: 'image/png', href: 'https://salam-fm.com/logo.png' },
        { rel: "stylesheet", href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css' },
        { rel: "stylesheet", href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.rtl.min.css' },
      ]
    }
  },
  site: {
    url: 'https://salam-fm.com',
    name: 'Salam FM',
    description: 'Salam FM Radio is a digital radio dedicated to recitation and beautification of the Quran, Islamic chants, family-oriented social programs, and educational programs.',
    defaultLocale: 'en', // not needed if you have @nuxtjs/i18n installed
  },
  css: ["~/assets/sass/main.scss"],
  modules: ["@nuxtjs/i18n", "nuxt-delay-hydration", "@nuxtjs/seo"],
  i18n: {
    locales: [
      {
        code: "en",
        iso: "en",
        file: "en.json",
        name: "English",
        dir: "ltr",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_the_U.S..svg/64px-Flag_of_the_U.S..svg.png",
      },
      {
        code: "ar",
        iso: "ar",
        file: "ar.json",
        name: "العربية",
        dir: "rtl",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/64px-Flag_of_Saudi_Arabia.svg.png",
      },
    ],
    langDir: "locale",
    strategy: "prefix_except_default",
    defaultLocale: "ar",
    lazy: true,
    // vueI18n: "./core/config/i18n.config.ts",
    baseUrl: process.env.BASE_URL,
  },
  delayHydration: {
    // enables nuxt-delay-hydration in dev mode for testing
    // NOTE: you should disable this once you've finished testing, it will break HMR
    // debug: process.env.NODE_ENV === 'development'
  },
  vite: {
    vue: {
      // template: {
      //   transformAssetUrls,
      // },
    },
    define: {
      "process.env.DEBUG": false,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
                @use "@/assets/sass/abstracts" as *;
          `,
        },
      },
    },
  },
})