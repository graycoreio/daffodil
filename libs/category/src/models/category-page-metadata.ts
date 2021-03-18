import { ID } from '@daffodil/core';
import {
  DaffSortable,
  DaffNumericallyPaginable,
} from '@daffodil/core/state';

import { DaffCategoryFilter } from './category-filter';

export interface DaffCategoryPageMetadata extends DaffSortable, DaffNumericallyPaginable {
  /**
   * The ID of the currently visible category page.
   */
  id: ID;

  /**
   * The total number of products in the currently visible category.
   */
  total_products: number;

  /**
   * The identifiers of the products currently visible in the category
   */
  product_ids: ID[];

  /**
   * The currently applied filters on the category.
   */
  filters: DaffCategoryFilter[];
}
