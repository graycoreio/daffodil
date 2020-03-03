import { Injectable } from '@angular/core';

import { MagentoCartItem } from '../../models/outputs/cart-item';
import { DaffCartItem } from '../../../../models/cart-item';

/**
 * Transforms magento carts into an object usable by daffodil.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffMagentoCartItemTransformer {

  /**
   * Transforms the magento MagentoCartItem from the magento cart query into a DaffCartItem.
   * @param response the response from a magento cart query.
   */
  transform(cartItem: MagentoCartItem): DaffCartItem {
    return {
      ...cartItem,

      // base
      item_id: cartItem.id,
      sku: cartItem.product.sku,
      name: cartItem.product.name,
      qty: cartItem.quantity,
      price: cartItem.prices.price.value,
      row_total: cartItem.prices.row_total.value,
      product_id: String(cartItem.product.id),
      description: cartItem.product.description,

      // TODO: implement
      parent_item_id: 0
    }
  }
}
