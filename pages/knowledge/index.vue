<template>
  <ul>
    <li v-for="article in articles" :key="article.title">
      <NuxtLink v-bind:to="article.path">{{ article.title }}</NuxtLink>
    </li>
  </ul>
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
