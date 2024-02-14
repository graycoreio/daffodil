import { Action } from '@ngrx/store';

import { DaffCartPaymentMethod } from '@daffodil/cart';
import {
  DaffFailureAction,
  DaffStateError,
} from '@daffodil/core/state';

/**
 * An enum for the cart payment methods action types.
 */
export enum DaffCartPaymentMethodsActionTypes {
  CartPaymentMethodsLoadAction = '[@daffodil/cart] Payment Methods Load Action',
  CartPaymentMethodsLoadSuccessAction = '[@daffodil/cart] Payment Methods Load Success Action',
  CartPaymentMethodsLoadFailureAction = '[@daffodil/cart] Payment Methods Load Failure Action',
}

/**
 * Triggers the load of the cart's available payment methods.
 */
export class DaffCartPaymentMethodsLoad implements Action {
  readonly type = DaffCartPaymentMethodsActionTypes.CartPaymentMethodsLoadAction;

  constructor() {}
}

/**
 * Indicates the successful load of the cart's available payment methods.
 */
export class DaffCartPaymentMethodsLoadSuccess<T extends DaffCartPaymentMethod = DaffCartPaymentMethod> implements Action {
  readonly type = DaffCartPaymentMethodsActionTypes.CartPaymentMethodsLoadSuccessAction;

  constructor(public payload: T[]) {}
}

/**
 * Indicates the failed load of the cart's available payment methods.
 */
export class DaffCartPaymentMethodsLoadFailure implements DaffFailureAction {
  readonly type = DaffCartPaymentMethodsActionTypes.CartPaymentMethodsLoadFailureAction;

  constructor(public payload: DaffStateError[]) {}
}

/**
 * A union of all the cart payment methods action classes.
 */
export type DaffCartPaymentMethodsActions<T extends DaffCartPaymentMethod = DaffCartPaymentMethod> =
  | DaffCartPaymentMethodsLoad
  | DaffCartPaymentMethodsLoadSuccess<T>
  | DaffCartPaymentMethodsLoadFailure;
