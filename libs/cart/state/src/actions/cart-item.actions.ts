import { Action } from '@ngrx/store';

import {
  DaffCart,
  DaffCartItemInput,
} from '@daffodil/cart';
import { DaffStateError } from '@daffodil/core/state';

import { DaffStatefulCartItem } from '../models/public_api';

/**
 * An enum for the cart item action types.
 */
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
  CartItemDeleteFailureAction = '[DaffCart] Cart Item Remove Failure Action',
  CartItemStateResetAction = '[DaffCart] Cart Item State Reset Action'
}

/**
 * Triggers the load of the cart's items.
 */
export class DaffCartItemList implements Action {
  readonly type = DaffCartItemActionTypes.CartItemListAction;
}

/**
 * Indicates the successful load of the cart's items.
 */
export class DaffCartItemListSuccess<T extends DaffStatefulCartItem = DaffStatefulCartItem> implements Action {
  readonly type = DaffCartItemActionTypes.CartItemListSuccessAction;

  constructor(public payload: T[]) {}
}

/**
 * Indicates the failed load of the cart's items.
 */
export class DaffCartItemListFailure implements Action {
  readonly type = DaffCartItemActionTypes.CartItemListFailureAction;

  constructor(public payload: DaffStateError) {}
}

/**
 * Triggers the load of a specific cart item.
 */
export class DaffCartItemLoad<T extends DaffStatefulCartItem = DaffStatefulCartItem> implements Action {
  readonly type = DaffCartItemActionTypes.CartItemLoadAction;

  constructor(public itemId: T['id']) {}
}

/**
 * Indicates the successful load of a specific cart item.
 */
export class DaffCartItemLoadSuccess<T extends DaffStatefulCartItem = DaffStatefulCartItem> implements Action {
  readonly type = DaffCartItemActionTypes.CartItemLoadSuccessAction;

  constructor(public payload: T) {}
}

/**
 * Indicates the failed load of a specific cart item.
 */
export class DaffCartItemLoadFailure<T extends DaffStatefulCartItem = DaffStatefulCartItem> implements Action {
  readonly type = DaffCartItemActionTypes.CartItemLoadFailureAction;

  constructor(public payload: DaffStateError, public itemId: T['id']) {}
}

/**
 * Triggers the update of a specific cart item.
 */
export class DaffCartItemUpdate<T extends DaffStatefulCartItem = DaffStatefulCartItem> implements Action {
  readonly type = DaffCartItemActionTypes.CartItemUpdateAction;

  constructor(public itemId: T['id'], public changes: Partial<T>) {}
}

/**
 * Indicates the successful update of a specific cart item.
 */
export class DaffCartItemUpdateSuccess<
  T extends DaffCart = DaffCart,
  V extends DaffStatefulCartItem = DaffStatefulCartItem
> implements Action {
  readonly type = DaffCartItemActionTypes.CartItemUpdateSuccessAction;

  constructor(public payload: Partial<T>, public itemId: V['id']) {}
}

/**
 * Indicates the failed update of a specific cart item.
 */
export class DaffCartItemUpdateFailure<T extends DaffStatefulCartItem = DaffStatefulCartItem> implements Action {
  readonly type = DaffCartItemActionTypes.CartItemUpdateFailureAction;

  constructor(public payload: DaffStateError, public itemId: T['id']) {}
}

/**
 * Triggers the addition of a product to the cart.
 */
export class DaffCartItemAdd<T extends DaffCartItemInput = DaffCartItemInput> implements Action {
  readonly type = DaffCartItemActionTypes.CartItemAddAction;

  constructor(public input: T) {}
}

/**
 * Indicates the successful addition of a product to the cart.
 */
export class DaffCartItemAddSuccess<T extends DaffCart = DaffCart> implements Action {
  readonly type = DaffCartItemActionTypes.CartItemAddSuccessAction;

  constructor(public payload: Partial<T>) {}
}

/**
 * Indicates the failed addition of a product to the cart.
 */
export class DaffCartItemAddFailure implements Action {
  readonly type = DaffCartItemActionTypes.CartItemAddFailureAction;

  constructor(public payload: DaffStateError) {}
}

/**
 * Triggers the deletion of a specific cart item.
 */
export class DaffCartItemDelete<T extends DaffStatefulCartItem = DaffStatefulCartItem> implements Action {
  readonly type = DaffCartItemActionTypes.CartItemDeleteAction;

  constructor(public itemId: T['id']) {}
}

/**
 * Indicates the successful deletion of a specific cart item.
 */
export class DaffCartItemDeleteSuccess<T extends DaffCart = DaffCart> implements Action {
  readonly type = DaffCartItemActionTypes.CartItemDeleteSuccessAction;

  constructor(public payload: Partial<T>) {}
}

/**
 * Indicates the failed deletion of a specific cart item.
 */
export class DaffCartItemDeleteFailure<T extends DaffStatefulCartItem = DaffStatefulCartItem> implements Action {
  readonly type = DaffCartItemActionTypes.CartItemDeleteFailureAction;

  constructor(public payload: DaffStateError, public itemId: T['id']) {}
}

/**
 * Resets cart item "new" or "updated" states to default.
 */
export class DaffCartItemStateReset implements Action {
	readonly type = DaffCartItemActionTypes.CartItemStateResetAction;
}

/**
 * A union of all the cart item action classes.
 */
export type DaffCartItemActions<
  T extends DaffStatefulCartItem = DaffStatefulCartItem,
  U extends DaffCartItemInput = DaffCartItemInput,
  V extends DaffCart = DaffCart
> =
  | DaffCartItemList
  | DaffCartItemListSuccess<T>
  | DaffCartItemListFailure
  | DaffCartItemLoad<T>
  | DaffCartItemLoadSuccess<T>
  | DaffCartItemLoadFailure<T>
  | DaffCartItemUpdate<T>
  | DaffCartItemUpdateSuccess<V, T>
  | DaffCartItemUpdateFailure<T>
  | DaffCartItemAdd<U>
  | DaffCartItemAddSuccess<V>
  | DaffCartItemAddFailure
  | DaffCartItemDelete<T>
  | DaffCartItemDeleteSuccess<V>
  | DaffCartItemDeleteFailure<T>
  | DaffCartItemStateReset;
