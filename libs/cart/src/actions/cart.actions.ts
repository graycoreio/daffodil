import { Action } from '@ngrx/store';

import { DaffCart } from '../models/cart';

export enum DaffCartActionTypes {
  CartLoadAction = '[DaffCart] Cart Load Action',
  CartLoadSuccessAction = '[DaffCart] Cart Load Success Action',
  CartLoadFailureAction = '[DaffCart] Cart Load Failure Action',
  CartCreateAction = '[DaffCart] Cart Create Action',
  CartCreateSuccessAction = '[DaffCart] Cart Create Success Action',
  CartCreateFailureAction = '[DaffCart] Cart Create Failure Action',
  AddToCartAction = '[DaffCart] Cart Add To Cart Action',
  AddToCartSuccessAction = '[DaffCart] Cart Add to Cart Success Action',
  AddToCartFailureAction = '[DaffCart] Cart Add to Cart Failure Action',
  CartClearAction = '[DaffCart] Cart Reset Action',
  CartClearSuccessAction = '[DaffCart] Cart Reset Success Action',
  CartClearFailureAction = '[DaffCart] Cart Reset Failure Action'
}

export class DaffCartLoad implements Action {
  readonly type = DaffCartActionTypes.CartLoadAction;
}

export class DaffCartLoadSuccess<T extends DaffCart> implements Action {
  readonly type = DaffCartActionTypes.CartLoadSuccessAction;

  constructor(public payload: T) {}
}

export class DaffCartLoadFailure implements Action {
  readonly type = DaffCartActionTypes.CartLoadFailureAction;

  constructor(public payload: string) {}
}

export class DaffCartCreate implements Action {
  readonly type = DaffCartActionTypes.CartCreateAction;
}

export class DaffCartCreateSuccess<T extends DaffCart> implements Action {
  readonly type = DaffCartActionTypes.CartCreateSuccessAction;

  constructor(public payload: {id: T['id']}) {}
}

export class DaffCartCreateFailure implements Action {
  readonly type = DaffCartActionTypes.CartCreateFailureAction;

  constructor(public payload: string) {}
}

export class DaffAddToCart implements Action {
  readonly type = DaffCartActionTypes.AddToCartAction;

  constructor(public payload: {productId: string, qty: number}) {}
}

export class DaffAddToCartSuccess implements Action {
  readonly type = DaffCartActionTypes.AddToCartSuccessAction;

  constructor(public payload: DaffCart) {}
}

export class DaffAddToCartFailure implements Action {
  readonly type = DaffCartActionTypes.AddToCartFailureAction;

  constructor(public payload: string) {}
}

export class DaffCartClear implements Action {
  readonly type = DaffCartActionTypes.CartClearAction;
}

export class DaffCartClearSuccess<T extends DaffCart> implements Action {
  readonly type = DaffCartActionTypes.CartClearSuccessAction;

  constructor(public payload: Partial<T>) {}
}

export class DaffCartClearFailure implements Action {
  readonly type = DaffCartActionTypes.CartClearFailureAction;

  constructor(public payload: string) {}
}

export type DaffCartActions<T extends DaffCart> =
  | DaffCartLoad
  | DaffCartLoadSuccess<T>
  | DaffCartLoadFailure
  | DaffCartCreate
  | DaffCartCreateSuccess<T>
  | DaffCartCreateFailure
  | DaffAddToCart
  | DaffAddToCartSuccess
  | DaffAddToCartFailure
  | DaffCartClear
  | DaffCartClearSuccess<T>
  | DaffCartClearFailure;
