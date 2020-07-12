import { Action } from '@ngrx/store';

import { DaffCart } from '@daffodil/cart';

import { DaffOrder } from '../models/public_api';

export enum DaffOrderActionTypes {
  OrderLoadAction = '[Order] Order Load Action',
  OrderLoadSuccessAction = '[Order] Order Load Success Action',
  OrderLoadFailureAction = '[Order] Order Load Failure Action',
  OrderListAction = '[Order] Order List Action',
  OrderListSuccessAction = '[Order] Order List Success Action',
  OrderListFailureAction = '[Order] Order List Failure Action'
}

/**
 * Triggers the loading of the specified order.
 *
 * @param payload The order and guest cart ID.
 */
export class DaffOrderLoad<
  T extends DaffOrder = DaffOrder,
  V extends DaffCart = DaffCart
> implements Action {
  readonly type = DaffOrderActionTypes.OrderLoadAction;

  constructor(public payload: {
    orderId: T['id'],
    cartId?: V['id'],
  }) {}
}

export class DaffOrderLoadSuccess<T extends DaffOrder = DaffOrder> implements Action {
  readonly type = DaffOrderActionTypes.OrderLoadSuccessAction;

  constructor(public payload: T) {}
}

export class DaffOrderLoadFailure implements Action {
  readonly type = DaffOrderActionTypes.OrderLoadFailureAction;

  constructor(public payload: string) {}
}

/**
 * Triggers the loading of the orders for either the currently logged-in user or the specified guest cart.
 *
 * @param payload The guest cart ID.
 */
export class DaffOrderList<T extends DaffCart = DaffCart> implements Action {
  readonly type = DaffOrderActionTypes.OrderListAction;

  constructor(public payload?: T['id']) {}
}

export class DaffOrderListSuccess<T extends DaffOrder = DaffOrder> implements Action {
  readonly type = DaffOrderActionTypes.OrderListSuccessAction;

  constructor(public payload: T[]) {}
}

export class DaffOrderListFailure implements Action {
  readonly type = DaffOrderActionTypes.OrderListFailureAction;

  constructor(public payload: string) {}
}

export type DaffOrderActions<
  T extends DaffOrder = DaffOrder,
  V extends DaffCart = DaffCart
> =
  | DaffOrderLoad<T, V>
  | DaffOrderLoadSuccess<T>
  | DaffOrderLoadFailure
  | DaffOrderList
  | DaffOrderListSuccess<T>
  | DaffOrderListFailure
