import { Action } from '@ngrx/store';

export enum DaffCartOrderActionTypes {
  CartPlaceOrderAction = '[DaffCart] Cart Place Order Action',
  CartPlaceOrderSuccessAction = '[DaffCart] Cart Place Order Success Action',
  CartPlaceOrderFailureAction = '[DaffCart] Cart Place Order Failure Action'
}

export class DaffCartPlaceOrder implements Action {
  readonly type = DaffCartOrderActionTypes.CartPlaceOrderAction;
}

export class DaffCartPlaceOrderSuccess implements Action {
  readonly type = DaffCartOrderActionTypes.CartPlaceOrderSuccessAction;

  constructor(public payload: {id: string | number}) {}
}

export class DaffCartPlaceOrderFailure implements Action {
  readonly type = DaffCartOrderActionTypes.CartPlaceOrderFailureAction;

  constructor(public payload: string) {}
}

export type DaffCartOrderActions =
  | DaffCartPlaceOrder
  | DaffCartPlaceOrderSuccess
  | DaffCartPlaceOrderFailure;
