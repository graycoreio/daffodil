import { DaffProductDiscount } from '@daffodil/product';
import {
  MagentoProductStockStatusEnum,
  MagentoProduct,
} from '@daffodil/product/driver/magento';
import {
  DaffConfigurableProductVariant,
  DaffProductVariantAttributesDictionary,
} from '@daffodil/product-configurable';

import {
  MagentoConfigurableProductVariant,
  MagentoConfigurableAttributeOption,
} from '../models/public_api';

export function transformVariant(variant: MagentoConfigurableProductVariant): DaffConfigurableProductVariant {
  return {
    id: variant.product.sku,
    appliedAttributes: transformVariantAttributes(variant.attributes),
    price: getPrice(variant.product),
    discount: getDiscount(variant.product),
    image: {
      id: '0',
      url: variant.product.image.url,
      label: variant.product.image.label,
    },
    in_stock: variant.product.stock_status === MagentoProductStockStatusEnum.InStock,
  };
}

export function transformVariantAttributes(attributes: MagentoConfigurableAttributeOption[]): DaffProductVariantAttributesDictionary {
  let appliedAttributes: DaffProductVariantAttributesDictionary = {};
  attributes.forEach(attribute => {
    appliedAttributes = {
      ...appliedAttributes,
      [attribute.code]: attribute.value_index.toString(),
    };
  });

  return appliedAttributes;
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
