import {
  DaffIdentifiable,
  ID,
} from '@daffodil/core';

/**
 * A coupon applied to the cart.
 * Also known as a promo code.
 */
export interface DaffCartCoupon extends DaffIdentifiable {
  /**
   * The coupon ID.
   *
   * @deprecated use id instead. Deprecated in version 0.78.0. Will be removed in version 0.81.0.
   */
  coupon_id?: ID;
  /**
   * The coupon code.
   */
  code: string;
  /**
   * An optional coupon description.
   */
  description?: string;
}
