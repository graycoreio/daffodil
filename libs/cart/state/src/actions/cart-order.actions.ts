import { Action } from '@ngrx/store';

import {
  DaffCartPaymentMethod,
  DaffCartOrderResult,
  DaffCart,
} from '@daffodil/cart';
import {
  DaffFailureAction,
  DaffStateError,
} from '@daffodil/core/state';

import { DaffCartRetrievalActionTransformedInjection } from '../cart-retrieval/public_api';


/**
 * An enum for the cart order action types.
 */
export enum DaffCartOrderActionTypes {
  CartPlaceOrderAction = '[@daffodil/cart] Cart Place Order Action',
  CartPlaceOrderSuccessAction = '[@daffodil/cart] Cart Place Order Success Action',
  CartPlaceOrderFailureAction = '[@daffodil/cart] Cart Place Order Failure Action',
  CartPlaceOrderFailureFromOutOfStockProductAction = '[@daffodil/cart] Cart Place Order Failure From Out of Stock Product Action'
}

/**
 * Triggers the order placement for a cart.
 */
export class DaffCartPlaceOrder<T extends DaffCartPaymentMethod = DaffCartPaymentMethod> implements Action {
  readonly type = DaffCartOrderActionTypes.CartPlaceOrderAction;

  constructor(public payload?: T) {}
}

/**
 * Indicates the successful order placement for a cart.
 */
export class DaffCartPlaceOrderSuccess<T extends DaffCartOrderResult = DaffCartOrderResult> implements Action {
  readonly type = DaffCartOrderActionTypes.CartPlaceOrderSuccessAction;

  constructor(public payload: T) {}
}

/**
 * Indicates the failed order placement for a cart.
 */
export class DaffCartPlaceOrderFailure implements DaffFailureAction {
  readonly type = DaffCartOrderActionTypes.CartPlaceOrderFailureAction;

  constructor(public payload: DaffStateError[]) {}
}

/**
 * Indicates the failed order placement for a cart due to a product being out of stock.
 */
export class DaffCartPlaceOrderFailureFromOutOfStockProduct<T extends DaffCart = DaffCart> implements DaffFailureAction {
  readonly type = DaffCartOrderActionTypes.CartPlaceOrderFailureFromOutOfStockProductAction;

  constructor(public payload: DaffStateError[], public cart: T) {}
}

export const daffCartPlaceOrderFailureFromOutOfStockProductCartRetreivalInjection: DaffCartRetrievalActionTransformedInjection<DaffCartPlaceOrderFailureFromOutOfStockProduct<any>> = {
  type: DaffCartOrderActionTypes.CartPlaceOrderFailureFromOutOfStockProductAction,
  transform: <TCart extends DaffCart = DaffCart>(action: DaffCartPlaceOrderFailureFromOutOfStockProduct<TCart>) => action.cart,
};

/**
 * A union of all the cart order action classes.
 */
export type DaffCartOrderActions<
  T extends DaffCartOrderResult = DaffCartOrderResult,
  V extends DaffCart = DaffCart
> =
  | DaffCartPlaceOrder<V['payment']>
  | DaffCartPlaceOrderSuccess<T>
  | DaffCartPlaceOrderFailureFromOutOfStockProduct<V>
  | DaffCartPlaceOrderFailure;
