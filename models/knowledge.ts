import { ParsedContent } from "@nuxt/content/dist/runtime/types";

/**
 * Defines a recipe
 */
export interface Knowledge extends ParsedContent {
  /**
   * Title of a recipe
   */
  title: string;
}
