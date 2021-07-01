import { Action } from '@ngrx/store';

import {
  DaffCartAddress,
  DaffCart,
} from '@daffodil/cart';
import { DaffStateError } from '@daffodil/core/state';

/**
 * An enum for the cart shipping address action types.
 */
export enum DaffCartShippingAddressActionTypes {
  CartShippingAddressLoadAction = '[DaffCart] Shipping Address Load Action',
  CartShippingAddressLoadSuccessAction = '[DaffCart] Shipping Address Load Success Action',
  CartShippingAddressLoadFailureAction = '[DaffCart] Shipping Address Load Failure Action',
  CartShippingAddressUpdateAction = '[DaffCart] Shipping Address Update Action',
  CartShippingAddressUpdateSuccessAction = '[DaffCart] Shipping Address Update Success Action',
  CartShippingAddressUpdateFailureAction = '[DaffCart] Shipping Address Update Failure Action',
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
export class DaffCartShippingAddressLoadSuccess<T extends DaffCartAddress = DaffCartAddress> implements Action {
  readonly type = DaffCartShippingAddressActionTypes.CartShippingAddressLoadSuccessAction;

  constructor(public payload: T) {}
}

/**
 * Indicates the failed load of the cart's shipping address.
 */
export class DaffCartShippingAddressLoadFailure implements Action {
  readonly type = DaffCartShippingAddressActionTypes.CartShippingAddressLoadFailureAction;

  constructor(public payload: DaffStateError) {}
}

/**
 * Triggers the update of the cart's shipping address.
 */
export class DaffCartShippingAddressUpdate<T extends DaffCartAddress = DaffCartAddress> implements Action {
  readonly type = DaffCartShippingAddressActionTypes.CartShippingAddressUpdateAction;

  constructor(public payload: Partial<T>) {}
}

/**
 * Indicates the successful update of the cart's shipping address.
 */
export class DaffCartShippingAddressUpdateSuccess<T extends DaffCart = DaffCart> implements Action {
  readonly type = DaffCartShippingAddressActionTypes.CartShippingAddressUpdateSuccessAction;

  constructor(public payload: Partial<T>) {}
}

/**
 * Indicates the failed update of the cart's shipping address.
 */
export class DaffCartShippingAddressUpdateFailure implements Action {
  readonly type = DaffCartShippingAddressActionTypes.CartShippingAddressUpdateFailureAction;

  constructor(public payload: DaffStateError) {}
}

/**
 * A union of all the cart shipping address action classes.
 */
export type DaffCartShippingAddressActions<
  T extends DaffCartAddress = DaffCartAddress,
  V extends DaffCart = DaffCart
> =
  | DaffCartShippingAddressLoad
  | DaffCartShippingAddressLoadSuccess<T>
  | DaffCartShippingAddressLoadFailure
  | DaffCartShippingAddressUpdate<T>
  | DaffCartShippingAddressUpdateSuccess<V>
  | DaffCartShippingAddressUpdateFailure;
