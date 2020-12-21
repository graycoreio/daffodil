import { Action } from '@ngrx/store';

import { DaffStateError } from '@daffodil/core/state';
import { DaffCartAddress, DaffCart } from '@daffodil/cart';

export enum DaffCartShippingAddressActionTypes {
  CartShippingAddressLoadAction = '[DaffCart] Shipping Address Load Action',
  CartShippingAddressLoadSuccessAction = '[DaffCart] Shipping Address Load Success Action',
  CartShippingAddressLoadFailureAction = '[DaffCart] Shipping Address Load Failure Action',
  CartShippingAddressUpdateAction = '[DaffCart] Shipping Address Update Action',
  CartShippingAddressUpdateSuccessAction = '[DaffCart] Shipping Address Update Success Action',
  CartShippingAddressUpdateFailureAction = '[DaffCart] Shipping Address Update Failure Action',
}

export class DaffCartShippingAddressLoad implements Action {
  readonly type = DaffCartShippingAddressActionTypes.CartShippingAddressLoadAction;
}

export class DaffCartShippingAddressLoadSuccess<T extends DaffCartAddress = DaffCartAddress> implements Action {
  readonly type = DaffCartShippingAddressActionTypes.CartShippingAddressLoadSuccessAction;

  constructor(public payload: T) {}
}

export class DaffCartShippingAddressLoadFailure implements Action {
  readonly type = DaffCartShippingAddressActionTypes.CartShippingAddressLoadFailureAction;

  constructor(public payload: DaffStateError) {}
}

export class DaffCartShippingAddressUpdate<T extends DaffCartAddress = DaffCartAddress> implements Action {
  readonly type = DaffCartShippingAddressActionTypes.CartShippingAddressUpdateAction;

  constructor(public payload: Partial<T>) {}
}

export class DaffCartShippingAddressUpdateSuccess<T extends DaffCart = DaffCart> implements Action {
  readonly type = DaffCartShippingAddressActionTypes.CartShippingAddressUpdateSuccessAction;

  constructor(public payload: Partial<T>) {}
}

export class DaffCartShippingAddressUpdateFailure implements Action {
  readonly type = DaffCartShippingAddressActionTypes.CartShippingAddressUpdateFailureAction;

  constructor(public payload: DaffStateError) {}
}

export type DaffCartShippingAddressActions<
  T extends DaffCartAddress = DaffCartAddress,
  V extends DaffCart = DaffCart
> =
  | DaffCartShippingAddressLoad
  | DaffCartShippingAddressLoadSuccess<T>
  | DaffCartShippingAddressLoadFailure
  | DaffCartShippingAddressUpdate<T>
  | DaffCartShippingAddressUpdateSuccess<V>
  | DaffCartShippingAddressUpdateFailure
