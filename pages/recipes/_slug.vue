<template>
  <div>
    <Commandbar>
      <NuxtLink class="command" to="/recipes">Back</NuxtLink>
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
              <tr v-for="ingredient in page.ingredients" :key="ingredient.name">
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

<script>
import Commandbar from "../../components/Commandbar.vue";
import Document from "../../components/Document.vue";
import DocumentTableOfContent from "../../components/DocumentTableOfContent.vue";

export default {
  components: { Commandbar, Document, DocumentTableOfContent },
  methods: {
    ingredientName(ingredient) {
      if (ingredient.optional) {
        return `(可选) ${ingredient.name}`;
      }

      return ingredient.name;
    },
    ingredientQuantity(ingredient) {
      if (ingredient.quantity && ingredient.unit) {
        return `${ingredient.quantity} (${ingredient.unit})`;
      }

      if (ingredient.quantity) {
        return `${ingredient.quantity}`;
      }

      return "";
    }
  },
  computed: {
    toc() {
      if (this.page.ingredients) {
        return [
          { text: "材料", id: "ingredients", depth: 2 },
          ...this.page.toc
        ];
      }

      return this.page.toc;
    }
  },
  async asyncData({ $content, params }) {
    const slug = params.slug || "borscht";
    const page = await $content("recipes/", slug).fetch();

    return {
      page
    };
  }
};
</script>
