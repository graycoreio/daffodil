import { Observable } from 'rxjs';

import {
  DaffCart,
  DaffCartCoupon,
} from '@daffodil/cart';
import { createSingletonInjectionToken } from '@daffodil/core';

/**
 * The interface responsible for applying a coupon to a cart.
 */
export interface DaffCartCouponServiceInterface<T extends DaffCart = DaffCart> {
  /**
   * Apply a coupon to the cart and return a partial of the cart.
   */
  apply(cartId: T['id'], coupon: T['coupons'][number]): Observable<Partial<T>>;

  /**
   * List coupon codes applied to a cart.
   */
  list(cartId: T['id']): Observable<T['coupons']>;

  /**
   * Remove a coupon from the cart and return a partial of the cart.
   */
  remove(cartId: T['id'], coupon: T['coupons'][number]): Observable<Partial<T>>;

  /**
   * Remove all coupons from the cart and return a partial of the cart.
   */
  removeAll(cartId: T['id']): Observable<Partial<T>>;
}

export const {
  token: DaffCartCouponDriver,
  provider: daffProvideCartCouponDriver,
} = createSingletonInjectionToken<DaffCartCouponServiceInterface>('DaffCartCouponDriver');
