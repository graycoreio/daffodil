import { Injectable } from '@angular/core';

import { DaffCartItem } from '../../../models/cart-item';
import { DaffCartItemTransformerInterface } from '../../interfaces/cart-item-transformer.interface';
import { CartItem as MagentoCartItem } from '../models/cart-item';

/**
 * Transforms magento carts into an object usable by daffodil.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffMagentoCartItemTransformerService implements DaffCartItemTransformerInterface<DaffCartItem> {

  /**
   * Transforms the magento CartItem from the magento cart query into a DaffCartItem.
   * @param response the response from a magento cart query.
   */
  transform(response: MagentoCartItem): DaffCartItem {
    const cartItem: MagentoCartItem = response;
    return {
      // base
      item_id: cartItem.item_id,
      quote_id: Number(cartItem.quote_id),
      sku: cartItem.sku,
      name: cartItem.name,
      qty: cartItem.qty,
      price: cartItem.price,

      // totals
      discount_percent: cartItem.discount_percent,
      discount_amount: cartItem.discount_amount,
      tax_percent: cartItem.tax_percent,
      tax_amount: cartItem.tax_amount,
      row_total: cartItem.row_total,
      row_total_with_discount: cartItem.row_total_with_discount,
      tax_before_discount: cartItem.base_tax_amount,

      // TODO: implement
      image: null,
      created_at: new Date(),
      updated_at: new Date(),
      product_id: 0,
      parent_item_id: 0,
      description: '',
      weight: 0,
      row_weight: 0,
    }
  }
}
