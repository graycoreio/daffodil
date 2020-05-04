import { Injectable } from '@angular/core';

import { DaffMagentoCartItemTransformer } from './cart-item.service';
import { MagentoCart } from '../../models/outputs/cart';
import { DaffCart } from '../../../../models/cart';
import { daffMagentoCouponTransform } from './cart-coupon';

/**
 * Transforms magento carts into an object usable by daffodil.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffMagentoCartCouponResponseTransformer {
  constructor(
    public itemTransformer: DaffMagentoCartItemTransformer,
  ) {}

  private transformCartItems(cart: Partial<MagentoCart>): {items: DaffCart['items']} {
    return {
      items: cart.items.map(item => this.itemTransformer.transform(item)),
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

  private transformTotalsList(cart: Partial<MagentoCart>): {totals: DaffCart['totals']} {
    return {
      totals: [
        {
          name: 'grand_total',
          label: 'Grand Total',
          value: cart.prices.grand_total.value
        },
        {
          name: 'subtotal_excluding_tax',
          label: 'Subtotal Excluding Tax',
          value: cart.prices.subtotal_excluding_tax.value
        },
        {
          name: 'subtotal_including_tax',
          label: 'Subtotal Including Tax',
          value: cart.prices.subtotal_including_tax.value
        },
        {
          name: 'subtotal_with_discount_excluding_tax',
          label: 'Subtotal with Discount Excluding Tax',
          value: cart.prices.subtotal_with_discount_excluding_tax.value
        },
      ],
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
      ...this.transformTotalsList(cart),

      id: cart.id
    } : null
  }
}
