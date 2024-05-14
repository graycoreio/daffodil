import { Action } from '@ngrx/store';

import {
  DaffCartShippingRate,
  DaffCart,
} from '@daffodil/cart';
import {
  DaffFailureAction,
  DaffStateError,
} from '@daffodil/core/state';

import { DaffCartRetrievalAction } from '../cart-retrieval/public_api';

/**
 * An enum for the cart shipping information action types.
 */
export enum DaffCartShippingInformationActionTypes {
  CartShippingInformationLoadAction = '[@daffodil/cart] Shipping Information Load Action',
  CartShippingInformationLoadSuccessAction = '[@daffodil/cart] Shipping Information Load Success Action',
  CartShippingInformationLoadFailureAction = '[@daffodil/cart] Shipping Information Load Failure Action',
  CartShippingInformationUpdateAction = '[@daffodil/cart] Shipping Information Update Action',
  CartShippingInformationUpdateSuccessAction = '[@daffodil/cart] Shipping Information Update Success Action',
  CartShippingInformationUpdateFailureAction = '[@daffodil/cart] Shipping Information Update Failure Action',
  CartShippingInformationDeleteAction = '[@daffodil/cart] Shipping Information Remove Action',
  CartShippingInformationDeleteSuccessAction = '[@daffodil/cart] Shipping Information Remove Success Action',
  CartShippingInformationDeleteFailureAction = '[@daffodil/cart] Shipping Information Remove Failure Action',
}

/**
 * Triggers the load of the cart's shipping information.
 */
export class DaffCartShippingInformationLoad implements Action {
  readonly type = DaffCartShippingInformationActionTypes.CartShippingInformationLoadAction;
}

/**
 * Indicates the successful load of the cart's shipping information.
 */
export class DaffCartShippingInformationLoadSuccess<T extends DaffCartShippingRate = DaffCartShippingRate> implements Action {
  readonly type = DaffCartShippingInformationActionTypes.CartShippingInformationLoadSuccessAction;

  constructor(public payload: T) {}
}

/**
 * Indicates the failed load of the cart's shipping information.
 */
export class DaffCartShippingInformationLoadFailure implements DaffFailureAction {
  readonly type = DaffCartShippingInformationActionTypes.CartShippingInformationLoadFailureAction;

  constructor(public payload: DaffStateError[]) {}
}

/**
 * Triggers the update of the cart's shipping information.
 */
export class DaffCartShippingInformationUpdate<T extends DaffCartShippingRate = DaffCartShippingRate> implements Action {
  readonly type = DaffCartShippingInformationActionTypes.CartShippingInformationUpdateAction;

  constructor(public payload: Partial<T>) {}
}

/**
 * Indicates the successful update of the cart's shipping information.
 */
export class DaffCartShippingInformationUpdateSuccess<T extends DaffCart = DaffCart> implements DaffCartRetrievalAction<T> {
  readonly type = DaffCartShippingInformationActionTypes.CartShippingInformationUpdateSuccessAction;

  constructor(public payload: Partial<T>) {}
}

/**
 * Indicates the failed update of the cart's shipping information.
 */
export class DaffCartShippingInformationUpdateFailure implements DaffFailureAction {
  readonly type = DaffCartShippingInformationActionTypes.CartShippingInformationUpdateFailureAction;

  constructor(public payload: DaffStateError[]) {}
}

/**
 * Triggers the deletion of the cart's shipping information.
 */
export class DaffCartShippingInformationDelete implements Action {
  readonly type = DaffCartShippingInformationActionTypes.CartShippingInformationDeleteAction;

  constructor(public id?: DaffCartShippingRate['id']) {}
}

export class DaffCartShippingInformationDeleteSuccess<T extends DaffCart = DaffCart> implements DaffCartRetrievalAction<T> {
  readonly type = DaffCartShippingInformationActionTypes.CartShippingInformationDeleteSuccessAction;

  constructor(public payload: Partial<T>) {}
}

export class DaffCartShippingInformationDeleteFailure implements DaffFailureAction {
  readonly type = DaffCartShippingInformationActionTypes.CartShippingInformationDeleteFailureAction;

  constructor(public payload: DaffStateError[]) {}
}

/**
 * A union of all the cart shipping information action classes.
 */
export type DaffCartShippingInformationActions<T extends DaffCart = DaffCart> =
  | DaffCartShippingInformationLoad
  | DaffCartShippingInformationLoadSuccess<T['shipping_information']>
  | DaffCartShippingInformationLoadFailure
  | DaffCartShippingInformationUpdate<T['shipping_information']>
  | DaffCartShippingInformationUpdateSuccess<T>
  | DaffCartShippingInformationUpdateFailure
  | DaffCartShippingInformationDelete
  | DaffCartShippingInformationDeleteSuccess<T>
  | DaffCartShippingInformationDeleteFailure;
