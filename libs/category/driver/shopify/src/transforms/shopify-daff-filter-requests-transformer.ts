import {
  DaffFilterRequest,
  DaffFilterType,
} from '@daffodil/core';
import { ShopifyProductFilter } from '@daffodil/driver/shopify';

/**
 * Transforms a {@link DaffFilterRequest} array into a {@link ShopifyProductFilter} object.
 *
 * @param daffFilters - array of daffodil filter requests
 * @returns A corresponding array of shopify-readable filters
 */
export const shopifyProductFilterRequestsTransformer = (daffFilterRequests: DaffFilterRequest[]): ShopifyProductFilter[] => {
  if (!daffFilterRequests) {
    return [];
  }
  const result: ShopifyProductFilter[] = [];
  for (const filter of daffFilterRequests) {
    if (filter.type === DaffFilterType.Equal) {
      // Each `jsonInputStr` is a JSON input string from Shopify's FilterValue.input
      // e.g., '{"tag":"summer"}' or '{"variantOption":{"name":"Color","value":"Red"}}'
      for (const jsonInputStr of filter.value) {
        result.push(JSON.parse(jsonInputStr));
      }
    } else if (filter.type === DaffFilterType.RangeNumeric) {
      // Hardcoded ProductFilter type to 'price' because PRICE_RANGE is currently the only
      // range filter type in Shopify's ProductFilter schema
      result.push({ price: { min: filter.value.min, max: filter.value.max }});
    }
  }
  return result;
};
