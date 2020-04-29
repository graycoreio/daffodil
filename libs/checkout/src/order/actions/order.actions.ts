import { Action } from '@ngrx/store';
import { DaffCart } from '@daffodil/cart';

import { DaffOrder } from '../../models/order/order';

export enum DaffOrderActionTypes {
  PlaceOrderAction = '[Order] Place Order Action',
  PlaceOrderSuccessAction = '[Order] Place Order Success Action',
  PlaceOrderFailureAction = '[Order] Place Order Failure Action'
}

export enum OrderActionTypes {
  PlaceOrderAction = '[Order] Place Order Action',
  PlaceOrderSuccessAction = '[Order] Place Order Success Action',
  PlaceOrderFailureAction = '[Order] Place Order Failure Action'
}

export class PlaceOrder implements Action {
  readonly type = DaffOrderActionTypes.PlaceOrderAction;

  constructor(public payload: DaffCart) {}
}

export class DaffPlaceOrder implements Action {
  readonly type = DaffOrderActionTypes.PlaceOrderAction;

  constructor(public payload: DaffCart) {}
}

export class DaffPlaceOrderSuccess implements Action {
  readonly type = DaffOrderActionTypes.PlaceOrderSuccessAction;

  constructor(public payload: DaffOrder) {}
}

export class DaffPlaceOrderFailure implements Action {
  readonly type = DaffOrderActionTypes.PlaceOrderFailureAction;

  constructor(public payload: string) {}
}

export type DaffOrderActions =
    | DaffPlaceOrder
    | PlaceOrder
    | DaffPlaceOrderSuccess
    | DaffPlaceOrderFailure;
