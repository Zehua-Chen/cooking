<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col">
        <h1>食谱</h1>
        <List>
          <ListItem
            variant="button"
            component="nuxt-link"
            v-for="recipe in recipes"
            :key="recipe.title"
            :componentProps="{ to: recipe.path }"
          >
            {{ recipe.title }}
          </ListItem>
        </List>
      </div>
    </div>
  </div>
</template>

<script>
import List from "../../components/List.vue";
import ListItem from "../../components/ListItem.vue";

export default {
  components: { List, ListItem },
  async asyncData({ $content, params }) {
    const recipes = await $content("recipes").fetch();

    return {
      recipes
    };
  },
  computed: {
    link() {
      return "nuxt-link";
    }
  }
};
</script>
