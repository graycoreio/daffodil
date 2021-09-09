import {
  DaffProductTypeEnum,
  DaffProduct,
  DaffProductImage,
  DaffProductDiscount,
} from '@daffodil/product';

import { MagentoBundledProduct } from '../models/bundled-product';
import {
  MagentoProduct,
  MagentoProductTypeEnum,
} from '../models/magento-product';
import {
  MagentoProductPreview,
  MagentoProductStockStatusEnum,
} from '../models/product-preview.interface';
import { transformMagentoBundledProduct } from './bundled-product-transformers';

/**
 * Transforms a Magento product into a product preview.
 * Handles all product types.
 */
export function transformMagentoProductPreview(product: MagentoProduct, mediaUrl: string): DaffProduct {
  switch(product.__typename) {
    case MagentoProductTypeEnum.BundledProduct:
      return transformMagentoBundledProduct(transformMagentoSimpleProductPreview(product, mediaUrl), <MagentoBundledProduct>product);
    case MagentoProductTypeEnum.SimpleProduct:
    default:
      return transformMagentoSimpleProductPreview(product, mediaUrl);
  }
}

/**
 * Transforms a Magento simple product into a product preview.
 */
export function transformMagentoSimpleProductPreview(product: MagentoProductPreview, mediaUrl: string): DaffProduct {
  return {
    type: DaffProductTypeEnum.Simple,
    id: product.sku,
    url: `/${product.url_key}${product.url_suffix}`,
    name: product.name,
    thumbnail: transformThumbnail(product.thumbnail),
    price: getPrice(product),
    discount: getDiscount(product),
    images: transformMediaGalleryEntries(product, mediaUrl),
    in_stock: product.stock_status === MagentoProductStockStatusEnum.InStock,
  };
}

function transformThumbnail(image: MagentoProduct['thumbnail']): DaffProductImage {
  return {
    url: image.url,
    label: image.label,
    id: null,
  };
}

/**
 * A function for null checking an object.
 */
function getPrice(product: {price_range: MagentoProduct['price_range']}): number {
  return product.price_range?.maximum_price?.regular_price?.value;
}

function getDiscount(product: {price_range: MagentoProduct['price_range']}): DaffProductDiscount {
  return product.price_range?.maximum_price?.discount
    ? {
      amount: product.price_range.maximum_price.discount.amount_off,
      percent: product.price_range.maximum_price.discount.percent_off,
    } : { amount: null, percent: null };
}

function transformMediaGalleryEntries(product: MagentoProduct, mediaUrl: string): DaffProductImage[] {
  return product.media_gallery_entries?.map(image => ({
    url: mediaUrl + 'catalog/product' + image.file,
    label: image.label,
    id: image.uid.toString(),
  })) || [];
}
