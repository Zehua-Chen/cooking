<template>
  <div>
    <Commandbar>
      <NuxtLink class="command" to="/knowledge">Back</NuxtLink>
    </Commandbar>
    <Document>
      <DocumentTableOfContent :toc="page.toc" />
      <article class="container pt-4">
        <nuxt-content :document="page" />
      </article>
    </Document>
  </div>
</template>

<script>
import Commandbar from "../../components/Commandbar.vue";
import Document from "../../components/Document.vue";
import DocumentTableOfContent from "../../components/DocumentTableOfContent.vue";

export default {
  components: { Commandbar, Document, DocumentTableOfContent },
  async asyncData({ $content, params }) {
    const slug = params.slug || "ingredients";
    const page = await $content("knowledge/", slug).fetch();

    return {
      page
    };
  }
};
</script>
