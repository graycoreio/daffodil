import { Action } from '@ngrx/store';

import { DaffCart } from '@daffodil/cart';
import { DaffCollectionRequest } from '@daffodil/core';
import { DaffStateError } from '@daffodil/core/state';
import {
  DaffOrder,
  DaffOrderCollection,
} from '@daffodil/order';

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
 * @param orderId The order ID.
 * @param cartId The optional guest cart ID.
 */
export class DaffOrderLoad<
  T extends DaffOrder = DaffOrder,
> implements Action {
  readonly type = DaffOrderActionTypes.OrderLoadAction;

  constructor(public orderId: T['id'], public cartId?: DaffCart['id']) {}
}

export class DaffOrderLoadSuccess<T extends DaffOrder = DaffOrder> implements Action {
  readonly type = DaffOrderActionTypes.OrderLoadSuccessAction;

  constructor(public payload: T) {}
}

export class DaffOrderLoadFailure implements Action {
  readonly type = DaffOrderActionTypes.OrderLoadFailureAction;

  constructor(public payload: DaffStateError) {}
}

/**
 * Triggers the loading of the orders for either the currently logged-in user or the specified guest cart.
 *
 * @param payload The guest cart ID.
 */
export class DaffOrderList implements Action {
  readonly type = DaffOrderActionTypes.OrderListAction;

  constructor(public cartId?: DaffCart['id'], public request: DaffCollectionRequest = {}) {}
}

export class DaffOrderListSuccess<T extends DaffOrder = DaffOrder> implements Action {
  readonly type = DaffOrderActionTypes.OrderListSuccessAction;

  constructor(public payload: DaffOrderCollection<T>) {}
}

export class DaffOrderListFailure implements Action {
  readonly type = DaffOrderActionTypes.OrderListFailureAction;

  constructor(public payload: DaffStateError) {}
}

export type DaffOrderActions<
  T extends DaffOrder = DaffOrder,
> =
  | DaffOrderLoad<T>
  | DaffOrderLoadSuccess<T>
  | DaffOrderLoadFailure
  | DaffOrderList
  | DaffOrderListSuccess<T>
  | DaffOrderListFailure;
