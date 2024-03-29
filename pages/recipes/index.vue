<template>
  <div>
    <PageTitle title="食谱" />
    <div
      class="RecipesPage_tagsContainer RecipesPage_tagsContainer__background"
    >
      <TextContent class="RecipesPage_tagsContainer_tags">
        <Tag
          v-for="tag in validTags"
          :key="tag"
          :active="isTagActive(tag)"
          @click="toggleTag(tag)"
        >
          {{ i18nMessages[tag] }}
        </Tag>
      </TextContent>
    </div>
    <TextContent class="RecipesPage_recipesContainer">
      <List>
        <ListItem
          v-if="activeRecipes"
          v-for="recipe in activeRecipes"
          variant="button"
          :key="recipe.title"
        >
          <ListItemLink
            class="RecipesPage_recipesContainer_recipe"
            :to="recipe._path"
          >
            {{ recipe.title }}
            <Tag
              v-for="tag in recipe.tags"
              :key="tag"
              small
              type="span"
              component="span"
            >
              {{ i18nMessages[tag] }}
            </Tag>
          </ListItemLink>
        </ListItem>
      </List>
    </TextContent>
  </div>
</template>

<style lang="scss" scoped>
@use "styles/layers";

@layer pages {
  .RecipesPage_tagsContainer {
    position: sticky;
    top: 0;
  }

  .RecipesPage_tagsContainer__background {
    background: var(--cooking-background);
  }

  .RecipesPage_tagsContainer_tags {
    padding: 10px 20px;
    display: flex;
    justify-content: center;
    gap: 5px;
  }

  .RecipesPage_recipesContainer {
    padding-top: 10px;
  }

  .RecipesPage_recipesContainer_recipe {
    display: flex;
    gap: 5px;
    align-items: center;
  }
}
</style>

<script lang="ts" setup async>
import { LocationQuery } from "vue-router";
import PageTitle from "components/PageTitle.vue";
import TextContent from "components/TextContent.vue";
import List from "components/List.vue";
import ListItem from "components/ListItem.vue";
import ListItemLink from "components/ListItemLink.vue";
import Tag from "components/Tag.vue";
import * as models from "models";

function tagsFromQuery(query: LocationQuery): models.Tag[] {
  if (!query.tags) {
    return [...models.VALID_TAGS];
  }

  return (query.tags as string).split(",") as models.Tag[];
}

function queryFromTags(tags: models.Tag[]): LocationQuery {
  return { tags: tags.join(",") };
}

function isTagActive(tag: models.Tag): boolean {
  return activeTags.value.findIndex((t) => t === tag) !== -1;
}

async function toggleTag(tag: models.Tag): Promise<void> {
  if (isTagActive(tag)) {
    activeTags.value.splice(
      activeTags.value.findIndex((t) => t === tag),
      1
    );
  } else {
    activeTags.value.push(tag);
  }
}

const route = useRoute();
const router = useRouter();

const validTags = computed(() => models.VALID_TAGS);
const activeTags = ref<models.Tag[]>([]);

watch(
  () => route.query.tags,
  () => {
    activeTags.value = tagsFromQuery(route.query);
  },
  { immediate: true }
);

watch(
  activeTags,
  () => {
    const { path } = route;
    router.push({ path, query: queryFromTags(activeTags.value) });
  },
  { deep: true }
);

const { data: recipes } = await useAsyncData("recipes", () =>
  queryContent<models.Recipe>("/recipes").find()
);

const activeRecipes = computed(() => {
  return recipes.value?.filter((parsedContent) => {
    const recipe = parsedContent as models.Recipe;

    for (
      let recipeTagIndex = 0;
      recipeTagIndex < recipe.tags.length;
      recipeTagIndex++
    ) {
      const recipeTag = recipe.tags[recipeTagIndex];

      if (isTagActive(recipeTag)) {
        return true;
      }
    }

    return false;
  });
});

const i18nMessages = {
  breakfast: "早餐",
  lunch: "午餐",
  dinner: "晚餐",
  snacks: "零食",
  others: "其他",
};
</script>
