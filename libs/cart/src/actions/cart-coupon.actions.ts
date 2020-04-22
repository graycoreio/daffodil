import { Action } from '@ngrx/store';

import { DaffCart } from '../models/cart';
import { DaffCartCoupon } from '../models/cart-coupon';

export enum DaffCartCouponActionTypes {
  CartCouponApplyAction = '[DaffCart] Cart Coupon Apply Action',
  CartCouponApplySuccessAction = '[DaffCart] Cart Coupon Apply Success Action',
  CartCouponApplyFailureAction = '[DaffCart] Cart Coupon Apply Failure Action',
  CartCouponListAction = '[DaffCart] Cart Coupon Action',
  CartCouponListSuccessAction = '[DaffCart] Cart Coupon Success Action',
  CartCouponListFailureAction = '[DaffCart] Cart Coupon Failure Action',
  CartCouponRemoveAction = '[DaffCart] Cart Coupon Remove Action',
  CartCouponRemoveSuccessAction = '[DaffCart] Cart Coupon Remove Success Action',
  CartCouponRemoveFailureAction = '[DaffCart] Cart Coupon Remove Failure Action',
  CartCouponRemoveAllAction = '[DaffCart] Cart Coupon Remove All Action',
  CartCouponRemoveAllSuccessAction = '[DaffCart] Cart Coupon Remove All Success Action',
  CartCouponRemoveAllFailureAction = '[DaffCart] Cart Coupon Remove All Failure Action'
}

export class DaffCartCouponApply<T extends DaffCartCoupon = DaffCartCoupon> implements Action {
  readonly type = DaffCartCouponActionTypes.CartCouponApplyAction;

  constructor(public payload: T) {}
}

export class DaffCartCouponApplySuccess<T extends DaffCart = DaffCart> implements Action {
  readonly type = DaffCartCouponActionTypes.CartCouponApplySuccessAction;

  constructor(public payload: Partial<T>) {}
}

export class DaffCartCouponApplyFailure implements Action {
  readonly type = DaffCartCouponActionTypes.CartCouponApplyFailureAction;

  constructor(public payload: string) {}
}

export class DaffCartCouponList implements Action {
  readonly type = DaffCartCouponActionTypes.CartCouponListAction;
}

export class DaffCartCouponListSuccess<T extends DaffCartCoupon = DaffCartCoupon> implements Action {
  readonly type = DaffCartCouponActionTypes.CartCouponListSuccessAction;

  constructor(public payload: T[]) {}
}

export class DaffCartCouponListFailure implements Action {
  readonly type = DaffCartCouponActionTypes.CartCouponListFailureAction;

  constructor(public payload: string) {}
}

export class DaffCartCouponRemove<T extends DaffCartCoupon = DaffCartCoupon> implements Action {
  readonly type = DaffCartCouponActionTypes.CartCouponRemoveAction;

  constructor(public payload: T) {}
}

export class DaffCartCouponRemoveSuccess<T extends DaffCart = DaffCart> implements Action {
  readonly type = DaffCartCouponActionTypes.CartCouponRemoveSuccessAction;

  constructor(public payload: Partial<T>) {}
}

export class DaffCartCouponRemoveFailure implements Action {
  readonly type = DaffCartCouponActionTypes.CartCouponRemoveFailureAction;

  constructor(public payload: string) {}
}

export class DaffCartCouponRemoveAll implements Action {
  readonly type = DaffCartCouponActionTypes.CartCouponRemoveAllAction;
}

export class DaffCartCouponRemoveAllSuccess<T extends DaffCart = DaffCart> implements Action {
  readonly type = DaffCartCouponActionTypes.CartCouponRemoveAllSuccessAction;

  constructor(public payload: Partial<T>) {}
}

export class DaffCartCouponRemoveAllFailure implements Action {
  readonly type = DaffCartCouponActionTypes.CartCouponRemoveAllFailureAction;

  constructor(public payload: string) {}
}

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
  | DaffCartCouponRemoveAllFailure;
