<template>
  <div>
    <PageTitle title="知识" />
    <Container>
      <List>
        <ListItem v-for="article in articles" :key="article.title">
          <ListItemLink :to="article.path">
            {{ article.title }}
          </ListItemLink>
        </ListItem>
      </List>
    </Container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import PageTitle from "components/PageTitle.vue";
import Container from "components/Container.vue";
import List from "components/List.vue";
import ListItem from "components/ListItem.vue";
import ListItemLink from "components/ListItemLink.vue";

export default Vue.extend({
  components: { PageTitle, Container, List, ListItem, ListItemLink },
  async asyncData({ $content }) {
    const articles = await $content("knowledge").fetch();

    return {
      articles,
    };
  },
});
</script>
