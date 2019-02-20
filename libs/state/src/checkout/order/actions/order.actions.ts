import { Action } from '@ngrx/store';
import { Order, Cart } from '@daffodil/core';

export enum OrderActionTypes {
  PlaceOrderAction = "[Order] Place Order Action",
  PlaceOrderSuccessAction = "[Order] Place Order Success Action",
  PlaceOrderFailureAction = "[Order] Place Order Failure Action"
}

export class PlaceOrder implements Action {
  readonly type = OrderActionTypes.PlaceOrderAction;

  constructor(public payload: Cart) {}
}

export class PlaceOrderSuccess implements Action {
  readonly type = OrderActionTypes.PlaceOrderSuccessAction;

  constructor(public payload: Order) {}
}

export class PlaceOrderFailure implements Action {
  readonly type = OrderActionTypes.PlaceOrderFailureAction;

  constructor(public payload: string) {}
}

export type OrderActions =
    | PlaceOrder
    | PlaceOrderSuccess
    | PlaceOrderFailure;
