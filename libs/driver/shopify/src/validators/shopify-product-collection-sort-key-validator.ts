import { ShopifyProductCollectionSortKeys } from '../codegen/generated-shopify-types';

/**
 * Validator to check if a string is a valid  {@link ShopifyProductCollectionSortKeys} object
 *
 * @param sortkey - string
 * @returns ShopifyProductCollectionSortKeys
 */
export const shopifyProductCollectionSortKeyValidator = (sortkey: string): ShopifyProductCollectionSortKeys => {
  const values = Object.values(ShopifyProductCollectionSortKeys);
  return values.includes(<ShopifyProductCollectionSortKeys>sortkey) ? (<ShopifyProductCollectionSortKeys>sortkey) : ShopifyProductCollectionSortKeys.CollectionDefault;
};
