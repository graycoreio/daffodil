import { DaffCategory } from "@daffodil/category";

/**
 * A helper function to verify that a model is a Category.
 * @param category
 */
export function isCategory(category: DaffCategory): boolean {
  return !!category.id
    && !!category.name;
}
