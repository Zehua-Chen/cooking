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
          <ListItemLink :to="recipe._path">
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

<script lang="ts" setup async>
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

function tagsFromQuery(query: any): models.Tag[] {
  if (!query.tags) {
    return models.validTags;
  }

  return (query.tags as string).split(",") as models.Tag[];
}

const route = useRoute();
const router = useRouter();

const validTags = ref(models.validTags);
const activeTags = computed(() => {
  return tagsFromQuery(route.query);
});

function isTagActive(tag: models.Tag): boolean {
  return activeTags.value.findIndex((t) => t === tag) !== -1;
}

async function toggleTag(tag: models.Tag): Promise<void> {
  const { path } = route;
  let tags = [...activeTags.value];

  if (isTagActive(tag)) {
    tags.splice(
      tags.findIndex((t) => t === tag),
      1
    );
  } else {
    tags.push(tag);
  }

  await router.push({ path, query: { tags: tags.join(",") } });
}

watch(
  () => route.query,
  () => refreshNuxtData()
);

const { data: recipes } = await useAsyncData("recipes", () =>
  queryContent("/recipes").find()
);
</script>

<!-- <script lang="ts">
export default defineNuxtComponent({
  async asyncData(props) {
    console.log("asyncData()");
    console.log(props);

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
      data: {
        recipes,
      },
    };
  },
});
</script> -->
