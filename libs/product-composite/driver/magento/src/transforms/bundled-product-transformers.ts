import {
  DaffProductDiscount,
  DaffProductTypeEnum,
  DaffProduct,
} from '@daffodil/product';
import { MagentoProductStockStatusEnum } from '@daffodil/product/driver/magento';
import {
  DaffCompositeProduct,
  DaffCompositeProductItemOption,
  DaffCompositeProductItem,
  DaffCompositeProductItemInputEnum,
} from '@daffodil/product-composite';

import {
  MagentoBundledProduct,
  MagentoBundledProductItem,
  MagentoBundledProductItemOption,
  MagentoBundledProductItemOptionProduct,
} from '../models/bundled-product';

/**
 * Transforms the magento MagentoProduct from the magento product query into a DaffProduct.
 *
 * @param response the response from a magento product query.
 */
export function transformMagentoBundledProduct(
  daffProduct: DaffProduct,
  { items }: MagentoBundledProduct,
): DaffCompositeProduct {
  return {
    ...daffProduct,
    ...items.length > 0 ? {
      price: 0,
      discount: {
        amount: 0,
        percent: 0,
      },
    } : {},
    type: DaffProductTypeEnum.Composite,
    items: items.map(transformMagentoBundledProductItem),
  };
}

function transformMagentoBundledProductItem(item: MagentoBundledProductItem): DaffCompositeProductItem {
  return {
    id: item.option_id.toString(),
    required: item.required,
    title: item.title,
    input_type: <DaffCompositeProductItemInputEnum>item.type,
    options: Array.from(item.options).sort((a, b) => a.position - b.position).map(transformMagentoBundledProductItemOption),
  };
}

function transformMagentoBundledProductItemOption(option: MagentoBundledProductItemOption): DaffCompositeProductItemOption {
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
