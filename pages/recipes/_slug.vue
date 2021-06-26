<template>
  <Document :document="page" />
</template>

<script>
import Document from "../../components/Document.vue";

export default {
  components: { Document },
  async asyncData({ $content, params }) {
    const slug = params.slug || "borscht";
    const page = await $content("recipes/", slug).fetch();

    return {
      page
    };
  }
};
</script>
