export default {
  target: "static",
  css: ["assets/css/index.scss"],
  buildModules: [
    "@nuxtjs/color-mode",
    ["@nuxt/typescript-build", { typeCheck: true }]
  ],
  modules: ["@nuxt/content"],
  content: {}
};
