<template>
  <article>
    <div class="grid h-40 content-center justify-center">
      <h1 class="text-3xl font-bold dark:text-white">Zehua Chen的做饭笔记</h1>
    </div>

    <Container>
      <List>
        <ListItemLink v-for="link in links" :to="link.url" :key="link.title">
          {{ link.title }}
        </ListItemLink>
      </List>
    </Container>
  </article>
</template>

<script lang="ts">
import Vue from "vue";
import Container from "components/Container.vue";
import List from "../components/List.vue";
import ListItemLink from "../components/ListItemLink.vue";

interface Link {
  url: string;
  title: string;
}

export default Vue.extend({
  components: { Container, List, ListItemLink },
  computed: {
    links(): Link[] {
      return [
        {
          url: "recipes/",
          title: "菜谱",
        },
        {
          url: "knowledge/ingredients",
          title: "食材",
        },
        {
          url: "knowledge/food-purchase",
          title: "食品采购",
        },
      ];
    },
  },
});
</script>
