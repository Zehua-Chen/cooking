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

<script lang="ts" setup>
import PageTitle from "components/PageTitle.vue";
import Container from "components/Container.vue";
import List from "components/List.vue";
import ListItem from "components/ListItem.vue";
import ListItemLink from "components/ListItemLink.vue";

const { data: articles } = await useAsyncData(() =>
  queryContent("/knowledge").find()
);
</script>
