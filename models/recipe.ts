import { ParsedContent } from "@nuxt/content/dist/runtime/types";

/**
 * Ingredients of a recipe
 */
export interface Ingredient {
  /**
   * Name of a recipe
   */
  name: string;

  /**
   * If this ingredient is optional
   */
  optional?: boolean;

  /**
   * Quantity to use with this ingredient
   */
  quantity?: number;

  /**
   * Unit to use with the quantity of this ingredient
   */
  unit?: number;

  /**
   * If this recipe belongs **only** to a variant of a recipe. This property
   * contains name of the variant
   */
  variant?: string;
  notes?: string;
}

/**
 * Defines a variant to a recipe
 */
export interface Variant {
  /**
   * Name of the recipe
   */
  name: string;
}

/**
 * Defines a recipe
 */
export interface Recipe extends ParsedContent {
  /**
   * Title of a recipe
   */
  title: string;

  /**
   * Variants of this recipe
   */
  variants: Variant[];

  /**
   * Ingredients of this variants
   */
  ingredients?: Ingredient[];

  /**
   * Tags
   */
  tags: Tag[];
}

export type Tag = "breakfast" | "lunch" | "dinner" | "snacks" | "others";

export const VALID_TAGS: readonly Tag[] = Object.freeze([
  "breakfast",
  "lunch",
  "dinner",
  "snacks",
  "others",
]);
