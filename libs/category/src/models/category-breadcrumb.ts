import { ID } from '@daffodil/core';

/**
 * A breadcrumb describing a traversal down a tree of categories, often found in an array
 * describing the traversal to a particular category within a tree of categories.
 */
export interface DaffCategoryBreadcrumb {
  categoryId: ID;
  categoryName: string;
  categoryLevel: number;
  categoryUrlKey: string;
}
