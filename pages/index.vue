<template>
  <article class="container mt-4">
    <div class="row">
      <div class="col">
        <List>
          <ListItem
            variant="button"
            component="nuxt-link"
            v-for="link in links"
            :key="link.title"
            :componentProps="{ to: link.url }"
          >
            {{ link.title }}
          </ListItem>
        </List>
      </div>
    </div>
  </article>
</template>

<script>
import List from "../components/List.vue";
import ListItem from "../components/ListItem.vue";

export default {
  components: { List, ListItem },
  computed: {
    links() {
      return [
        {
          url: "recipes/",
          title: "菜谱"
        },
        {
          url: "knowledge/ingredients",
          title: "食材"
        },
        {
          url: "knowledge/food-purchase",
          title: "食品采购"
        }
      ];
    }
  }
};
</script>
