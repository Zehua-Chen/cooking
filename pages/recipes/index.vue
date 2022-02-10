<template>
  <div>
    <PageTitle title="食谱" />
    <Container>
      <List>
        <ListItemLink
          v-for="recipe in recipes"
          :key="recipe.title"
          :to="recipe.path"
        >
          {{ recipe.title }}
        </ListItemLink>
      </List>
    </Container>
  </div>
</template>

<style lang="scss" scoped></style>

<script lang="ts">
import Vue from "vue";
import PageTitle from "components/PageTitle.vue";
import Container from "components/Container.vue";
import List from "components/List.vue";
import ListItemLink from "components/ListItemLink.vue";

export default Vue.extend({
  components: { PageTitle, Container, List, ListItemLink },
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
