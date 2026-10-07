
import {
  DaffProductDiscount,
  DaffProductTypeEnum,
} from '@daffodil/product';
import { MagentoProductStockStatusEnum } from '@daffodil/product/driver/magento';
import { DaffCompositeProductItemOption } from '@daffodil/product-composite';

import {
  MagentoBundledProductItemOption,
  MagentoBundledProductItemOptionProduct,
} from '../models/bundled-product';

export function transformMagentoBundledProductItemOption(option: MagentoBundledProductItemOption): DaffCompositeProductItemOption {
  return {
    id: option.uid.toString(),
    type: DaffProductTypeEnum.Simple,
    url: null,
    name: option.label,
    price: getPrice(option.product),
    images: [],
    thumbnail: null,
    discount: getDiscount(option.product),
    quantity: option.quantity,
    is_default: option.is_default,
    in_stock: option.product.stock_status === MagentoProductStockStatusEnum.InStock,
  };
}

/**
 * A function for null checking an object.
 */
function getPrice(product: MagentoBundledProductItemOptionProduct): number {
  return product.price_range?.maximum_price?.regular_price?.value || null;
}

function getDiscount(product: MagentoBundledProductItemOptionProduct): DaffProductDiscount {
  return product.price_range?.maximum_price?.discount
    ? {
      amount: product.price_range.maximum_price.discount.amount_off,
      percent: product.price_range.maximum_price.discount.percent_off,
    } : { amount: null, percent: null };
}
