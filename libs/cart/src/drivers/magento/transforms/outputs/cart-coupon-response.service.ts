import { Injectable } from '@angular/core';

import { MagentoCart } from '../../models/outputs/cart';
import { DaffCart } from '../../../../models/cart';
import { daffMagentoCouponTransform } from './cart-coupon';
import { transformMagentoCartItem } from './cart-item/cart-item-transformer';
import { transformCartTotals } from './cart-totals-transformer';

/**
 * Transforms magento carts into an object usable by daffodil.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffMagentoCartCouponResponseTransformer {

  private transformCartItems(cart: Partial<MagentoCart>): {items: DaffCart['items']} {
    return {
      items: cart.items.map(transformMagentoCartItem),
    }
  }

  private transformTotals(cart: Partial<MagentoCart>): {
    grand_total: DaffCart['grand_total'],
    subtotal: DaffCart['subtotal'],
  } {
    return {
      grand_total: cart.prices.grand_total.value,
      subtotal: cart.prices.subtotal_excluding_tax.value,
    }
  }

  private transformCoupons(cart: Partial<MagentoCart>): {coupons: DaffCart['coupons']} {
    return {
      coupons: cart.applied_coupons
        ? cart.applied_coupons.map(daffMagentoCouponTransform)
        : []
    }
  }

  /**
   * Transforms the MagentoCart from the cart coupon operations into a DaffCart partial.
   * @param cart the cart from a magento cart query.
   */
  transform(cart: Partial<MagentoCart>): Partial<DaffCart> {
    return cart ? {
      ...this.transformCartItems(cart),
      ...this.transformCoupons(cart),
      ...this.transformTotals(cart),
      ...transformCartTotals(cart),

      id: cart.id
    } : null
  }
}
