<template>
  <div>
    <PageTitle title="Zehua Chen的做饭笔记" />
    <TextContent>
      <List>
        <ListItem
          v-for="link in links"
          variant="link"
          :key="link.title"
          :to="link.url"
        >
          {{ link.title }}
        </ListItem>
      </List>
    </TextContent>
  </div>
</template>

<script lang="ts" setup>
import PageTitle from "components/PageTitle.vue";
import TextContent from "components/TextContent.vue";
import List from "../components/List.vue";
import ListItem from "../components/ListItem.vue";

interface Link {
  url: string;
  title: string;
}

const links = computed<Link[]>(() => {
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
});
</script>
