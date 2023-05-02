<template>
  <div>
    <PageTitle title="知识" />
    <Container>
      <List>
        <ListItem
          v-if="articles"
          v-for="article in articles"
          variant="button"
          :key="article.title"
        >
          <ListItemLink :to="article._path">
            {{ article.title }}
          </ListItemLink>
        </ListItem>
      </List>
    </Container>
  </div>
</template>

<script lang="ts" setup>
import PageTitle from "components/PageTitle.vue";
import Container from "components/Container.vue";
import List from "components/List.vue";
import ListItem from "components/ListItem.vue";
import ListItemLink from "components/ListItemLink.vue";
import { Knowledge } from "models";

const { data: articles } = await useAsyncData(() =>
  queryContent<Knowledge>("/knowledge").find()
);
</script>
