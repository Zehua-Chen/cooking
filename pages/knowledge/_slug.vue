<template>
  <article>
    <h1>{{ page.title }}</h1>
    <TableOfContent :tree="tree" />
    <nuxt-content :document="page" />
  </article>
</template>

<script>
import TableOfContent, { makeTree } from "../../components/TableOfContent.vue";

export default {
  components: { TableOfContent },
  async asyncData({ $content, params }) {
    const slug = params.slug || "ingredients";
    const page = await $content("knowledge/", slug).fetch();

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
