import {
  DaffIdentifiable,
  ID,
} from '@daffodil/core';
import { DaffProductCollectionMetadata } from '@daffodil/product';

/**
 * The DaffCategoryPageMetadata describes the properties of a Category Page.
 */
export interface DaffCategoryPageMetadata extends DaffProductCollectionMetadata, DaffIdentifiable {
  /**
   * The identifiers of the products currently visible in the category.
   */
  product_ids: ID[];
}
