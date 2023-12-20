<template>
  <div>
    <PageTitle title="知识" />
    <TextContent>
      <List>
        <ListItem
          v-if="articles"
          v-for="article in articles"
          variant="link"
          :key="article.title"
          :to="article._path"
        >
          {{ article.title }}
        </ListItem>
      </List>
    </TextContent>
  </div>
</template>

<script lang="ts" setup>
import PageTitle from "components/PageTitle.vue";
import TextContent from "components/TextContent.vue";
import List from "components/List.vue";
import ListItem from "components/ListItem.vue";
import { Knowledge } from "models";

const { data: articles } = await useAsyncData(() =>
  queryContent<Knowledge>("/knowledge").find()
);
</script>
