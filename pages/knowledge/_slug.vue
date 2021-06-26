<template>
  <div class="container mt-4">
    <div class="row">
      <div class="d-none d-md-block col-md-3 ">
        <TableOfContent class="pe-5" :toc="page.toc" />
      </div>
      <div class="col-9">
        <nuxt-content :document="page" />
      </div>
    </div>
  </div>
</template>

<script>
import TableOfContent from "../../components/TableOfContent.vue";

export default {
  components: { TableOfContent },
  async asyncData({ $content, params }) {
    const slug = params.slug || "ingredients";
    const page = await $content("knowledge/", slug).fetch();

    return {
      page
    };
  }
};
</script>
