import { DaffFilterEqualOption } from '@daffodil/core';

import { daffShopifyIsFilterApplied } from './shopify-daff-filter-applied-check';
import {
  ShopifyFilter,
  ShopifyProductFilter,
} from '../codegen/generated-shopify-types';

/**
 * Transforms a ShopifyFilter['values'] {@link ShopifyFilter} object into a Record<DaffFilterEqualOption['value'], DaffFilterEqualOption> object.
 */
export const daffShopifyFilterOptionsTransformer = (shopifyFilterValues: ShopifyFilter['values'], appliedFilters: ShopifyProductFilter[]): Record<DaffFilterEqualOption['value'], DaffFilterEqualOption> => {
  const filterOptions: Record<DaffFilterEqualOption['value'], DaffFilterEqualOption> = {};
  for (const option of shopifyFilterValues) {
    filterOptions[option.label] = {
      label: option.label,
      value: option.input,
      count: undefined,
      applied: daffShopifyIsFilterApplied(option.input, appliedFilters),
    };
  }
  return filterOptions;
};
