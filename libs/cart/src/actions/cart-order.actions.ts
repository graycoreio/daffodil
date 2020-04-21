import { Action } from '@ngrx/store';

import { DaffCartOrderResult } from '../models/cart-order-result';
import { DaffCartPaymentMethod } from '../models/cart-payment';

export enum DaffCartOrderActionTypes {
  CartPlaceOrderAction = '[DaffCart] Cart Place Order Action',
  CartPlaceOrderSuccessAction = '[DaffCart] Cart Place Order Success Action',
  CartPlaceOrderFailureAction = '[DaffCart] Cart Place Order Failure Action'
}

export class DaffCartPlaceOrder<T extends DaffCartPaymentMethod = DaffCartPaymentMethod> implements Action {
  readonly type = DaffCartOrderActionTypes.CartPlaceOrderAction;

  constructor(public payload?: T) {}
}

export class DaffCartPlaceOrderSuccess<T extends DaffCartOrderResult = DaffCartOrderResult> implements Action {
  readonly type = DaffCartOrderActionTypes.CartPlaceOrderSuccessAction;

  constructor(public payload: T) {}
}

export class DaffCartPlaceOrderFailure implements Action {
  readonly type = DaffCartOrderActionTypes.CartPlaceOrderFailureAction;

  constructor(public payload: string) {}
}

export type DaffCartOrderActions<
  T extends DaffCartOrderResult = DaffCartOrderResult,
  V extends DaffCartPaymentMethod = DaffCartPaymentMethod
> =
  | DaffCartPlaceOrder<V>
  | DaffCartPlaceOrderSuccess<T>
  | DaffCartPlaceOrderFailure;
