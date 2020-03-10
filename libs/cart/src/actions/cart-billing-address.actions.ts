import { Action } from '@ngrx/store';

import { DaffCart } from '../models/cart';
import { DaffCartAddress } from '../models/cart-address';

export enum DaffCartBillingAddressActionTypes {
  CartBillingAddressLoadAction = '[DaffCart] Billing Address Load Action',
  CartBillingAddressLoadSuccessAction = '[DaffCart] Billing Address Load Success Action',
  CartBillingAddressLoadFailureAction = '[DaffCart] Billing Address Load Failure Action',
  CartBillingAddressUpdateAction = '[DaffCart] Billing Address Update Action',
  CartBillingAddressUpdateSuccessAction = '[DaffCart] Billing Address Update Success Action',
  CartBillingAddressUpdateFailureAction = '[DaffCart] Billing Address Update Failure Action',
}

export class DaffCartBillingAddressLoad implements Action {
  readonly type = DaffCartBillingAddressActionTypes.CartBillingAddressLoadAction;
}

export class DaffCartBillingAddressLoadSuccess<T extends DaffCartAddress> implements Action {
  readonly type = DaffCartBillingAddressActionTypes.CartBillingAddressLoadSuccessAction;

  constructor(public payload: T) {}
}

export class DaffCartBillingAddressLoadFailure implements Action {
  readonly type = DaffCartBillingAddressActionTypes.CartBillingAddressLoadFailureAction;

  constructor(public payload: string) {}
}

export class DaffCartBillingAddressUpdate<T extends DaffCartAddress> implements Action {
  readonly type = DaffCartBillingAddressActionTypes.CartBillingAddressUpdateAction;

  constructor(public payload: Partial<T>) {}
}

export class DaffCartBillingAddressUpdateSuccess<T extends DaffCart> implements Action {
  readonly type = DaffCartBillingAddressActionTypes.CartBillingAddressUpdateSuccessAction;

  constructor(public payload: Partial<T>) {}
}

export class DaffCartBillingAddressUpdateFailure implements Action {
  readonly type = DaffCartBillingAddressActionTypes.CartBillingAddressUpdateFailureAction;

  constructor(public payload: string) {}
}

export type DaffCartBillingAddressActions<
  T extends DaffCartAddress,
  V extends DaffCart
> =
  | DaffCartBillingAddressLoad
  | DaffCartBillingAddressLoadSuccess<T>
  | DaffCartBillingAddressLoadFailure
  | DaffCartBillingAddressUpdate<T>
  | DaffCartBillingAddressUpdateSuccess<V>
  | DaffCartBillingAddressUpdateFailure
