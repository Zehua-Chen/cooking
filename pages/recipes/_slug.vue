<template>
  <div>
    <Commandbar>
      <NuxtLink class="command" to="/recipes">Back</NuxtLink>
    </Commandbar>
    <Document :document="page" />
  </div>
</template>

<script>
import Commandbar from "../../components/Commandbar.vue";
import Document from "../../components/Document.vue";

export default {
  components: { Commandbar, Document },
  async asyncData({ $content, params }) {
    const slug = params.slug || "borscht";
    const page = await $content("recipes/", slug).fetch();

    return {
      page
    };
  }
};
</script>
