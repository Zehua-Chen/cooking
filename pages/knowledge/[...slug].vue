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
import { usePageSlug } from "utils";

const knowledgeSlug = usePageSlug();

const { data: page } = await useAsyncData(
  `knowledge/${knowledgeSlug}`,
  () => queryContent(`knowledge/${knowledgeSlug}`).findOne(),
  { watch: [() => knowledgeSlug] }
);
</script>
