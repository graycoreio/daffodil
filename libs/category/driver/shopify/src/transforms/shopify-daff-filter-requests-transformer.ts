import {
  DaffFilterRequest,
  DaffFilterType,
} from '@daffodil/core';
import { ShopifyProductFilter } from '@daffodil/driver/shopify';

/**
 * Transforms a {@link DaffFilterRequest} array into a {@link ShopifyProductFilter} object.
 *
 * @param daffFilters - array of {@link DaffFilterRequest} object
 * @returns An array of {@link ShopifyProductFilter} objects
 */
export const shopifyProductFilterRequestsTransformer = (daffFilterRequests: DaffFilterRequest[]): ShopifyProductFilter[] => {
  const result: ShopifyProductFilter[] = [];
  for (const filter of daffFilterRequests) {
    const shopifyFilter: ShopifyProductFilter = {};
    if (filter.type === DaffFilterType.Equal) {
      if (filter.value[0] === 'available') {
        shopifyFilter.available = filter.value[1].toLowerCase() === 'true';
      } else if (filter.value[0] === 'category') {
        shopifyFilter.category = { id: filter.value[1] };
      } else if (filter.value[0] === 'productMetafield' || filter.value[0] === 'taxonomyMetafield' || filter.value[0] === 'variantMetafield') {
        shopifyFilter[filter.value[0]] = {
          key: filter.name,
          namespace: filter.value[1],
          value: filter.value[2],
        };
      } else if (filter.value[0] === 'tag' || filter.value[0] === 'productVendor' || filter.value[0] === 'productType') {
        shopifyFilter[filter.value[0]] = filter.value[1];
      } else if (filter.value[0] === 'variantOption') {
        shopifyFilter[filter.value[0]] = {
          name: filter.name,
          value: filter.value[1],
        };
      }
    } else if (filter.type === DaffFilterType.RangeNumeric) {
      if (filter.name.toLowerCase() === 'price') {
        shopifyFilter.price = { min: filter.value.min, max: filter.value.max };
      }
    }
    result.push(shopifyFilter);
  }
  return result;
};
