import { ShopifyFilter } from '../codegen/generated-shopify-types';

/**
 * Transforms a shopifyFilterJSONInput string {@link ShopifyFilter} into a JSON object that can later be parsed for useful filtering information.
 */
export const daffShopifyFilterJSONInputResultTransformer = (shopifyFilterJSONInput: ShopifyFilter['values'][number]['input']): any => {
  const parsedData = JSON.parse(shopifyFilterJSONInput);
  return parsedData;
};
