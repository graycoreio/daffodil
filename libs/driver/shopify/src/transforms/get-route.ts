/**
 * Generates a route path based on the Shopify resource type and handle.
 *
 * @param type The Shopify resource type (COLLECTION, PRODUCT, PAGE, etc.)
 * @param handle The resource handle/slug
 * @returns The formatted route path
 * @throws Error if type is empty
 */
export const getShopifyRoutePath = (type: string, handle: string) => {
  if (!type) {
    throw new Error('Type cannot be empty');
  }

  switch(type){
    case 'COLLECTION':
      return `/collections/${handle}`;
    case 'PRODUCT':
      return `/products/${handle}`;
    case 'PAGE':
      return `/pages/${handle}`;
    default:
      return `/${type.toLowerCase()}s/${handle}`;
  }
};
