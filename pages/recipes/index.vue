<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col">
        <h1>食谱</h1>
        <div class="list-group">
          <NuxtLink
            class="list-group-item list-group-item-action"
            v-for="recipe in recipes"
            :key="recipe.title"
            :to="recipe.path"
          >
            {{ recipe.title }}
          </NuxtLink>
        </div>
      </div>
    </div>
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
