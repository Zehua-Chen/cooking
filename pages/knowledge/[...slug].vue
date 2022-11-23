<template>
  <Document>
    <template #toc>
      <TableOfContent v-if="page" :toc="page.body.toc.links" />
    </template>
    <template #content>
      <ContentDoc />
    </template>
  </Document>
</template>

<script lang="ts" setup>
import Document from "components/Document.vue";
import TableOfContent from "components/TableOfContent.vue";

const route = useRoute();
const { data: page } = await useAsyncData(() =>
  queryContent(`knowledge/${route.params.slug}`).findOne()
);
</script>
