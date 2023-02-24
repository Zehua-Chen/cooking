<template>
  <div class="flex flex-col min-h-screen">
    <Navbar home="烹饪">
      <NavLink to="/recipes">食谱</NavLink>
      <NavLink to="/knowledge">知识</NavLink>
    </Navbar>
    <div class="grow">
      <slot />
    </div>

    <Container>
      <footer
        class="grid content-center justify-center mt-3 h-20 border-primary-400 border-t dark:text-white"
      >
        Made with Love by Zehua Chen
      </footer>
    </Container>
  </div>
</template>

<script lang="ts" setup>
import Navbar from "../components/Navbar.vue";
import NavLink from "../components/NavLink.vue";
import Container from "components/Container.vue";
import { Noscript, Script } from "@unhead/schema";

const development = process.env.NODE_ENV === "development";

const gtmNonScript: Noscript = {
  innerHTML: `<iframe
src="https://www.googletagmanager.com/ns.html?id=GTM-NRWD4TL"
height="0"
width="0"
style="display: none; visibility: hidden"></iframe>`,
  tagPosition: "bodyOpen",
};

const gtmScript: Script = {
  innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NRWD4TL');`,
};

useHead({
  title: "烹饪",
  meta: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
  ],
  link: [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: "anonymous",
    },
    {
      href: "https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;700&display=swap",
      rel: "stylesheet",
    },
  ],
  noscript: [...(development ? [] : [gtmNonScript])],
  script: [...(development ? [] : [gtmScript])],
});
</script>
