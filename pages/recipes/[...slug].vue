<template>
  <Document>
    <template #toc>
      <TableOfContent :toc="toc" />
    </template>

    <template #options>
      <select v-if="page?.variants" v-model="activeVariant">
        <option
          v-for="variant in page.variants"
          :key="variant.name"
          :value="variant"
        >
          {{ variant.name }}
        </option>
      </select>
    </template>

    <template #content>
      <h1>{{ page?.title }}</h1>
      <div v-if="page?.ingredients">
        <h2 id="ingredients">材料</h2>
        <table>
          <thead>
            <th>材料</th>
            <th>量</th>
            <th>其他</th>
          </thead>
          <tbody>
            <tr
              v-for="ingredient in ingredients"
              :key="ingredient.name"
              :class="ingredientRowStyles(ingredient)"
            >
              <td>{{ ingredientName(ingredient) }}</td>
              <td>{{ ingredientQuantity(ingredient) }}</td>
              <td>{{ ingredient.notes ? ingredient.notes : "" }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <ContentDoc />
    </template>
  </Document>
</template>

<style lang="scss" scoped>
.RecipePage_optionalIngredient {
  color: grey;
}
</style>

<script lang="ts" setup>
import { TocLink } from "@nuxt/content/dist/runtime/types";
import Document from "components/Document.vue";
import TableOfContent from "components/TableOfContent.vue";
import { usePageSlug } from "utils";

import { Ingredient } from "models";

function ingredientRowStyles(ingredient: Ingredient): any {
  return {
    RecipePage_optionalIngredient: ingredient.optional,
  };
}

function ingredientName(ingredient: Ingredient): string {
  if (ingredient.optional) {
    return `(可选) ${ingredient.name}`;
  }

  return ingredient.name;
}

function ingredientQuantity(ingredient: Ingredient): string {
  if (ingredient.quantity && ingredient.unit) {
    return `${ingredient.quantity} (${ingredient.unit})`;
  }

  if (ingredient.quantity) {
    return `${ingredient.quantity}`;
  }

  return "";
}

const recipeSlug = usePageSlug();

const { data: page } = await useAsyncData(
  `recipes/${recipeSlug}`,
  () => queryContent(`/recipes/${recipeSlug}`).findOne(),
  { watch: [() => recipeSlug] }
);

const activeVariant = ref(page.value?.variants ? page.value.variants[0] : null);

const toc = computed<TocLink[]>(() => {
  if (page.value) {
    if (page.value.ingredients) {
      return [
        { text: "材料", id: "ingredients", depth: 2 },
        ...page.value.body.toc.links!,
      ];
    }

    return page.value.body.toc.links!;
  }

  return [];
});

const ingredients = computed(() => {
  if (!activeVariant.value) {
    return page.value?.ingredients ?? [];
  }

  return (
    page.value?.ingredients?.filter((ingredient: Ingredient) => {
      return ingredient.variant
        ? ingredient.variant === activeVariant.value?.name
        : true;
    }) ?? []
  );
});
</script>
