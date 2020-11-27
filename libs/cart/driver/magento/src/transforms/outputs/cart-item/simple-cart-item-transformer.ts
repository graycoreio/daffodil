import { DaffCartItem, DaffCartItemInputType } from '@daffodil/cart';
import { daffMultiply, daffSubtract } from '@daffodil/core';
import { MagentoProductStockStatusEnum } from '@daffodil/product';

import { MagentoCartItem } from '../../../models/public_api';

/**
 * Transforms the magento MagentoCartItem from the magento cart query into a DaffCartItem.
 * @param response the response from a magento cart query.
 */
export function transformMagentoSimpleCartItem(cartItem: MagentoCartItem): DaffCartItem {
  if (!cartItem) return null

  const price = cartItem.product.price_range.maximum_price.regular_price.value;
  const discount = cartItem.product.price_range.maximum_price.discount.amount_off;

	return {
		...{magento_cart_item: cartItem},

		// base
		type: DaffCartItemInputType.Simple,
		item_id: cartItem.id,
		sku: cartItem.product.sku,
		name: cartItem.product.name,
		qty: cartItem.quantity,
		price,
		row_total: daffMultiply(daffSubtract(price, discount), cartItem.quantity),
		product_id: String(cartItem.product.id),
		image: {
			id: cartItem.product.thumbnail.label,
			url: cartItem.product.thumbnail.url,
			label: cartItem.product.thumbnail.label
		},
		total_discount: discount,
		in_stock: cartItem.product.stock_status === MagentoProductStockStatusEnum.InStock,

		// TODO: implement
		parent_item_id: 0
	}
}
