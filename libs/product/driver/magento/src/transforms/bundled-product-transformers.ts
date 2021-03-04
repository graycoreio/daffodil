import {
  DaffProductDiscount,
  DaffProductTypeEnum,
  DaffCompositeProduct,
  DaffCompositeProductItemOption,
  DaffCompositeProductItem,
  DaffCompositeProductItemInputEnum,
} from '@daffodil/product';

import {
  MagentoBundledProduct,
  MagentoBundledProductItem,
  MagentoBundledProductItemOption,
} from '../models/bundled-product';
import {
  MagentoProduct,
  MagentoProductStockStatusEnum,
} from '../models/magento-product';
import { transformMagentoSimpleProduct } from './simple-product-transformers';

/**
 * Transforms the magento MagentoProduct from the magento product query into a DaffProduct.
 *
 * @param response the response from a magento product query.
 */
export function transformMagentoBundledProduct(product: MagentoBundledProduct, mediaUrl: string): DaffCompositeProduct {
  return {
    ...transformMagentoSimpleProduct(product, mediaUrl),
    price: 0,
    discount: {
      amount: 0,
      percent: 0,
    },
    type: DaffProductTypeEnum.Composite,
    items: product.items.map(transformMagentoBundledProductItem),
  };
}

function transformMagentoBundledProductItem(item: MagentoBundledProductItem): DaffCompositeProductItem {
  return {
    id: item.option_id.toString(),
    required: item.required,
    title: item.title,
    input_type: <DaffCompositeProductItemInputEnum>item.type,
    options: item.options.map(transformMagentoBundledProductItemOption),
  };
}

function transformMagentoBundledProductItemOption(option: MagentoBundledProductItemOption): DaffCompositeProductItemOption {
  return {
    id: option.id.toString(),
    name: option.label,
    price: getPrice(option.product),
    images: [],
    discount: getDiscount(option.product),
    quantity: option.quantity,
    is_default: option.is_default,
    in_stock: option.product.stock_status === MagentoProductStockStatusEnum.InStock,
  };
}

/**
 * A function for null checking an object.
 */
function getPrice(product: MagentoProduct): number {
  return product.price_range?.maximum_price?.regular_price?.value || null;
}

function getDiscount(product: MagentoProduct): DaffProductDiscount {
  return product.price_range?.maximum_price?.discount
    ? {
      amount: product.price_range.maximum_price.discount.amount_off,
      percent: product.price_range.maximum_price.discount.percent_off,
    } : { amount: null, percent: null };
}
