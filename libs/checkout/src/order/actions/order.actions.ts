import { Action } from '@ngrx/store';
import { DaffCart } from '@daffodil/cart';

import { Order } from '../../models/order/order';

export enum OrderActionTypes {
  PlaceOrderAction = '[Order] Place Order Action',
  PlaceOrderSuccessAction = '[Order] Place Order Success Action',
  PlaceOrderFailureAction = '[Order] Place Order Failure Action'
}

export class PlaceOrder implements Action {
  readonly type = OrderActionTypes.PlaceOrderAction;

  constructor(public payload: DaffCart) {}
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
