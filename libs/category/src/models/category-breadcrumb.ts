import { DaffCategory } from './category';

/**
 * A breadcrumb describing a traversal down a tree of categories, often found in an array
 * describing the traversal to a particular category within a tree of categories.
 */
export interface DaffCategoryBreadcrumb {
  categoryId: DaffCategory['id'];
  categoryName: DaffCategory['name'];
  categoryLevel: number;
  categoryUrlKey: string;
}
