import { defineNuxtConfig } from "nuxt/config";
import path from "path";

export default defineNuxtConfig({
  alias: {
    components: path.resolve(__dirname, "components"),
    layouts: path.resolve(__dirname, "layouts"),
    models: path.resolve(__dirname, "models"),
    utils: path.resolve(__dirname, "utils"),
    styles: path.resolve(__dirname, "styles"),
  },
  css: ["assets/css/main.scss"],
  modules: ["@nuxt/content"],
  content: {},
  colorMode: {
    classSuffix: "",
  },
  typescript: {
    strict: true,
  },
});
