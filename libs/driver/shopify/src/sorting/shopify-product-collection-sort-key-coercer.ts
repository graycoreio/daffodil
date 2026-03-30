import { ShopifyProductCollectionSortKeys } from '../codegen/generated-shopify-types';

/**
 * Checks if a string is a valid, and coerces it into a {@link ShopifyProductCollectionSortKeys} object, or returns the CollectionDefault sortkey
 */
export const shopifyProductCollectionSortKeyCoercer = (sortkey: string): ShopifyProductCollectionSortKeys => {
  const validSortKeys = Object.fromEntries(Object.values(ShopifyProductCollectionSortKeys).map(key => [key, true]));
  return validSortKeys[sortkey] ? (<ShopifyProductCollectionSortKeys>sortkey) : ShopifyProductCollectionSortKeys.CollectionDefault;
};
