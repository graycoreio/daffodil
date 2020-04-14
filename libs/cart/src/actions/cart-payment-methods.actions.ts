import { Action } from '@ngrx/store';

import { DaffCartPaymentMethod } from '../models/cart-payment';

export enum DaffCartPaymentMethodsActionTypes {
  CartPaymentMethodsLoadAction = '[DaffCart] Payment Methods Load Action',
  CartPaymentMethodsLoadSuccessAction = '[DaffCart] Payment Methods Load Success Action',
  CartPaymentMethodsLoadFailureAction = '[DaffCart] Payment Methods Load Failure Action',
}

export class DaffCartPaymentMethodsLoad implements Action {
  readonly type = DaffCartPaymentMethodsActionTypes.CartPaymentMethodsLoadAction;

  constructor() {}
}

export class DaffCartPaymentMethodsLoadSuccess<T extends DaffCartPaymentMethod = DaffCartPaymentMethod> implements Action {
  readonly type = DaffCartPaymentMethodsActionTypes.CartPaymentMethodsLoadSuccessAction;

  constructor(public payload: T[]) {}
}

export class DaffCartPaymentMethodsLoadFailure implements Action {
  readonly type = DaffCartPaymentMethodsActionTypes.CartPaymentMethodsLoadFailureAction;

  constructor(public payload: string) {}
}

export type DaffCartPaymentMethodsActions<T extends DaffCartPaymentMethod = DaffCartPaymentMethod> =
  | DaffCartPaymentMethodsLoad
  | DaffCartPaymentMethodsLoadSuccess<T>
  | DaffCartPaymentMethodsLoadFailure
