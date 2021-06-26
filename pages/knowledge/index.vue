<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col">
        <div class="list-group">
          <NuxtLink
            class="list-group-item list-group-item-action"
            v-for="article in articles"
            :key="article.title"
            :to="article.path"
          >
            {{ article.title }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content("knowledge").fetch();

    return {
      articles
    };
  }
};
</script>
