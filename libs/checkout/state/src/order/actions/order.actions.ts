import { Action } from '@ngrx/store';

import { DaffCart } from '@daffodil/cart';
import { DaffCartRetrievalActionTransformedInjection } from '@daffodil/cart/state';
import { DaffCheckoutOrderResult } from '@daffodil/checkout';
import {
  DaffFailureAction,
  DaffStateError,
} from '@daffodil/core/state';

/**
 * An enum for the checkout order action types.
 */
export enum DaffCheckoutOrderActionTypes {
  PlaceOrderAction = '[@daffodil/checkout] Place Order Action',
  PlaceOrderSuccessAction = '[@daffodil/checkout] Place Order Success Action',
  PlaceOrderFailureAction = '[@daffodil/checkout] Place Order Failure Action',
  PlaceOrderFailureFromOutOfStockProductAction = '[@daffodil/checkout] Place Order Failure From Out of Stock Product Action'
}

/**
 * Triggers the order placement for a checkout.
 */
export class DaffCheckoutPlaceOrder implements Action {
  readonly type = DaffCheckoutOrderActionTypes.PlaceOrderAction;
}

/**
 * Indicates the successful order placement for a checkout.
 */
export class DaffCheckoutPlaceOrderSuccess<T extends DaffCheckoutOrderResult = DaffCheckoutOrderResult> implements Action {
  readonly type = DaffCheckoutOrderActionTypes.PlaceOrderSuccessAction;

  constructor(public payload: T) {}
}

/**
 * Indicates the failed order placement for a checkout.
 */
export class DaffCheckoutPlaceOrderFailure implements DaffFailureAction {
  readonly type = DaffCheckoutOrderActionTypes.PlaceOrderFailureAction;

  constructor(public payload: DaffStateError[]) {}
}

/**
 * Indicates the failed order placement for a checkout due to a product being out of stock.
 */
export class DaffCheckoutPlaceOrderFailureFromOutOfStockProduct<T extends DaffCart = DaffCart> implements DaffFailureAction {
  readonly type = DaffCheckoutOrderActionTypes.PlaceOrderFailureFromOutOfStockProductAction;

  constructor(public payload: DaffStateError[], public cart: T) {}
}

export const daffCheckoutPlaceOrderFailureFromOutOfStockProductCheckoutRetreivalInjection: DaffCartRetrievalActionTransformedInjection<DaffCheckoutPlaceOrderFailureFromOutOfStockProduct<any>> = {
  type: DaffCheckoutOrderActionTypes.PlaceOrderFailureFromOutOfStockProductAction,
  transform: <TCheckout extends DaffCart = DaffCart>(action: DaffCheckoutPlaceOrderFailureFromOutOfStockProduct<TCheckout>) => action.cart,
};

/**
 * A union of all the cart order action classes.
 */
export type DaffCheckoutOrderActions<
  T extends DaffCheckoutOrderResult = DaffCheckoutOrderResult,
  V extends DaffCart = DaffCart
> =
  | DaffCheckoutPlaceOrder
  | DaffCheckoutPlaceOrderSuccess<T>
  | DaffCheckoutPlaceOrderFailureFromOutOfStockProduct<V>
  | DaffCheckoutPlaceOrderFailure;
