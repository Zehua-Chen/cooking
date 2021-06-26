<template>
  <div class="container mt-4">
    <div class="row">
      <div class="d-none d-md-block col-md-3 pe-5">
        <TableOfContent :toc="page.toc" />
      </div>
      <div class="col-9">
        <nuxt-content :document="page" />
      </div>
    </div>
  </div>
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
