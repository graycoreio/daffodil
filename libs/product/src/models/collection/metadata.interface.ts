import {
  DaffSortable,
  DaffNumericallyPaginable,
} from '@daffodil/core';

import { DaffProductFilterable } from '../filters/public_api';

/**
 * The `DaffProductCollectionMetadata` describes the state of an abstract collection of products.
 * It supports filtering, sorting, and pagination.
 */
export interface DaffProductCollectionMetadata extends DaffSortable, DaffNumericallyPaginable, DaffProductFilterable {
  /**
   * The total number of products in this product collection.
   */
  total_products: number;
}
