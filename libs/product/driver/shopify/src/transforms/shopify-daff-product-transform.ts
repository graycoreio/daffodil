import {
  SHOPIFY_ROUTE_PREFIXES,
  ShopifyProductNode,
} from '@daffodil/driver/shopify';
import {
  DaffProduct,
  DaffProductTypeEnum,
} from '@daffodil/product';


/**
 * Transforms a ProductNode into a DaffProduct
 *
 * @param node
 */
export const daffShopifyProductTransformer = (node: ShopifyProductNode): DaffProduct => ({
  name: node.title,
  images: node.images.nodes.map(imageNode => ({
    id: imageNode.id,
    url: imageNode.url,
    label: imageNode.altText ?? '',
  })),
  thumbnail: {
    url: node.images.nodes[0]?.url,
    label: node.images.nodes[0]?.altText ?? '',
    id: node.images.nodes[0]?.id,
  },
  id: node.id,
  url: `/${SHOPIFY_ROUTE_PREFIXES.PRODUCTS}/${node.handle}`,
  type: DaffProductTypeEnum.Simple,
  price: node.priceRange.maxVariantPrice.amount,
  in_stock: node.availableForSale,
  description: node.description,
  customAttributes: [],
});
