import {
  DaffFilterRequest,
  DaffFilterType,
} from '@daffodil/core';
import { ProductFilter } from '@daffodil/driver/shopify';

/**
 * Transforms a {@link DaffFilterRequest} array into a {@link ProductFilter} array object.
 *
 * @param daffFilters - {@link DaffFilterRequest} object
 * @returns An array of {@link ProductFilter} objects
 */
export const shopifyProductFilterRequestTransformer = (daffFilters: DaffFilterRequest[]): ProductFilter[] => {
  const result: ProductFilter[] = [];
  for (const filter of daffFilters) {
    if (filter.type === DaffFilterType.Equal && filter.name === 'available') {
      result.push({ available: filter.value.length > 0 });
    } else if (filter.type === DaffFilterType.RangeNumeric && filter.name === 'price') {
      result.push({ price: { min: filter.value.min, max: filter.value.max }});
    }
  }
  return result;
};
