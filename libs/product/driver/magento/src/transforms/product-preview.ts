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
import {
  MagentoProductPreview,
  MagentoProductStockStatusEnum,
} from '../models/product-preview.interface';

/**
 * Transforms a Magento product into a product preview.
 * Handles all product types.
 */
export function transformMagentoProductPreview(product: MagentoProduct): DaffProduct {
  return transformMagentoSimpleProductPreview(product);
}

const getType = (product: MagentoProductPreview): DaffProductTypeEnum => {
  switch (product.__typename) {
    case MagentoProductTypeEnum.BundledProduct:
      return DaffProductTypeEnum.Composite;

    case MagentoProductTypeEnum.ConfigurableProduct:
      return DaffProductTypeEnum.Configurable;
    default:
      return DaffProductTypeEnum.Simple;
  }
};

/**
 * Transforms a Magento simple product into a product preview.
 */
export function transformMagentoSimpleProductPreview(product: MagentoProductPreview): DaffProduct {
  return {
    type: getType(product),
    id: product.sku,
    url: `/${product.url_key}${product.url_suffix}`,
    name: product.name,
    thumbnail: transformThumbnail(product.image),
    price: getPrice(product),
    discount: getDiscount(product),
    in_stock: product.stock_status === MagentoProductStockStatusEnum.InStock,
  };
}

function transformThumbnail(image: MagentoProduct['image']): DaffProductImage {
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
