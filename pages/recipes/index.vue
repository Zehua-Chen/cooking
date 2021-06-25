<template>
  <div>
    <h1>食谱</h1>
    <ul>
      <li v-for="recipe in recipes" :key="recipe.title">
        <NuxtLink v-bind:to="recipe.path">{{ recipe.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const recipes = await $content("recipes").fetch();

    return {
      recipes
    };
  }
};
</script>
