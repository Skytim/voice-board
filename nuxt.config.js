const routerBase =
  process.env.DEPLOY_ENV === "GH_PAGES"
    ? {
        target: "static",
        router: {
          base: "/voice-board/"
        }
      }
    : {};
const linkBase =
  process.env.DEPLOY_ENV === "GH_PAGES"
    ? {
        link: [
          {
            rel: "icon",
            type: "image/x-icon",
            href: "/voice-board/favicon.png"
          }
        ]
      }
    : {
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }]
      };
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ...routerBase,
  head: {
    title: "VoiceBoard",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "VoiceBoard, Author: Tim Tsai" },
      { property: "og:title", content: "VoiceBoard" },
      { property: "og:description", content: "Tim's VoiceBoard for mock" },
      { property: "og:site_name", content: "VoiceBoard" },
      { property: "og:locale", content: "zh_TW" }
    ],
    ...linkBase
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~plugins/filters.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  axios: {
    // proxy: true
  }
};
