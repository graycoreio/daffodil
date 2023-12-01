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
 * An enum for the cart billing address action types.
 */
export enum DaffCartBillingAddressActionTypes {
  CartBillingAddressLoadAction = '[DaffCart] Billing Address Load Action',
  CartBillingAddressLoadSuccessAction = '[DaffCart] Billing Address Load Success Action',
  CartBillingAddressLoadFailureAction = '[DaffCart] Billing Address Load Failure Action',
  CartBillingAddressUpdateAction = '[DaffCart] Billing Address Update Action',
  CartBillingAddressUpdateSuccessAction = '[DaffCart] Billing Address Update Success Action',
  CartBillingAddressUpdateFailureAction = '[DaffCart] Billing Address Update Failure Action',
}

/**
 * Triggers the load of the cart's billing address.
 */
export class DaffCartBillingAddressLoad implements Action {
  readonly type = DaffCartBillingAddressActionTypes.CartBillingAddressLoadAction;
}

/**
 * Indicates the successful load of the cart's billing address.
 */
export class DaffCartBillingAddressLoadSuccess<T extends DaffCartAddress> implements Action {
  readonly type = DaffCartBillingAddressActionTypes.CartBillingAddressLoadSuccessAction;

  constructor(public payload: T) {}
}

/**
 * Indicates the failed load of the cart's billing address.
 */
export class DaffCartBillingAddressLoadFailure implements DaffFailureAction {
  readonly type = DaffCartBillingAddressActionTypes.CartBillingAddressLoadFailureAction;

  constructor(public payload: DaffStateError[]) {}
}

/**
 * Triggers the update of the cart's billing address.
 */
export class DaffCartBillingAddressUpdate<T extends DaffCartAddress = DaffCartAddress> implements Action {
  readonly type = DaffCartBillingAddressActionTypes.CartBillingAddressUpdateAction;

  constructor(public payload: Partial<T>) {}
}

/**
 * Indicates the successful update of the cart's billing address.
 */
export class DaffCartBillingAddressUpdateSuccess<T extends DaffCart = DaffCart> implements DaffCartRetrievalAction<T> {
  readonly type = DaffCartBillingAddressActionTypes.CartBillingAddressUpdateSuccessAction;

  constructor(public payload: Partial<T>) {}
}

/**
 * Indicates the failed update of the cart's billing address.
 */
export class DaffCartBillingAddressUpdateFailure implements DaffFailureAction {
  readonly type = DaffCartBillingAddressActionTypes.CartBillingAddressUpdateFailureAction;

  constructor(public payload: DaffStateError[]) {}
}

/**
 * A union of all the cart billing address action classes.
 */
export type DaffCartBillingAddressActions<
  T extends DaffCartAddress = DaffCartAddress,
  V extends DaffCart = DaffCart
> =
  | DaffCartBillingAddressLoad
  | DaffCartBillingAddressLoadSuccess<T>
  | DaffCartBillingAddressLoadFailure
  | DaffCartBillingAddressUpdate<T>
  | DaffCartBillingAddressUpdateSuccess<V>
  | DaffCartBillingAddressUpdateFailure;
