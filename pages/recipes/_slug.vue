<template>
  <article>
    <h1>目录</h1>
    <TableOfContent :tree="tree" />
    <nuxt-content :document="page" />
  </article>
</template>

<script>
import TableOfContent, { makeTree } from "../../components/TableOfContent.vue";

export default {
  components: { TableOfContent },
  async asyncData({ $content, params }) {
    const slug = params.slug || "borscht";
    const page = await $content("recipes/", slug).fetch();

    return {
      page
    };
  },
  computed: {
    tree() {
      return makeTree(this.page.toc);
    }
  }
};
</script>
