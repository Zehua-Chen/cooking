<template>
  <div>
    <PageTitle title="知识" />
    <Container>
      <List>
        <ListItemLink
          v-for="article in articles"
          :key="article.title"
          :to="article.path"
        >
          {{ article.title }}
        </ListItemLink>
      </List>
    </Container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import PageTitle from "components/PageTitle.vue";
import Container from "components/Container.vue";
import List from "components/List.vue";
import ListItemLink from "components/ListItemLink.vue";

export default Vue.extend({
  components: { PageTitle, Container, List, ListItemLink },
  async asyncData({ $content }) {
    const articles = await $content("knowledge").fetch();

    return {
      articles,
    };
  },
});
</script>
