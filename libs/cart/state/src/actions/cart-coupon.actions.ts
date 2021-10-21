import { Action } from '@ngrx/store';

import {
  DaffCartCoupon,
  DaffCart,
} from '@daffodil/cart';
import { DaffStateError } from '@daffodil/core/state';

/**
 * An enum for the cart coupon action types.
 */
export enum DaffCartCouponActionTypes {
  CartCouponApplyAction = '[DaffCart] Cart Coupon Apply Action',
  CartCouponApplySuccessAction = '[DaffCart] Cart Coupon Apply Success Action',
  CartCouponApplyFailureAction = '[DaffCart] Cart Coupon Apply Failure Action',
  CartCouponListAction = '[DaffCart] Cart Coupon List Action',
  CartCouponListSuccessAction = '[DaffCart] Cart Coupon List Success Action',
  CartCouponListFailureAction = '[DaffCart] Cart Coupon List Failure Action',
  CartCouponRemoveAction = '[DaffCart] Cart Coupon Remove Action',
  CartCouponRemoveSuccessAction = '[DaffCart] Cart Coupon Remove Success Action',
  CartCouponRemoveFailureAction = '[DaffCart] Cart Coupon Remove Failure Action',
  CartCouponRemoveAllAction = '[DaffCart] Cart Coupon Remove All Action',
  CartCouponRemoveAllSuccessAction = '[DaffCart] Cart Coupon Remove All Success Action',
  CartCouponRemoveAllFailureAction = '[DaffCart] Cart Coupon Remove All Failure Action',
  CartCouponClearErrorsAction = '[DaffCart] Cart Coupon Clear Errors Action'
}

/**
 * Triggers the application of a cart coupon.
 */
export class DaffCartCouponApply<T extends DaffCartCoupon = DaffCartCoupon> implements Action {
  readonly type = DaffCartCouponActionTypes.CartCouponApplyAction;

  constructor(public payload: T) {}
}

/**
 * Indicates the successful application of a cart coupon.
 */
export class DaffCartCouponApplySuccess<T extends DaffCart = DaffCart> implements Action {
  readonly type = DaffCartCouponActionTypes.CartCouponApplySuccessAction;

  constructor(public payload: Partial<T>) {}
}

/**
 * Indicates the failed application of a cart coupon.
 */
export class DaffCartCouponApplyFailure implements Action {
  readonly type = DaffCartCouponActionTypes.CartCouponApplyFailureAction;

  constructor(public payload: DaffStateError) {}
}

/**
 * Triggers the load of the cart's coupons.
 */
export class DaffCartCouponList implements Action {
  readonly type = DaffCartCouponActionTypes.CartCouponListAction;
}

/**
 * Indicates the successful load of the cart's coupons.
 */
export class DaffCartCouponListSuccess<T extends DaffCartCoupon = DaffCartCoupon> implements Action {
  readonly type = DaffCartCouponActionTypes.CartCouponListSuccessAction;

  constructor(public payload: T[]) {}
}

/**
 * Indicates the failed load of the cart's coupons.
 */
export class DaffCartCouponListFailure implements Action {
  readonly type = DaffCartCouponActionTypes.CartCouponListFailureAction;

  constructor(public payload: DaffStateError) {}
}

/**
 * Triggers the removal of a cart coupon.
 */
export class DaffCartCouponRemove<T extends DaffCartCoupon = DaffCartCoupon> implements Action {
  readonly type = DaffCartCouponActionTypes.CartCouponRemoveAction;

  constructor(public payload: T) {}
}

/**
 * Indicates the successful removal of a cart coupon.
 */
export class DaffCartCouponRemoveSuccess<T extends DaffCart = DaffCart> implements Action {
  readonly type = DaffCartCouponActionTypes.CartCouponRemoveSuccessAction;

  constructor(public payload: Partial<T>) {}
}

/**
 * Indicates the failed removal of a cart coupon.
 */
export class DaffCartCouponRemoveFailure implements Action {
  readonly type = DaffCartCouponActionTypes.CartCouponRemoveFailureAction;

  constructor(public payload: DaffStateError) {}
}

/**
 * Triggers the removal of all of the cart's coupons.
 */
export class DaffCartCouponRemoveAll implements Action {
  readonly type = DaffCartCouponActionTypes.CartCouponRemoveAllAction;
}

/**
 * Indicates the successful removal of all of the cart's coupons.
 */
export class DaffCartCouponRemoveAllSuccess<T extends DaffCart = DaffCart> implements Action {
  readonly type = DaffCartCouponActionTypes.CartCouponRemoveAllSuccessAction;

  constructor(public payload: Partial<T>) {}
}

/**
 * Indicates the failed removal of all of the cart's coupons.
 */
export class DaffCartCouponRemoveAllFailure implements Action {
  readonly type = DaffCartCouponActionTypes.CartCouponRemoveAllFailureAction;

  constructor(public payload: DaffStateError) {}
}

/**
 * Removes the errors in cart coupon state.
 */
export class DaffCartCouponClearErrors implements Action {
  readonly type = DaffCartCouponActionTypes.CartCouponClearErrorsAction;
}

/**
 * A union of all the cart coupon action classes.
 */
export type DaffCartCouponActions<
  T extends DaffCart = DaffCart,
  V extends DaffCartCoupon = DaffCartCoupon
> =
  | DaffCartCouponApply<V>
  | DaffCartCouponApplySuccess<T>
  | DaffCartCouponApplyFailure
  | DaffCartCouponList
  | DaffCartCouponListSuccess<V>
  | DaffCartCouponListFailure
  | DaffCartCouponRemove<V>
  | DaffCartCouponRemoveSuccess<T>
  | DaffCartCouponRemoveFailure
  | DaffCartCouponRemoveAll
  | DaffCartCouponRemoveAllSuccess<T>
  | DaffCartCouponRemoveAllFailure
  | DaffCartCouponClearErrors;
