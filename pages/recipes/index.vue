<template>
  <div>
    <PageTitle title="食谱" />
    <div class="sticky top-0 bg-background-100 dark:bg-background-800">
      <Container class="flex pb-2 pt-2 justify-center space-x-2">
        <Tag
          v-for="tag in validTags"
          :key="tag"
          :active="isTagActive(tag)"
          @click="toggleTag(tag)"
        >
          {{ $t(tag) }}
        </Tag>
      </Container>
    </div>
    <Container>
      <List>
        <ListItem v-for="recipe in recipes" :key="recipe.title">
          <ListItemLink :to="recipe.path">
            {{ recipe.title }}
            <span class="space-x-2">
              <Tag v-for="tag in recipe.tags" :key="tag" small>
                {{ $t(tag) }}
              </Tag>
            </span>
          </ListItemLink>
        </ListItem>
      </List>
    </Container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { FetchReturn } from "@nuxt/content/types/query-builder";
import PageTitle from "components/PageTitle.vue";
import Container from "components/Container.vue";
import List from "components/List.vue";
import ListItem from "components/ListItem.vue";
import ListItemLink from "components/ListItemLink.vue";
import Tag from "components/Tag.vue";
import * as models from "models";

interface Data {
  validTags: models.Tag[];
}

interface AsyncData {
  recipes: FetchReturn | FetchReturn[];
}

function tags(query: any): models.Tag[] {
  if (!query.tags) {
    return models.validTags;
  }

  return (query.tags as string).split(",") as models.Tag[];
}

export default Vue.extend({
  components: { PageTitle, Container, List, ListItem, ListItemLink, Tag },
  data(): Data {
    return { validTags: models.validTags };
  },
  async asyncData({ $content, query }): Promise<AsyncData> {
    const recipes = await $content("recipes")
      // TODO: use .where
      // .where({ tags: { $eq: ["snacks"] } })
      .sortBy("slug")
      .fetch()
      .then((recipes) => {
        const tagSet = new Set(tags(query));

        return recipes.filter((recipe: any) => {
          return recipe.tags.some((t: models.Tag) => tagSet.has(t));
        });
      });

    const validTagsSet = new Set(models.validTags);

    recipes.forEach((recipe: models.Recipe) => {
      recipe.tags.forEach((tag) => {
        if (!validTagsSet.has(tag)) {
          throw Error(`recipe ${recipe.title}'s tag ${tag} is not valid`);
        }
      });
    });

    return {
      recipes,
    };
  },
  methods: {
    isTagActive(tag: models.Tag): boolean {
      return this.activeTags.findIndex((t) => t === tag) !== -1;
    },
    async toggleTag(tag: models.Tag): Promise<void> {
      const { path } = this.$route;
      let tags = [...this.activeTags];

      if (this.isTagActive(tag)) {
        tags.splice(
          tags.findIndex((t) => t === tag),
          1
        );
      } else {
        tags.push(tag);
      }

      await this.$router.push({ path, query: { tags: tags.join(",") } });
    },
  },
  computed: {
    activeTags(): models.Tag[] {
      const { query } = this.$route;

      return tags(query);
    },
    link(): string {
      return "nuxt-link";
    },
  },
  watch: {
    "$route.query.tags": async function () {
      await this.$nuxt.refresh();
    },
  },
});
</script>
