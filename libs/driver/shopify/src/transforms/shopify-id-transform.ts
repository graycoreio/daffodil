/**
 * Transforms a DaffIdentifiable id and object type into a Shopify object id
 *
 * @param id - string
 * @param type - string
 * @returns string
 */
export const shopifyIdTransformer = (id: string, type: string): string => {
  const shopifyProductId = `gid://shopify/${type}/${id}`;
  return shopifyProductId;
};
