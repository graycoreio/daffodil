import {
  DaffCartItem,
  DaffCartItemInputType,
} from '@daffodil/cart';
import { MagentoProductStockStatusEnum } from '@daffodil/product/driver/magento';

import { MagentoCartItem } from '../../../models/public_api';

/**
 * Transforms the magento MagentoCartItem from the magento cart query into a DaffCartItem.
 *
 * @param response the response from a magento cart query.
 */
export function transformMagentoSimpleCartItem(cartItem: MagentoCartItem): DaffCartItem {
  return {
    // base
    type: DaffCartItemInputType.Simple,
    id: cartItem.id,
    url: `/${cartItem.product.url_key}${cartItem.product.url_suffix}`,
    sku: cartItem.product.sku,
    name: cartItem.product.name,
    qty: cartItem.quantity,
    price: cartItem.prices.price.value,
    row_total: cartItem.prices.row_total.value,
    product_id: String(cartItem.product.id),
    image: {
      id: cartItem.product.thumbnail.label,
      url: cartItem.product.thumbnail.url,
      label: cartItem.product.thumbnail.label,
    },
    in_stock: cartItem.product.stock_status === MagentoProductStockStatusEnum.InStock,
    discounts: cartItem.prices.discounts?.map(discount => ({
      amount: discount.amount?.value,
      label: discount.label,
    })) || [],

    // TODO: implement
    parent_item_id: null,
  };
}
