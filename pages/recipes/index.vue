<template>
  <div>
    <PageTitle title="食谱" />
    <Container>
      <div class="flex justify-center pb-4 space-x-2">
        <button
          class="rounded-full p-3 text-white dark:text-black"
          v-for="tag in validTags"
          :key="tag"
          :class="tagActiveClasses(isTagActive(tag))"
          @click="toggleTag(tag)"
        >
          {{ tag }}
        </button>
      </div>
      <List>
        <ListItem v-for="recipe in recipes" :key="recipe.title">
          <ListItemLink :to="recipe.path">
            {{ recipe.title }}
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
import { validTags, Tag, Recipe } from "models";
import { FetchReturn } from "@nuxt/content/types/query-builder";

interface Data {
  validTags: Tag[];
}

interface AsyncData {
  recipes: FetchReturn | FetchReturn[];
}

function tags(query: any): Tag[] {
  if (!query.tags) {
    return validTags;
  }

  return (query.tags as string).split(",") as Tag[];
}

export default Vue.extend({
  components: { PageTitle, Container, List, ListItem, ListItemLink },
  data(): Data {
    return { validTags };
  },
  async asyncData({ $content, query }): Promise<AsyncData> {
    const recipes = await $content("recipes")
      // TODO: use .where
      // .where({ tags: { $eq: ["snacks"] } })
      .fetch()
      .then((recipes) => {
        const tagSet = new Set(tags(query));

        return recipes.filter((recipe: any) => {
          return recipe.tags.some((t: Tag) => tagSet.has(t));
        });
      });

    const validTagsSet = new Set(validTags);

    recipes.forEach((recipe: Recipe) => {
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
    tagActiveClasses(active: boolean): any {
      return {
        "bg-primary-700": !active,
        "bg-primary-500": active,
      };
    },
    isTagActive(tag: Tag): boolean {
      return this.activeTags.findIndex((t) => t === tag) !== -1;
    },
    async toggleTag(tag: Tag): Promise<void> {
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
      await this.$nuxt.refresh();
    },
  },
  computed: {
    activeTags(): Tag[] {
      const { query } = this.$route;

      return tags(query);
    },
    link(): string {
      return "nuxt-link";
    },
  },
});
</script>
