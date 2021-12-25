import path from "path";

export default {
  alias: {
    components: path.resolve(__dirname, "components"),
    layouts: path.resolve(__dirname, "layouts")
  },
  target: "static",
  css: ["assets/css/index.scss"],
  buildModules: [
    "@nuxtjs/color-mode",
    ["@nuxt/typescript-build", { typeCheck: true }]
  ],
  modules: ["@nuxt/content"],
  content: {}
};
