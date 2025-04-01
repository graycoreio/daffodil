import {
  DaffFilterRequest,
  DaffFilterType,
} from '@daffodil/core';
import { ShopifyProductFilter } from '@daffodil/driver/shopify';

/**
 * Transforms a {@link DaffFilterRequest} array into a {@link ShopifyProductFilter} array object.
 *
 * @param daffFilters - array of {@link DaffFilterRequest} object
 * @returns A {@link ShopifyProductFilter} object
 */
export const shopifyProductFilterRequestTransformer = (daffFilters: DaffFilterRequest[]): ShopifyProductFilter => {
  const result: ShopifyProductFilter = {};
  for (const filter of daffFilters) {
    if (filter.type === DaffFilterType.Equal && filter.name === 'available') {
      result.available = filter.value.length > 0;
    } else if (filter.type === DaffFilterType.RangeNumeric && filter.name === 'price') {
      result.price = { min: filter.value.min, max: filter.value.max };
    }
    // todo: implement remaining ShopifyProductFilter fields - blocked by shopify product driver functinoality
  }
  return result;
};
