<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col">
        <h1 class="text-center border-bottom pb-4">知识</h1>
        <List>
          <ListItem
            variant="button"
            component="nuxt-link"
            v-for="article in articles"
            :key="article.title"
            :componentProps="{ to: article.path }"
          >
            {{ article.title }}
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
  async asyncData({ $content }) {
    const articles = await $content("knowledge").fetch();

    return {
      articles
    };
  }
};
</script>
