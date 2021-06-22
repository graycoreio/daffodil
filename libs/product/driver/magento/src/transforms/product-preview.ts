import {
  DaffProductTypeEnum,
  DaffProduct,
  DaffProductImage,
  DaffProductDiscount,
} from '@daffodil/product';

import { MagentoBundledProduct } from '../models/bundled-product';
import { MagentoConfigurableProduct } from '../models/configurable-product';
import {
  MagentoProduct,
  MagentoProductTypeEnum,
} from '../models/magento-product';
import { MagentoProductPreview } from '../models/product-preview.interface';
import { transformMagentoBundledProductFragment } from './bundled-product-transformers';
import { transformMagentoConfigurableProductFragment } from './configurable-product-transformers';

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

export function transformFullProductPreview(product: MagentoProductPreview, mediaUrl: string): DaffProduct {
  const preview = transformMagentoProductPreview(product, mediaUrl);
  switch(product.__typename) {
    case MagentoProductTypeEnum.BundledProduct:
      return {
        ...preview,
        ...transformMagentoBundledProductFragment(<MagentoBundledProduct>product),
      };
    case MagentoProductTypeEnum.ConfigurableProduct:
      return {
        ...preview,
        ...transformMagentoConfigurableProductFragment(<MagentoConfigurableProduct>product),
      };
    default:
      return preview;
  }
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
