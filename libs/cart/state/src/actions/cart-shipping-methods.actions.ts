import { Action } from '@ngrx/store';

import { DaffCartShippingRate } from '@daffodil/cart';
import {
  DaffFailureAction,
  DaffStateError,
} from '@daffodil/core/state';

/**
 * An enum for the cart shipping methods action types.
 */
export enum DaffCartShippingMethodsActionTypes {
  CartShippingMethodsLoadAction = '[@daffodil/cart] Shipping Methods Load Action',
  CartShippingMethodsLoadSuccessAction = '[@daffodil/cart] Shipping Methods Load Success Action',
  CartShippingMethodsLoadFailureAction = '[@daffodil/cart] Shipping Methods Load Failure Action',
}

/**
 * Triggers the load of the cart's available shipping methods.
 */
export class DaffCartShippingMethodsLoad implements Action {
  readonly type = DaffCartShippingMethodsActionTypes.CartShippingMethodsLoadAction;

  constructor() {}
}

export class DaffCartShippingMethodsLoadSuccess<T extends DaffCartShippingRate = DaffCartShippingRate> implements Action {
  readonly type = DaffCartShippingMethodsActionTypes.CartShippingMethodsLoadSuccessAction;

  constructor(public payload: T[]) {}
}

export class DaffCartShippingMethodsLoadFailure implements DaffFailureAction {
  readonly type = DaffCartShippingMethodsActionTypes.CartShippingMethodsLoadFailureAction;

  constructor(public payload: DaffStateError[]) {}
}

/**
 * A union of all the cart shipping methods action classes.
 */
export type DaffCartShippingMethodsActions<T extends DaffCartShippingRate = DaffCartShippingRate> =
  | DaffCartShippingMethodsLoad
  | DaffCartShippingMethodsLoadSuccess<T>
  | DaffCartShippingMethodsLoadFailure;
