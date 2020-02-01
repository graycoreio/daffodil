import { Injectable } from '@angular/core';

import { DaffCartItem } from '../../../models/cart-item';
import { DaffCartItemTransformerInterface } from '../../interfaces/cart-item-transformer.interface';
import { CartItem as ShopifyCartItem } from '../models/cart-item';
import { ImageNode } from '../models/image-node';

const imageTransformer = (image: ImageNode) => ({
  id: image.id,
  url: image.originalSrc,
  label: image.altText
})

/**
 * Transforms shopify carts into an object usable by daffodil.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffShopifyCartItemTransformerService implements DaffCartItemTransformerInterface<DaffCartItem> {
  /**
   * Transforms the shopify CartItem from the shopify cart query into a DaffCartItem.
   * @param response the response from a shopify cart query.
   */
  transform(response: ShopifyCartItem): DaffCartItem {
    const cartItem: ShopifyCartItem = response;
    return {
      // base
      item_id: Number(cartItem.id),
      sku: cartItem.variant.sku,
      name: cartItem.title,
      qty: cartItem.quantity,
      price: cartItem.variant.priceV2.amount,
      image: imageTransformer(cartItem.variant.image),
      product_id: Number(cartItem.variant.id),
      description: cartItem.variant.product.description,
      weight: cartItem.variant.weight,

      // TODO: implement
      discount_percent: 0,
      discount_amount: 0,
      tax_percent: 0,
      tax_amount: 0,
      row_total: 0,
      row_total_with_discount: 0,
      tax_before_discount: 0,
      quote_id: 0,
      created_at: new Date(),
      updated_at: new Date(),
      parent_item_id: 0,
      row_weight: 0,
    }
  }
}
