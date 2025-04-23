
import { faker } from '@faker-js/faker/locale/en_US';

import {
  shopifyIdTransformer,
  ShopifyImageNode,
} from '../public_api';

/**
 * Transforms an abstract {@link ShopifyImageNode} into a concrete type (e.g. ShopifyProductImageNode) by modifying the Shopify id
 *
 * See {@link ShopifyObjectTypes} for more information on the requirements for the type argument.
 *
 * @param node - default ShopifyImageNode created by factory (id initially left empty)
 * @param type - name of Shopify image object (e.g. CollectionImage, ProductImage)
 */
export const shopifyImageTransformer = (node: ShopifyImageNode, type: string): ShopifyImageNode => ({
  id: shopifyIdTransformer(`${faker.number.int({ min: 10000000000 })}`, type),
  altText: node.altText,
  url: node.url,
});
