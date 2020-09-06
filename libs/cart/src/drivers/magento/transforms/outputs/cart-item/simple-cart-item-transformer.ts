import { MagentoProductStockStatusEnum } from '@daffodil/product';

import { MagentoCartItem } from '../../../models/outputs/cart-item';
import { DaffCartItem } from '../../../../../models/cart-item';
import { DaffCartItemInputType } from '../../../../../models/cart-item-input';

/**
 * Transforms the magento MagentoCartItem from the magento cart query into a DaffCartItem.
 * @param response the response from a magento cart query.
 */
export function transformMagentoSimpleCartItem(cartItem: MagentoCartItem): DaffCartItem {
	return cartItem ? {
		...{magento_cart_item: cartItem},

		// base
		type: DaffCartItemInputType.Simple,
		item_id: cartItem.id,
		sku: cartItem.product.sku,
		name: cartItem.product.name,
		qty: cartItem.quantity,
		price: cartItem.prices.price.value,
		row_total: cartItem.prices.row_total.value,
		product_id: String(cartItem.product.id),
		image: {
			id: cartItem.product.thumbnail.label,
			url: cartItem.product.thumbnail.url,
			label: cartItem.product.thumbnail.label
		},
		total_discount: cartItem.prices.total_item_discount.value,
		in_stock: cartItem.product.stock_status === MagentoProductStockStatusEnum.InStock,

		// TODO: implement
		parent_item_id: 0
	} : null
}
