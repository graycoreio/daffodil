import { Action } from '@ngrx/store';

import {
  DaffCart,
  DaffCartItemInput,
} from '@daffodil/cart';
import {
  DaffFailureAction,
  DaffStateError,
} from '@daffodil/core/state';

import { DaffCartRetrievalAction } from '../cart-retrieval/public_api';
import { DaffStatefulCartItem } from '../models/public_api';

/**
 * An enum for the cart item action types.
 */
export enum DaffCartItemActionTypes {
  CartItemListAction = '[@daffodil/cart] Cart Items List Action',
  CartItemListSuccessAction = '[@daffodil/cart] Cart Items List Success Action',
  CartItemListFailureAction = '[@daffodil/cart] Cart Items List Failure Action',
  CartItemLoadAction = '[@daffodil/cart] Cart Item Load Action',
  CartItemLoadSuccessAction = '[@daffodil/cart] Cart Item Load Success Action',
  CartItemLoadFailureAction = '[@daffodil/cart] Cart Item Load Failure Action',
  CartItemUpdateAction = '[@daffodil/cart] Cart Item Update Action',
  CartItemUpdateSuccessAction = '[@daffodil/cart] Cart Item Update Success Action',
  CartItemUpdateFailureAction = '[@daffodil/cart] Cart Item Update Failure Action',
  CartItemAddAction = '[@daffodil/cart] Cart Item Add Action',
  CartItemAddSuccessAction = '[@daffodil/cart] Cart Item Add Success Action',
  CartItemAddFailureAction = '[@daffodil/cart] Cart Item Add Failure Action',
  CartItemDeleteAction = '[@daffodil/cart] Cart Item Remove Action',
  CartItemDeleteSuccessAction = '[@daffodil/cart] Cart Item Remove Success Action',
  CartItemDeleteFailureAction = '[@daffodil/cart] Cart Item Remove Failure Action',
  CartItemDeleteOutOfStockAction = '[@daffodil/cart] Cart Item Delete Out Of Stock Action',
  CartItemDeleteOutOfStockSuccessAction = '[@daffodil/cart] Cart Item Delete Out Of Stock Success Action',
  CartItemDeleteOutOfStockFailureAction = '[@daffodil/cart] Cart Item Delete Out Of Stock Failure Action',
  CartItemStateResetAction = '[@daffodil/cart] Cart Item State Reset Action'
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
export class DaffCartItemListFailure implements DaffFailureAction {
  readonly type = DaffCartItemActionTypes.CartItemListFailureAction;

  constructor(public payload: DaffStateError[]) {}
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

  constructor(public payload: DaffStateError[], public itemId: T['id']) {}
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

  constructor(public payload: DaffStateError[], public itemId: T['id']) {}
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
export class DaffCartItemAddSuccess<T extends DaffCart = DaffCart> implements DaffCartRetrievalAction<T> {
  readonly type = DaffCartItemActionTypes.CartItemAddSuccessAction;

  constructor(public payload: Partial<T>) {}
}

/**
 * Indicates the failed addition of a product to the cart.
 */
export class DaffCartItemAddFailure implements DaffFailureAction {
  readonly type = DaffCartItemActionTypes.CartItemAddFailureAction;

  constructor(public payload: DaffStateError[]) {}
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

  constructor(public payload: DaffStateError[], public itemId: T['id']) {}
}

/**
 * Triggers the deletion of all out of stock cart items.
 */
export class DaffCartItemDeleteOutOfStock implements Action {
  readonly type = DaffCartItemActionTypes.CartItemDeleteOutOfStockAction;
}

/**
 * Indicates the successful deletion of all out of stock cart items.
 */
export class DaffCartItemDeleteOutOfStockSuccess<T extends DaffCart = DaffCart> implements Action {
  readonly type = DaffCartItemActionTypes.CartItemDeleteOutOfStockSuccessAction;

  constructor(public payload: Partial<T>) {}
}

/**
 * Indicates the failed deletion of all out of stock cart items.
 */
export class DaffCartItemDeleteOutOfStockFailure implements DaffFailureAction {
  readonly type = DaffCartItemActionTypes.CartItemDeleteOutOfStockFailureAction;

  constructor(public payload: DaffStateError[]) {}
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
  | DaffCartItemDeleteOutOfStock
  | DaffCartItemDeleteOutOfStockSuccess<V>
  | DaffCartItemDeleteOutOfStockFailure
  | DaffCartItemStateReset;
