<template>
  <Container>
    <div class="row">
      <div class="col">
        <h1 class="text-center border-bottom pb-4">食谱</h1>
        <List>
          <ListItemLink
            v-for="recipe in recipes"
            :key="recipe.title"
            :to="recipe.path"
          >
            {{ recipe.title }}
          </ListItemLink>
        </List>
      </div>
    </div>
  </Container>
</template>

<style lang="scss" scoped></style>

<script lang="ts">
import Vue from "vue";
import Container from "components/Container.vue";
import List from "components/List.vue";
import ListItemLink from "components/ListItemLink.vue";

export default Vue.extend({
  components: { Container, List, ListItemLink },
  async asyncData({ $content, params }) {
    const recipes = await $content("recipes").fetch();

    return {
      recipes,
    };
  },
  computed: {
    link() {
      return "nuxt-link";
    },
  },
});
</script>
