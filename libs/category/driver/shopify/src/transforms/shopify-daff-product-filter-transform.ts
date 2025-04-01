import {
  DaffFilterEqual,
  DaffFilterRangeNumeric,
  DaffFilters,
  DaffFilterType,
} from '@daffodil/core';
import {
  ShopifyPriceRangeFilter,
  ShopifyProductFilter,
} from '@daffodil/driver/shopify';

/**
 * Transforms a Shopify {@link ShopifyProductFilter} object into a {@link DaffFilters} object.
 */
export const daffShopifyProductFilterTransformer = (shopifyProductFilter: ShopifyProductFilter): DaffFilters => {
  const daffFilters: DaffFilters = {};
  if (shopifyProductFilter.price) {
    daffFilters['price'] = transformPriceRangeFilter('price', shopifyProductFilter.price);
  }
  if (shopifyProductFilter.available !== undefined) {
    daffFilters['available'] = transformEqualsFilter('available', shopifyProductFilter.available);
  }
  // todo: implement remaining ShopifyProductFilter fields - blocked by shopify product driver functinoality
  return daffFilters;
};

/**
 * Transforms a Shopify numeric range into a {@link DaffFilterRangeNumeric}.
 */
function transformPriceRangeFilter(filterName: string, range: ShopifyPriceRangeFilter): DaffFilterRangeNumeric {
  return {
    type: DaffFilterType.RangeNumeric,
    min: range.min,
    max: range.max,
    label: filterName,
    name: filterName,
    options: {
      [`${range.min}-${range.max}`]: {
        applied: true,
        min: { value: range.min, label: 'low' },
        max: { value: range.max, label: 'high' },
      },
    },
  };
}

/**
 * Transforms a boolean filter into a {@link DaffFilterEqual}.
 */
function transformEqualsFilter(filterName: string, value: boolean): DaffFilterEqual {
  return {
    type: DaffFilterType.Equal,
    label: filterName,
    name: filterName,
    options: {
      true: {
        value: `${value}`,
        label: `${filterName}`,
        count: 1,
        applied: true,
      },
      false: {
        value: `${!value}`,
        label: `Not ${filterName}`,
        count: 0,
        applied: true,
      },
    },
  };
}
