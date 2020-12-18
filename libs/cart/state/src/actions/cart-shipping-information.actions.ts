import { Action } from '@ngrx/store';

import { DaffStateError } from '@daffodil/core/state';
import { DaffCartShippingRate, DaffCart } from '@daffodil/cart';

export enum DaffCartShippingInformationActionTypes {
  CartShippingInformationLoadAction = '[DaffCart] Shipping Information Load Action',
  CartShippingInformationLoadSuccessAction = '[DaffCart] Shipping Information Load Success Action',
  CartShippingInformationLoadFailureAction = '[DaffCart] Shipping Information Load Failure Action',
  CartShippingInformationUpdateAction = '[DaffCart] Shipping Information Update Action',
  CartShippingInformationUpdateSuccessAction = '[DaffCart] Shipping Information Update Success Action',
  CartShippingInformationUpdateFailureAction = '[DaffCart] Shipping Information Update Failure Action',
  CartShippingInformationDeleteAction = '[DaffCart] Shipping Information Remove Action',
  CartShippingInformationDeleteSuccessAction = '[DaffCart] Shipping Information Remove Success Action',
  CartShippingInformationDeleteFailureAction = '[DaffCart] Shipping Information Remove Failure Action',
}

export class DaffCartShippingInformationLoad implements Action {
  readonly type = DaffCartShippingInformationActionTypes.CartShippingInformationLoadAction;
}

export class DaffCartShippingInformationLoadSuccess<T extends DaffCartShippingRate = DaffCartShippingRate> implements Action {
  readonly type = DaffCartShippingInformationActionTypes.CartShippingInformationLoadSuccessAction;

  constructor(public payload: T) {}
}

export class DaffCartShippingInformationLoadFailure implements Action {
  readonly type = DaffCartShippingInformationActionTypes.CartShippingInformationLoadFailureAction;

  constructor(public payload: DaffStateError) {}
}

export class DaffCartShippingInformationUpdate<T extends DaffCartShippingRate = DaffCartShippingRate> implements Action {
  readonly type = DaffCartShippingInformationActionTypes.CartShippingInformationUpdateAction;

  constructor(public payload: Partial<T>) {}
}

export class DaffCartShippingInformationUpdateSuccess<T extends DaffCart = DaffCart> implements Action {
  readonly type = DaffCartShippingInformationActionTypes.CartShippingInformationUpdateSuccessAction;

  constructor(public payload: Partial<T>) {}
}

export class DaffCartShippingInformationUpdateFailure implements Action {
  readonly type = DaffCartShippingInformationActionTypes.CartShippingInformationUpdateFailureAction;

  constructor(public payload: DaffStateError) {}
}

export class DaffCartShippingInformationDelete<T extends DaffCartShippingRate = DaffCartShippingRate> implements Action {
  readonly type = DaffCartShippingInformationActionTypes.CartShippingInformationDeleteAction;

  constructor(public id?: T['id']) {}
}

export class DaffCartShippingInformationDeleteSuccess<T extends DaffCart = DaffCart> implements Action {
  readonly type = DaffCartShippingInformationActionTypes.CartShippingInformationDeleteSuccessAction;

  constructor(public payload: Partial<T>) {}
}

export class DaffCartShippingInformationDeleteFailure implements Action {
  readonly type = DaffCartShippingInformationActionTypes.CartShippingInformationDeleteFailureAction;

  constructor(public payload: DaffStateError) {}
}

export type DaffCartShippingInformationActions<
  T extends DaffCartShippingRate = DaffCartShippingRate,
  V extends DaffCart = DaffCart
> =
  | DaffCartShippingInformationLoad
  | DaffCartShippingInformationLoadSuccess<T>
  | DaffCartShippingInformationLoadFailure
  | DaffCartShippingInformationUpdate<T>
  | DaffCartShippingInformationUpdateSuccess<V>
  | DaffCartShippingInformationUpdateFailure
  | DaffCartShippingInformationDelete<T>
  | DaffCartShippingInformationDeleteSuccess<V>
  | DaffCartShippingInformationDeleteFailure
