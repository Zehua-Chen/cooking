<template>
  <article>
    <h1>{{ page.title }}</h1>
    <nuxt-content :document="page" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const slug = params.slug || "borscht";
    const page = await $content("recipes/", slug).fetch();

    return {
      page
    };
  }
};
</script>
