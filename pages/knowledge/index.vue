<template>
  <Container>
    <div class="row">
      <div class="col">
        <h1 class="text-center border-bottom pb-4">知识</h1>
        <List>
          <ListItemLink
            v-for="article in articles"
            :key="article.title"
            :to="article.path"
          >
            {{ article.title }}
          </ListItemLink>
        </List>
      </div>
    </div>
  </Container>
</template>

<script lang="ts">
import Vue from "vue";
import Container from "components/Container.vue";
import List from "components/List.vue";
import ListItemLink from "components/ListItemLink.vue";

export default Vue.extend({
  components: { Container, List, ListItemLink },
  async asyncData({ $content }) {
    const articles = await $content("knowledge").fetch();

    return {
      articles,
    };
  },
});
</script>
