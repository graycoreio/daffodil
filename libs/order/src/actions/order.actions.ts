import { Action } from '@ngrx/store';

import { DaffOrder } from '../models/public_api';

export enum DaffOrderActionTypes {
  OrderLoadAction = '[Order] Order Load Action',
  OrderLoadSuccessAction = '[Order] Order Load Success Action',
  OrderLoadFailureAction = '[Order] Order Load Failure Action',
  OrderListAction = '[Order] Order List Action',
  OrderListSuccessAction = '[Order] Order List Success Action',
  OrderListFailureAction = '[Order] Order List Failure Action'
}

export class DaffOrderLoad<T extends DaffOrder = DaffOrder> implements Action {
  readonly type = DaffOrderActionTypes.OrderLoadAction;

  constructor(public payload: T['id']) {}
}

export class DaffOrderLoadSuccess<T extends DaffOrder = DaffOrder> implements Action {
  readonly type = DaffOrderActionTypes.OrderLoadSuccessAction;

  constructor(public payload: T) {}
}

export class DaffOrderLoadFailure implements Action {
  readonly type = DaffOrderActionTypes.OrderLoadFailureAction;

  constructor(public payload: string) {}
}

export class DaffOrderList implements Action {
  readonly type = DaffOrderActionTypes.OrderListAction;
}

export class DaffOrderListSuccess<T extends DaffOrder = DaffOrder> implements Action {
  readonly type = DaffOrderActionTypes.OrderListSuccessAction;

  constructor(public payload: T[]) {}
}

export class DaffOrderListFailure implements Action {
  readonly type = DaffOrderActionTypes.OrderListFailureAction;

  constructor(public payload: string) {}
}

export type DaffOrderActions<T extends DaffOrder = DaffOrder> =
  | DaffOrderLoad<T>
  | DaffOrderLoadSuccess<T>
  | DaffOrderLoadFailure
  | DaffOrderList
  | DaffOrderListSuccess<T>
  | DaffOrderListFailure
