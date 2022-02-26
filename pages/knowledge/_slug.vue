<template>
  <Document>
    <template #toc>
      <TableOfContent :toc="page.toc" />
    </template>
    <template #content>
      <nuxt-content :document="page" />
    </template>
  </Document>
</template>

<script lang="ts">
import Vue from "vue";
import Document from "components/Document.vue";
import TableOfContent from "components/TableOfContent.vue";

export default Vue.extend({
  components: { Document, TableOfContent },
  async asyncData({ $content, params }) {
    const slug = params.slug || "ingredients";
    const page = await $content("knowledge/", slug).fetch();

    return {
      page,
    };
  },
});
</script>
