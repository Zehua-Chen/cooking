import path from "path";

export default {
  alias: {
    components: path.resolve(__dirname, "components"),
    layouts: path.resolve(__dirname, "layouts"),
    models: path.resolve(__dirname, "models"),
  },
  target: "static",
  css: ["assets/css/main.css"],
  buildModules: [
    "@nuxtjs/color-mode",
    ["@nuxt/typescript-build", { typeCheck: true }],
  ],
  build: {
    // extract css during development would cause the browser to cache the
    // style sheet. Changes to stylesheet would therefore not be reflected
    // correctly
    extractCSS: process.env.NODE_ENV === "production",
  },
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss", "@nuxtjs/i18n"],
  content: {},
  colorMode: {
    classSuffix: "",
  },
  i18n: {
    locales: ["zh_CN"],
    defaultLocale: "zh_CN",
    vueI18n: {
      messages: {
        fallbackLocale: "zh_CN",
        zh_CN: {
          breakfast: "早饭",
          lunch: "午饭",
          dinner: "晚饭",
          snacks: "零食",
          others: "其他",
        },
      },
    },
  },
};
