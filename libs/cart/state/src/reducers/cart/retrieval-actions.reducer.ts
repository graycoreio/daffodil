import {
  Action,
  ActionReducer,
} from '@ngrx/store';

import { DaffCart } from '@daffodil/cart';

import {
  DaffCartRetrievalActionInjection,
  daffCartRetrievalGetResponse,
} from '../../cart-retrieval/public_api';
import { daffCartReducerInitialState } from '../cart-initial-state';
import { DaffCartReducerState } from '../cart-state.interface';

/**
 * Reducer function factory that updates cart state according to a list of passed cart retrieval actions.
 * See {@link DaffCartRetrievalActionInjection}.
 */
export function daffCartRetrievalActionsReducerFactory<
  T extends DaffCart = DaffCart,
>(retrievalActions: DaffCartRetrievalActionInjection[]): ActionReducer<DaffCartReducerState<T>> {
  return (
    state = daffCartReducerInitialState,
    action: Action,
  ): DaffCartReducerState<T> => {
    const cart = daffCartRetrievalGetResponse<T>(action, retrievalActions);

    return cart
      ? {
        ...state,
        cart: {
          ...state.cart,
          ...cart,
        },
      }
      : state;
  };
}
