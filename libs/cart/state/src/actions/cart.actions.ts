import { Action } from '@ngrx/store';

import { DaffCart } from '@daffodil/cart';
import {
  DaffFailureAction,
  DaffStateError,
} from '@daffodil/core/state';
import { DaffProduct } from '@daffodil/product';

import { DaffCartRetrievalAction } from '../cart-retrieval/public_api';

/**
 * An enum for the cart action types.
 */
export enum DaffCartActionTypes {
  CartStorageFailureAction = '[@daffodil/cart] Cart Storage Failure Action',
  CartLoadAction = '[@daffodil/cart] Cart Load Action',
  CartLoadSuccessAction = '[@daffodil/cart] Cart Load Success Action',
  CartLoadPartialSuccessAction = '[@daffodil/cart] Cart Load Partial Success Action',
  CartLoadFailureAction = '[@daffodil/cart] Cart Load Failure Action',
  CartCreateAction = '[@daffodil/cart] Cart Create Action',
  CartCreateSuccessAction = '[@daffodil/cart] Cart Create Success Action',
  CartCreateFailureAction = '[@daffodil/cart] Cart Create Failure Action',
  AddToCartAction = '[@daffodil/cart] Cart Add To Cart Action',
  AddToCartSuccessAction = '[@daffodil/cart] Cart Add to Cart Success Action',
  AddToCartFailureAction = '[@daffodil/cart] Cart Add to Cart Failure Action',
  CartClearAction = '[@daffodil/cart] Cart Reset Action',
  CartClearSuccessAction = '[@daffodil/cart] Cart Reset Success Action',
  CartClearFailureAction = '[@daffodil/cart] Cart Reset Failure Action',
  ResolveCartAction = '[@daffodil/cart] Resolve Cart Action',
  ResolveCartSuccessAction = '[@daffodil/cart] Resolve Cart Success Action',
  ResolveCartPartialSuccessAction = '[@daffodil/cart] Resolve Cart Partial Success Action',
  ResolveCartServerSideAction = '[@daffodil/cart] Resolve Cart Server Side Action',
  ResolveCartFailureAction = '[@daffodil/cart] Resolve Cart Failure Action',
}

/**
 * Indicates that an error occured while either reading or writing the cart ID to or from storage.
 */
export class DaffCartStorageFailure implements DaffFailureAction {
  readonly type = DaffCartActionTypes.CartStorageFailureAction;

  constructor(public payload: DaffStateError[]) {}
}

/**
 * Triggers the load of the cart.
 */
export class DaffCartLoad implements Action {
  readonly type = DaffCartActionTypes.CartLoadAction;
}

/**
 * Indicates the successful load of the cart.
 */
export class DaffCartLoadSuccess<T extends DaffCart = DaffCart> implements DaffCartRetrievalAction<T> {
  readonly type = DaffCartActionTypes.CartLoadSuccessAction;

  constructor(public payload: T) {}
}

/**
 * An action that indicates a user's cart is loaded but recoverable errors occurred.
 * There should be enough data to render the cart
 * but the user should probably be shown error messages as well.
 * A common example is some cart items being out of stock.
 */
export class DaffCartLoadPartialSuccess<T extends DaffCart = DaffCart> implements DaffCartRetrievalAction<T> {
  readonly type = DaffCartActionTypes.CartLoadPartialSuccessAction;

  constructor(public payload: T, public errors: DaffStateError[]) {}
}

/**
 * Indicates the failed load of the cart.
 */
export class DaffCartLoadFailure implements DaffFailureAction {
  readonly type = DaffCartActionTypes.CartLoadFailureAction;

  constructor(public payload: DaffStateError[]) {}
}

/**
 * Triggers the creation of a new cart.
 */
export class DaffCartCreate implements Action {
  readonly type = DaffCartActionTypes.CartCreateAction;
}

/**
 * Indicates the successful creation of a new cart.
 */
export class DaffCartCreateSuccess<T extends DaffCart = DaffCart> implements Action {
  readonly type = DaffCartActionTypes.CartCreateSuccessAction;

