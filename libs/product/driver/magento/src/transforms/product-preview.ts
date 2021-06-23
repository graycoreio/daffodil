import {
  DaffProductTypeEnum,
  DaffProduct,
  DaffProductImage,
  DaffProductDiscount,
} from '@daffodil/product';

import {
  MagentoProduct,
  MagentoProductTypeEnum,
} from '../models/magento-product';
import { MagentoProductPreview } from '../models/product-preview.interface';

const productTypeMap = {
  [MagentoProductTypeEnum.BundledProduct]: DaffProductTypeEnum.Composite,
  [MagentoProductTypeEnum.ConfigurableProduct]: DaffProductTypeEnum.Configurable,
  [MagentoProductTypeEnum.SimpleProduct]: DaffProductTypeEnum.Simple,
};

export function transformMagentoProductPreview(product: MagentoProductPreview, mediaUrl: string): DaffProduct {
  return {
    type: productTypeMap[product.__typename],
    id: product.sku,
    url: `/${product.url_key}${product.url_suffix}`,
    name: product.name,
    thumbnail: transformImage(product.thumbnail, mediaUrl),
    price: getPrice(product),
    discount: getDiscount(product),
    images: transformMediaGalleryEntries(product, mediaUrl),
  };
}

function transformImage(image: MagentoProduct['thumbnail'], mediaUrl: string): DaffProductImage {
  return {
    url: `${mediaUrl}catalog/product${image.url}`,
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
