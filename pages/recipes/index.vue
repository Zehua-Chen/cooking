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
        <ListItem v-for="recipe in activeRecipes" :key="recipe.title">
          <ListItemLink :to="recipe._path">
            <span class="space-x-2">
              {{ recipe.title }}
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

<script lang="ts" setup async>
import { LocationQuery } from "vue-router";
import PageTitle from "components/PageTitle.vue";
import Container from "components/Container.vue";
import List from "components/List.vue";
import ListItem from "components/ListItem.vue";
import ListItemLink from "components/ListItemLink.vue";
import Tag from "components/Tag.vue";
import * as models from "models";

function tagsFromQuery(query: LocationQuery): models.Tag[] {
  if (!query.tags) {
    return models.validTags;
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

const validTags = ref(models.validTags);
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
  queryContent("/recipes").find()
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
</script>
