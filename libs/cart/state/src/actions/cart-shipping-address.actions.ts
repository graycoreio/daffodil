import { Action } from '@ngrx/store';

import { DaffCart } from '@daffodil/cart';
import {
  DaffFailureAction,
  DaffStateError,
} from '@daffodil/core/state';

import { DaffCartRetrievalAction } from '../cart-retrieval/public_api';

/**
 * An enum for the cart shipping address action types.
 */
export enum DaffCartShippingAddressActionTypes {
  CartShippingAddressLoadAction = '[@daffodil/cart] Shipping Address Load Action',
  CartShippingAddressLoadSuccessAction = '[@daffodil/cart] Shipping Address Load Success Action',
  CartShippingAddressLoadFailureAction = '[@daffodil/cart] Shipping Address Load Failure Action',
  CartShippingAddressUpdateAction = '[@daffodil/cart] Shipping Address Update Action',
  CartShippingAddressUpdateSuccessAction = '[@daffodil/cart] Shipping Address Update Success Action',
  CartShippingAddressUpdateFailureAction = '[@daffodil/cart] Shipping Address Update Failure Action',
}

/**
 * Triggers the load of the cart's shipping address.
 */
export class DaffCartShippingAddressLoad implements Action {
  readonly type = DaffCartShippingAddressActionTypes.CartShippingAddressLoadAction;
}

/**
 * Indicates the successful load of the cart's shipping address.
 */
export class DaffCartShippingAddressLoadSuccess<T extends DaffCart = DaffCart> implements Action {
  readonly type = DaffCartShippingAddressActionTypes.CartShippingAddressLoadSuccessAction;

  constructor(public payload: T['shipping_address']) {}
}

/**
 * Indicates the failed load of the cart's shipping address.
 */
export class DaffCartShippingAddressLoadFailure implements DaffFailureAction {
  readonly type = DaffCartShippingAddressActionTypes.CartShippingAddressLoadFailureAction;

  constructor(public payload: DaffStateError[]) {}
}

/**
 * Triggers the update of the cart's shipping address.
 */
export class DaffCartShippingAddressUpdate<T extends DaffCart = DaffCart> implements Action {
  readonly type = DaffCartShippingAddressActionTypes.CartShippingAddressUpdateAction;

  constructor(public payload: Partial<T['shipping_address']>) {}
}

/**
 * Indicates the successful update of the cart's shipping address.
 */
export class DaffCartShippingAddressUpdateSuccess<T extends DaffCart = DaffCart> implements DaffCartRetrievalAction<T> {
  readonly type = DaffCartShippingAddressActionTypes.CartShippingAddressUpdateSuccessAction;

  constructor(public payload: Partial<T>) {}
}

/**
 * Indicates the failed update of the cart's shipping address.
 */
export class DaffCartShippingAddressUpdateFailure implements DaffFailureAction {
  readonly type = DaffCartShippingAddressActionTypes.CartShippingAddressUpdateFailureAction;

  constructor(public payload: DaffStateError[]) {}
}

/**
 * A union of all the cart shipping address action classes.
 */
export type DaffCartShippingAddressActions<T extends DaffCart = DaffCart> =
  | DaffCartShippingAddressLoad
  | DaffCartShippingAddressLoadSuccess<T>
  | DaffCartShippingAddressLoadFailure
  | DaffCartShippingAddressUpdate<T>
  | DaffCartShippingAddressUpdateSuccess<T>
  | DaffCartShippingAddressUpdateFailure;
