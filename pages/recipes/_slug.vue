<template>
  <div>
    <Commandbar>
      <NuxtLink class="command" to="/recipes">Back</NuxtLink>
      <select v-if="page.variants" v-model="activeVariant">
        <option
          v-for="variant in page.variants"
          :key="variant.name"
          :value="variant"
        >
          {{ variant.name }}
        </option>
      </select>
    </Commandbar>
    <Document>
      <DocumentTableOfContent :toc="toc" />

      <article class="container pt-4">
        <h1>{{ page.title }}</h1>
        <div v-if="page.ingredients">
          <h2 id="ingredients">材料</h2>
          <table>
            <thead>
              <th>材料</th>
              <th>量</th>
              <th>其他</th>
            </thead>
            <tbody>
              <tr v-for="ingredient in ingredients" :key="ingredient.name">
                <td>{{ ingredientName(ingredient) }}</td>
                <td>{{ ingredientQuantity(ingredient) }}</td>
                <td>{{ ingredient.notes ? ingredient.notes : "" }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <nuxt-content :document="page" />
      </article>
    </Document>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Commandbar from "components/Commandbar.vue";
import Document from "components/Document.vue";
import DocumentTableOfContent from "components/DocumentTableOfContent.vue";
import { Ingredient, Page, Variant } from "content/recipes";

interface State {
  page: Page | null;
  activeVariant: Variant | null;
}

export default Vue.extend({
  components: { Commandbar, Document, DocumentTableOfContent },
  data(): State {
    return {
      page: null,
      activeVariant: null,
    };
  },
  methods: {
    ingredientName(ingredient: Ingredient): string {
      if (ingredient.optional) {
        return `(可选) ${ingredient.name}`;
      }

      return ingredient.name;
    },
    ingredientQuantity(ingredient: Ingredient): string {
      if (ingredient.quantity && ingredient.unit) {
        return `${ingredient.quantity} (${ingredient.unit})`;
      }

      if (ingredient.quantity) {
        return `${ingredient.quantity}`;
      }

      return "";
    },
  },
  computed: {
    toc(): any[] {
      const { page } = this;

      if (page) {
        if (page.ingredients) {
          return [{ text: "材料", id: "ingredients", depth: 2 }, ...page.toc];
        }

        return page.toc;
      }

      return [];
    },
    ingredients(): any[] {
      if (!this.activeVariant) {
        return this.page?.ingredients ?? [];
      }

      return (
        this.page?.ingredients?.filter((ingredient) => {
          return ingredient.variant
            ? ingredient.variant === this.activeVariant?.name
            : true;
        }) ?? []
      );
    },
  },
  async asyncData({ $content, params }) {
    const slug = params.slug || "borscht";
    const page = (await $content("recipes/", slug).fetch()) as unknown as Page;

    return {
      page,
      activeVariant: page.variants ? page.variants[0] : null,
    };
  },
});
</script>
