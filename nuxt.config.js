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
    "@nuxt/postcss8",
    "@nuxtjs/color-mode",
    ["@nuxt/typescript-build", { typeCheck: true }],
  ],
  build: {
    extractCSS: true,
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  modules: ["@nuxt/content"],
  content: {},
  colorMode: {
    classSuffix: "",
  },
};
