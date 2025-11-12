import { ShopifyMenuItemType } from '../codegen/generated-shopify-types';

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
    case ShopifyMenuItemType.Collection:
      return `/collections/${handle}`;
    case ShopifyMenuItemType.Product:
      return `/products/${handle}`;
    case ShopifyMenuItemType.Page:
      return `/pages/${handle}`;
    default:
      return `/${type.toLowerCase()}s/${handle}`;
  }
};
