import {
  Inject,
  Injectable,
} from '@angular/core';

import { DaffCart } from '@daffodil/cart';

import { daffMagentoCouponTransform } from './cart-coupon';
import {
  daffTransformMagentoCartItem,
  transformMagentoCartItem,
} from './cart-item/cart-item-transformer';
import { transformCartTotals } from './cart-totals-transformer';
import { DAFF_CART_MAGENTO_CART_ITEM_TRANSFORMS } from '../../injection-tokens/public_api';
import { DaffCartMagentoCartItemTransform } from '../../interfaces/public_api';
import { MagentoCart } from '../../models/responses/cart';

/**
 * Transforms magento carts into an object usable by daffodil.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffMagentoCartCouponResponseTransformer {
  constructor(
    @Inject(DAFF_CART_MAGENTO_CART_ITEM_TRANSFORMS) private cartItemTransforms: DaffCartMagentoCartItemTransform[],
  ) {}

  private transformCartItems(cart: Partial<MagentoCart>): {items: DaffCart['items']} {
    return {
      // TODO: extract into own transforms
      items: cart.items.filter(item => !!item).map(item => transformMagentoCartItem(daffTransformMagentoCartItem(item), item, this.cartItemTransforms)),
    };
  }

  private transformCoupons(cart: Partial<MagentoCart>): {coupons: DaffCart['coupons']} {
    return {
      coupons: cart.applied_coupons
        ? cart.applied_coupons.map(daffMagentoCouponTransform)
        : [],
    };
  }

  /**
   * Transforms the MagentoCart from the cart coupon operations into a DaffCart partial.
   *
   * @param cart the cart from a magento cart query.
   */
  transform(cart: Partial<MagentoCart>): Partial<DaffCart> {
    return cart ? {
      ...this.transformCartItems(cart),
      ...this.transformCoupons(cart),
      ...transformCartTotals(cart),

      id: cart.id,
    } : null;
  }
}
