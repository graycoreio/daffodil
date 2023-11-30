import { Action } from '@ngrx/store';

import { DaffCart } from '@daffodil/cart';

/**
 * Represents an action that loads a portion of the cart.
 */
export interface DaffCartRetrievalAction<T extends DaffCart = DaffCart> extends Action {
  readonly payload: Partial<T>;
}

/**
 * Represents an injection of a retrieval action that implements the {@link DaffCartRetrievalAction} interface
 * and therefore does not need transformation.
 * If the injected action needs transformation, use {@link DaffCartRetrievalActionTransformedInjection}
 */
export interface DaffCartRetrievalActionDirectInjection<T extends DaffCartRetrievalAction = DaffCartRetrievalAction> {
  /**
   * The action type.
   */
  type: T['type'];
}

/**
 * Represents an injection of a retrieval action that doesn't implement the {@link DaffCartRetrievalAction} interface.
 * Contains a way to get the cart from the action.
 */
export interface DaffCartRetrievalActionTransformedInjection<T extends Action = Action> {
  /**
   * The action type.
   */
  type: T['type'];

  /**
   * A function that gets the retrieved cart from the action.
   */
  transform: <TCart extends DaffCart = DaffCart>(action: T) => Partial<TCart>;
}

/**
 * Represents an injection of a cart retrieval action.
 * These actions are typically dispatched when an operation that mutates or loads the cart completes.
 * Actions provided to {@link DAFF_CART_RETRIEVAL_ACTIONS} are natively understood by Daffodil reducers and will automatically
 * populate the appropriate pieces of state when they are dispatched.
 */
export type DaffCartRetrievalActionInjection = DaffCartRetrievalActionDirectInjection | DaffCartRetrievalActionTransformedInjection;
