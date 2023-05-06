import { defineNuxtConfig } from "nuxt/config";
import path from "path";

export default defineNuxtConfig({
  alias: {
    components: path.resolve(__dirname, "components"),
    layouts: path.resolve(__dirname, "layouts"),
    models: path.resolve(__dirname, "models"),
    utils: path.resolve(__dirname, "utils"),
  },
  css: ["assets/css/main.scss"],
  modules: ["@nuxt/content", "@nuxtjs/i18n"],
  content: {},
  i18n: {
    locales: ["zh_CN"],
    defaultLocale: "zh_CN",
    vueI18n: {
      legacy: false,
      locale: "zh_CN",
      messages: {
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
  colorMode: {
    classSuffix: "",
  },
  typescript: {
    strict: true,
  },
});
