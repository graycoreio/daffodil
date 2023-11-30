import { EntityState } from '@ngrx/entity';
import { Action } from '@ngrx/store';

import { DaffCart } from '@daffodil/cart';

import {
  DaffCartRetrievalActionInjection,
  daffCartRetrievalGetResponse,
} from '../../cart-retrieval/public_api';
import {
  DaffCartItemStateEnum,
  DaffStatefulCartItem,
} from '../../models/stateful-cart-item';
import { daffCartItemEntitiesAdapter } from './cart-item-entities-reducer-adapter';

/**
 * Reducer function factory that updates cart item entities according to a list of passed cart retrieval actions.
 * See {@link DaffCartRetrievalActionInjection}.
 */
export function daffCartItemEntitiesRetrievalActionsReducerFactory<
  T extends DaffStatefulCartItem = DaffStatefulCartItem,
  V extends DaffCart = DaffCart,
>(retrievalActions: DaffCartRetrievalActionInjection[]) {
  return (
    state = daffCartItemEntitiesAdapter<T>().getInitialState(),
    action: Action,
  ): EntityState<T> => {
    const adapter = daffCartItemEntitiesAdapter<T>();
    const cart = daffCartRetrievalGetResponse<V>(action, retrievalActions);

    return cart?.items
      ? adapter.setAll(cart.items.map((item: T) => ({
        ...item,
        daffState: item.daffState || state.entities[item.id]?.daffState || DaffCartItemStateEnum.Default,
      })), state)
      : state;
  };
}
