import { DaffLocatable } from '@daffodil/core';

import { DaffCategory } from './category';

/**
 * A breadcrumb describing a traversal down a tree of categories, often found in an array
 * describing the traversal to a particular category within a tree of categories.
 */
export interface DaffCategoryBreadcrumb extends DaffLocatable {
  id: DaffCategory['id'];
  name: DaffCategory['name'];
  level: number;
}
