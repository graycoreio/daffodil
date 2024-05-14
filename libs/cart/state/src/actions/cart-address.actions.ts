import { Action } from '@ngrx/store';

import {
  DaffCartAddress,
  DaffCart,
} from '@daffodil/cart';
import {
  DaffFailureAction,
  DaffStateError,
} from '@daffodil/core/state';

import { DaffCartRetrievalAction } from '../cart-retrieval/public_api';

/**
 * An enum for the cart address action types.
 */
export enum DaffCartAddressActionTypes {
  CartAddressUpdateAction = '[@daffodil/cart] Cart Address Update Action',
  CartAddressUpdateSuccessAction = '[@daffodil/cart] Cart Address Update Success Action',
  CartAddressUpdateFailureAction = '[@daffodil/cart] Cart Address Update Failure Action',
}

/**
 * Triggers the update of both the shipping and billing address of the cart.
 */
export class DaffCartAddressUpdate<T extends DaffCartAddress = DaffCartAddress> implements Action {
  readonly type = DaffCartAddressActionTypes.CartAddressUpdateAction;

  constructor(public payload: Partial<T>) {}
}

/**
 * Indicates the successful update of both the shipping and billing address of the cart.
 */
export class DaffCartAddressUpdateSuccess<T extends DaffCart = DaffCart> implements DaffCartRetrievalAction<T> {
  readonly type = DaffCartAddressActionTypes.CartAddressUpdateSuccessAction;

  constructor(public payload: Partial<T>) {}
}

/**
 * Indicates the failed update of either the shipping or billing address of the cart.
 */
export class DaffCartAddressUpdateFailure implements DaffFailureAction {
  readonly type = DaffCartAddressActionTypes.CartAddressUpdateFailureAction;

  constructor(public payload: DaffStateError[]) {}
}

/**
 * A union of all the cart address action classes.
 */
export type DaffCartAddressActions<T extends DaffCart = DaffCart> =
  | DaffCartAddressUpdate<T['shipping_address'] | T['billing_address']>
  | DaffCartAddressUpdateSuccess<T>
  | DaffCartAddressUpdateFailure;
