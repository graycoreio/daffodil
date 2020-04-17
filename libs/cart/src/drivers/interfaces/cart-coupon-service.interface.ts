import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffCartCoupon } from '../../models/cart-coupon';
import { DaffCart } from '../../models/cart';

/**
 * The interface responsible for apply a coupon to a cart.
 */
export interface DaffCartCouponServiceInterface<T extends DaffCart = DaffCart, V extends DaffCartCoupon = DaffCartCoupon> {
	/**
	 * Apply a coupon to the cart and return a partial of the cart.
	 */
  applyCoupon(cartId: T['id'], coupon: V): Observable<Partial<T>>;
}

export const DaffCartCouponDriver = new InjectionToken<DaffCartCouponServiceInterface>(
	'DaffCartCouponDriver',
);