  constructor(public payload: Pick<T, 'id'>) {}
}

/**
 * Indicates the failed creation of a new cart.
 */
export class DaffCartCreateFailure implements DaffFailureAction {
  readonly type = DaffCartActionTypes.CartCreateFailureAction;

  constructor(public payload: DaffStateError[]) {}
}

// TODO: deprecate
export class DaffAddToCart implements Action {
  readonly type = DaffCartActionTypes.AddToCartAction;

  constructor(public payload: {productId: DaffProduct['id']; qty: number}) {}
}

// TODO: deprecate
export class DaffAddToCartSuccess implements Action {
  readonly type = DaffCartActionTypes.AddToCartSuccessAction;

  constructor(public payload: DaffCart) {}
}

// TODO: deprecate
export class DaffAddToCartFailure implements DaffFailureAction {
  readonly type = DaffCartActionTypes.AddToCartFailureAction;

  constructor(public payload: DaffStateError[]) {}
}

/**
 * Triggers the removal of all items from the cart.
 */
export class DaffCartClear implements Action {
  readonly type = DaffCartActionTypes.CartClearAction;
}

/**
 * Indicates the successful removal of all items from the cart.
 */
export class DaffCartClearSuccess<T extends DaffCart = DaffCart> implements DaffCartRetrievalAction<T> {
  readonly type = DaffCartActionTypes.CartClearSuccessAction;

  constructor(public payload: Partial<T>) {}
}

/**
 * Indicates the failed removal of all items from the cart.
 */
export class DaffCartClearFailure implements DaffFailureAction {
  readonly type = DaffCartActionTypes.CartClearFailureAction;

  constructor(public payload: DaffStateError[]) {}
}

/**
 * Triggers cart resolution.
 * Will attempt to load a cart if it exists and create a cart otherwise.
 */
export class DaffResolveCart implements Action {
  readonly type = DaffCartActionTypes.ResolveCartAction;
}

/**
 * An action that indicates a user's cart is resolved successfully.
 */
export class DaffResolveCartSuccess<T extends DaffCart = DaffCart> implements DaffCartRetrievalAction<T> {
  readonly type = DaffCartActionTypes.ResolveCartSuccessAction;

  constructor(public payload: T) {}
}

/**
 * An action that indicates a user's cart is resolved but recoverable errors occurred.
 * There should be enough data to render the cart
 * but the user should probably be shown error messages as well.
 * A common example is some cart items being out of stock.
 */
export class DaffResolveCartPartialSuccess<T extends DaffCart = DaffCart> implements DaffCartRetrievalAction<T> {
  readonly type = DaffCartActionTypes.ResolveCartPartialSuccessAction;

  constructor(public payload: T, public errors: DaffStateError[]) {}
}

/**
 * An action that indicates that a cart failed to resolve.
 */
export class DaffResolveCartFailure implements DaffFailureAction {
  readonly type = DaffCartActionTypes.ResolveCartFailureAction;

  constructor(public payload: DaffStateError[]) {}
}

/**
 * An action indicating that the cart resolution terminated as a result
 * of an attempted resolution on the server.
 */
export class DaffResolveCartServerSide implements Action {
  readonly type = DaffCartActionTypes.ResolveCartServerSideAction;

  constructor(public payload: DaffStateError[]) {}
}

/**
 * A union of all the cart action classes.
 */
export type DaffCartActions<T extends DaffCart = DaffCart> =
  | DaffCartStorageFailure
  | DaffCartLoad
  | DaffCartLoadSuccess<T>
  | DaffCartLoadPartialSuccess<T>
  | DaffCartLoadFailure
  | DaffCartCreate
  | DaffCartCreateSuccess<T>
  | DaffCartCreateFailure
  | DaffAddToCart
  | DaffAddToCartSuccess
  | DaffAddToCartFailure
  | DaffCartClear
  | DaffCartClearSuccess<T>
  | DaffCartClearFailure
  | DaffResolveCart
  | DaffResolveCartSuccess<T>
  | DaffResolveCartPartialSuccess<T>
  | DaffResolveCartServerSide
  | DaffResolveCartFailure;
