<template>
  <div>
    <Commandbar>
      <NuxtLink class="command" to="/knowledge">Back</NuxtLink>
    </Commandbar>
    <Document>
      <template #toc>
        <DocumentTableOfContent :toc="page.toc" />
      </template>
      <template #content>
        <nuxt-content :document="page" />
      </template>
    </Document>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Commandbar from "components/Commandbar.vue";
import Document from "components/Document.vue";
import DocumentTableOfContent from "components/DocumentTableOfContent.vue";

export default Vue.extend({
  components: { Commandbar, Document, DocumentTableOfContent },
  async asyncData({ $content, params }) {
    const slug = params.slug || "ingredients";
    const page = await $content("knowledge/", slug).fetch();

    return {
      page,
    };
  },
});
</script>
