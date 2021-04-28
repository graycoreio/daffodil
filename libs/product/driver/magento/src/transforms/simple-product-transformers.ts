import {
  DaffProduct,
  DaffProductTypeEnum,
  DaffProductDiscount,
} from '@daffodil/product';

import {
  MagentoProduct,
  MagentoProductStockStatusEnum,
} from '../models/magento-product';

/**
 * Transforms the magento MagentoProduct from the magento product query into a DaffProduct.
 *
 * @param product a magento product
 */
export function transformMagentoSimpleProduct(product: MagentoProduct, mediaUrl: string): DaffProduct {
  return {
    type: DaffProductTypeEnum.Simple,
    id: product.sku,
    url: `${product.url_key}${product.url_suffix}`,
    name: product.name,
    price: getPrice(product),
    discount: getDiscount(product),
    in_stock: product.stock_status === MagentoProductStockStatusEnum.InStock,
    images: [
      { url: product.image.url, id: '0', label: product.image.label },
      ...transformMediaGalleryEntries(product, mediaUrl),
    ],
    description: product.description.html,
  };
}

/**
 * A function for null checking an object.
 */
function getPrice(product: MagentoProduct): number {
  return product.price_range &&
		product.price_range.maximum_price &&
		product.price_range.maximum_price.regular_price &&
		product.price_range.maximum_price.regular_price.value !== null
    ? product.price_range.maximum_price.regular_price.value : null;
}

function getDiscount(product: MagentoProduct): DaffProductDiscount {
  return product.price_range &&
		product.price_range.maximum_price &&
		product.price_range.maximum_price.discount
    ? {
      amount: product.price_range.maximum_price.discount.amount_off,
      percent: product.price_range.maximum_price.discount.percent_off,
    } : { amount: null, percent: null };
}

function transformMediaGalleryEntries(product: MagentoProduct, mediaUrl: string) {
  return product.media_gallery_entries ? product.media_gallery_entries.map(image => ({
    url: mediaUrl + 'catalog/product' + image.file,
    label: image.label,
    id: image.uid.toString(),
  })) : [];
}
