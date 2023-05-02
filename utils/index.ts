import { computed, ComputedRef } from "vue";

export function usePageSlug(): ComputedRef<string> {
  const route = useRoute();
  const slug = route.params.slug;

  if (typeof slug === "string") {
    return computed(() => slug);
  }

  if (typeof slug === "object") {
    if (Array.isArray(slug)) {
      return computed(() => slug[0]);
    }
  }

  throw new Error("Unexpected type for slug; expected string or array");
}
