import {
  DaffFilterEqual,
  DaffFilterRangeNumeric,
  DaffFilters,
  DaffFilterType,
} from '@daffodil/core';
import {
  daffShopifyFilterJSONInputResultTransformer,
  daffShopifyFilterOptionsTransformer,
  ShopifyFilter,
  ShopifyProductFilter,
} from '@daffodil/driver/shopify';

/**
 * Transforms an array of Shopify {@link ShopifyProductFilter} objects into a {@link DaffFilters} object.
 */
export const daffShopifyProductFiltersTransformer = (shopifyQueryFilters: ShopifyProductFilter[], shopifyResultFilters: ShopifyFilter[]): DaffFilters => {
  const daffFilters: DaffFilters = {};
  for (const resultFilter of shopifyResultFilters) {
    if (resultFilter.type === 'PRICE_RANGE') {
      daffFilters[resultFilter.label] = transformNumericRangeFilter(resultFilter);
    } else {
      daffFilters[resultFilter.label] = transformEqualsFilter(resultFilter, shopifyQueryFilters);
    }
  }
  return daffFilters;
};

/**
 * Transforms a Shopify numeric range into a {@link DaffFilterRangeNumeric}.
 */
function transformNumericRangeFilter(shopifyFilter: ShopifyFilter): DaffFilterRangeNumeric {
  const inputData = daffShopifyFilterJSONInputResultTransformer(shopifyFilter.values[0].input);
  return {
    type: DaffFilterType.RangeNumeric,
    min: inputData.price.min,
    max: inputData.price.max,
    label: shopifyFilter.label,
    name: shopifyFilter.id,
    options: {
      price: {
        applied: true,
        min: { value: inputData.price.min, label: 'low' },
        max: { value: inputData.price.max, label: 'high' },
      },
    },
  };
}

/**
 * Transforms a Shopify numeric range into a {@link DaffFilterRangeNumeric}.
 */
function transformEqualsFilter(shopifyResultFilter: ShopifyFilter, shopifyQueryFilters: ShopifyProductFilter[]): DaffFilterEqual {
  return {
    type: DaffFilterType.Equal,
    label: shopifyResultFilter.label,
    name: shopifyResultFilter.id,
    options: daffShopifyFilterOptionsTransformer(shopifyResultFilter.values, shopifyQueryFilters),
  };
}
