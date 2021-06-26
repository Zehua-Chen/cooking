<template>
  <Document :document="page" />
</template>

<script>
import Document from "../../components/Document.vue";

export default {
  components: { Document },
  async asyncData({ $content, params }) {
    const slug = params.slug || "ingredients";
    const page = await $content("knowledge/", slug).fetch();

    return {
      page
    };
  }
};
</script>
