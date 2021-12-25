export interface Ingredient {
  name: string;
  optional?: boolean;
  quantity?: number;
  unit?: number;
  variant?: string;
}

export interface Variant {
  name: string;
}

export interface Page {
  variants: Variant[];
  ingredients?: Ingredient[];
  toc: any[];
}
