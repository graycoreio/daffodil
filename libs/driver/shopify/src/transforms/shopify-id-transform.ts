/**
 * Transforms a DaffIdentifiable id and object type into a Shopify object id
 *
 * @param id - numerical code that represents a shopify object id
 * @param type - Shopify type (e.g. Product, Collection, CollectionImage, etc.)
 * @returns Shopify-readable url (e.g. gid://shopify/Product/777172771721)
 */
export const shopifyIdTransformer = (id: string, type: string): string => {
  const shopifyProductId = `gid://shopify/${type}/${id}`;
  return shopifyProductId;
};
