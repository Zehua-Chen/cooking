function flattenSlug(slug: string | string[]): string {
  if (typeof slug === "string") {
    return slug;
  }

  if (typeof slug === "object") {
    if (Array.isArray(slug)) {
      return slug[0];
    }
  }

  throw new Error("Unexpected type for slug; expected string or array");
}

export function usePageSlug(): string {
  const route = useRoute();
  const slug = route.params.slug;

  return flattenSlug(slug);
}
