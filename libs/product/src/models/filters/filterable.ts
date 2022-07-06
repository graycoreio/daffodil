

import { DaffProductFilter } from './filter';

/**
 * Describes an object that allows a specific product to be filterable.
 */
export interface DaffProductFilterable {
  /**
   * The filters available on the product.
   */
  filters: Record<DaffProductFilter['name'], DaffProductFilter>;
}
