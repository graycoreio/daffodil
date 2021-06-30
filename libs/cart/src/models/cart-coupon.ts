import { ID } from '@daffodil/core';

/**
 * A coupon applied to the cart.
 * Also known as a promo code.
 */
export interface DaffCartCoupon {
  /**
   * The coupon ID.
   */
  // TODO: change to id
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
