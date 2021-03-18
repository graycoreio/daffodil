import { ID } from '@daffodil/core';
import {
  DaffSortable,
  DaffNumericallyPaginable,
} from '@daffodil/core/state';

import { DaffCategoryFilter } from './category-filter';

export interface DaffCategoryPageMetadata extends DaffSortable, DaffNumericallyPaginable {
  id: ID;
  total_products: number;
	product_ids: string[];
  filters: DaffCategoryFilter[];
}
