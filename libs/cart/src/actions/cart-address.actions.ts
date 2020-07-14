import { Action } from '@ngrx/store';

import { DaffCart } from '../models/cart';
import { DaffCartAddress } from '../models/cart-address';

export enum DaffCartAddressActionTypes {
  CartAddressUpdateAction = '[DaffCart] Cart Address Update Action',
  CartAddressUpdateSuccessAction = '[DaffCart] Cart Address Update Success Action',
  CartAddressUpdateFailureAction = '[DaffCart] Cart Address Update Failure Action',
}

/**
 * Triggers the update of both the shipping and billing address of the cart.
 */
export class DaffCartAddressUpdate<T extends DaffCartAddress = DaffCartAddress> implements Action {
  readonly type = DaffCartAddressActionTypes.CartAddressUpdateAction;

  constructor(public payload: T) {}
}

/**
 * Indicates the successful update of both the shipping and billing address of the cart.
 */
export class DaffCartAddressUpdateSuccess<T extends DaffCart = DaffCart> implements Action {
  readonly type = DaffCartAddressActionTypes.CartAddressUpdateSuccessAction;

  constructor(public payload: Partial<T>) {}
}

/**
 * Indicates the failed update of either the shipping or billing address of the cart.
 */
export class DaffCartAddressUpdateFailure implements Action {
  readonly type = DaffCartAddressActionTypes.CartAddressUpdateFailureAction;

  constructor(public payload: string) {}
}

export type DaffCartAddressActions<
  T extends DaffCartAddress = DaffCartAddress,
  V extends DaffCart = DaffCart
> =
  | DaffCartAddressUpdate<T>
  | DaffCartAddressUpdateSuccess<V>
  | DaffCartAddressUpdateFailure
