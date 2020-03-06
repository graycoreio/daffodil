import { Action } from '@ngrx/store';

import { DaffCart } from '../models/cart';
import { DaffCartItem } from '../models/cart-item';
import { DaffCartItemInput } from '../models/cart-item-input';

export enum DaffCartItemActionTypes {
  CartItemListAction = '[DaffCart] Cart Items List Action',
  CartItemListSuccessAction = '[DaffCart] Cart Items List Success Action',
  CartItemListFailureAction = '[DaffCart] Cart Items List Failure Action',
  CartItemLoadAction = '[DaffCart] Cart Item Load Action',
  CartItemLoadSuccessAction = '[DaffCart] Cart Item Load Success Action',
  CartItemLoadFailureAction = '[DaffCart] Cart Item Load Failure Action',
  CartItemUpdateAction = '[DaffCart] Cart Item Update Action',
  CartItemUpdateSuccessAction = '[DaffCart] Cart Item Update Success Action',
  CartItemUpdateFailureAction = '[DaffCart] Cart Item Update Failure Action',
  CartItemAddAction = '[DaffCart] Cart Item Add Action',
  CartItemAddSuccessAction = '[DaffCart] Cart Item Add Success Action',
  CartItemAddFailureAction = '[DaffCart] Cart Item Add Failure Action',
  CartItemDeleteAction = '[DaffCart] Cart Item Remove Action',
  CartItemDeleteSuccessAction = '[DaffCart] Cart Item Remove Success Action',
  CartItemDeleteFailureAction = '[DaffCart] Cart Item Remove Failure Action'
}

export class DaffCartItemList implements Action {
  readonly type = DaffCartItemActionTypes.CartItemListAction;
}

export class DaffCartItemListSuccess<T extends DaffCartItem> implements Action {
  readonly type = DaffCartItemActionTypes.CartItemListSuccessAction;

  constructor(public payload: T[]) {}
}

export class DaffCartItemListFailure implements Action {
  readonly type = DaffCartItemActionTypes.CartItemListFailureAction;

  constructor(public payload: string) {}
}

export class DaffCartItemLoad<T extends DaffCartItem> implements Action {
  readonly type = DaffCartItemActionTypes.CartItemLoadAction;

  constructor(public itemId: T['item_id']) {}
}

export class DaffCartItemLoadSuccess<T extends DaffCartItem> implements Action {
  readonly type = DaffCartItemActionTypes.CartItemLoadSuccessAction;

  constructor(public payload: T) {}
}

export class DaffCartItemLoadFailure implements Action {
  readonly type = DaffCartItemActionTypes.CartItemLoadFailureAction;

  constructor(public payload: string) {}
}

export class DaffCartItemUpdate<T extends DaffCartItem> implements Action {
  readonly type = DaffCartItemActionTypes.CartItemUpdateAction;

  constructor(public itemId: T['item_id'], public changes: Partial<T>) {}
}

export class DaffCartItemUpdateSuccess<T extends DaffCart> implements Action {
  readonly type = DaffCartItemActionTypes.CartItemUpdateSuccessAction;

  constructor(public payload: Partial<T>) {}
}

export class DaffCartItemUpdateFailure implements Action {
  readonly type = DaffCartItemActionTypes.CartItemUpdateFailureAction;

  constructor(public payload: string) {}
}

export class DaffCartItemAdd<T extends DaffCartItemInput> implements Action {
  readonly type = DaffCartItemActionTypes.CartItemAddAction;

  constructor(public input: T) {}
}

export class DaffCartItemAddSuccess<T extends DaffCart> implements Action {
  readonly type = DaffCartItemActionTypes.CartItemAddSuccessAction;

  constructor(public payload: Partial<T>) {}
}

export class DaffCartItemAddFailure implements Action {
  readonly type = DaffCartItemActionTypes.CartItemAddFailureAction;

  constructor(public payload: string) {}
}

export class DaffCartItemDelete<T extends DaffCartItem> implements Action {
  readonly type = DaffCartItemActionTypes.CartItemDeleteAction;

  constructor(public itemId: T['item_id']) {}
}

export class DaffCartItemDeleteSuccess<T extends DaffCart> implements Action {
  readonly type = DaffCartItemActionTypes.CartItemDeleteSuccessAction;

  constructor(public payload: Partial<T>) {}
}

export class DaffCartItemDeleteFailure implements Action {
  readonly type = DaffCartItemActionTypes.CartItemDeleteFailureAction;

  constructor(public payload: string) {}
}

export type DaffCartItemActions<
  T extends DaffCartItem,
  U extends DaffCartItemInput,
  V extends DaffCart
> =
  | DaffCartItemList
  | DaffCartItemListSuccess<T>
  | DaffCartItemListFailure
  | DaffCartItemLoad<T>
  | DaffCartItemLoadSuccess<T>
  | DaffCartItemLoadFailure
  | DaffCartItemUpdate<T>
  | DaffCartItemUpdateSuccess<V>
  | DaffCartItemUpdateFailure
  | DaffCartItemAdd<U>
  | DaffCartItemAddSuccess<V>
  | DaffCartItemAddFailure
  | DaffCartItemDelete<T>
  | DaffCartItemDeleteSuccess<V>
  | DaffCartItemDeleteFailure;
