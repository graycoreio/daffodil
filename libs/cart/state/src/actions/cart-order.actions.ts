import { Action } from '@ngrx/store';

import {
  DaffCartPaymentMethod,
  DaffCartOrderResult,
} from '@daffodil/cart';
import {
  DaffFailureAction,
  DaffStateError,
} from '@daffodil/core/state';

/**
 * An enum for the cart order action types.
 */
export enum DaffCartOrderActionTypes {
  CartPlaceOrderAction = '[@daffodil/cart] Cart Place Order Action',
  CartPlaceOrderSuccessAction = '[@daffodil/cart] Cart Place Order Success Action',
  CartPlaceOrderFailureAction = '[@daffodil/cart] Cart Place Order Failure Action'
}

/**
 * Triggers the order placement for a cart.
 */
export class DaffCartPlaceOrder<T extends DaffCartPaymentMethod = DaffCartPaymentMethod> implements Action {
  readonly type = DaffCartOrderActionTypes.CartPlaceOrderAction;

  constructor(public payload?: T) {}
}

/**
 * Indicates the successful order placement for a cart.
 */
export class DaffCartPlaceOrderSuccess<T extends DaffCartOrderResult = DaffCartOrderResult> implements Action {
  readonly type = DaffCartOrderActionTypes.CartPlaceOrderSuccessAction;

  constructor(public payload: T) {}
}

/**
 * Indicates the failed order placement for a cart.
 */
export class DaffCartPlaceOrderFailure implements DaffFailureAction {
  readonly type = DaffCartOrderActionTypes.CartPlaceOrderFailureAction;

  constructor(public payload: DaffStateError[]) {}
}

/**
 * A union of all the cart order action classes.
 */
export type DaffCartOrderActions<
  T extends DaffCartOrderResult = DaffCartOrderResult,
  V extends DaffCartPaymentMethod = DaffCartPaymentMethod
> =
  | DaffCartPlaceOrder<V>
  | DaffCartPlaceOrderSuccess<T>
  | DaffCartPlaceOrderFailure;
