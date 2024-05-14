import { Action } from '@ngrx/store';

import { DaffCart } from '@daffodil/cart';
import { DaffOperationEntityState } from '@daffodil/core/state';

import { daffCartItemEntitiesAdapter } from './adapter';
import {
  DaffCartRetrievalActionInjection,
  daffCartRetrievalGetResponse,
} from '../../cart-retrieval/public_api';

/**
 * Reducer function factory that updates cart item entities according to a list of passed cart retrieval actions.
 * See {@link DaffCartRetrievalActionInjection}.
 */
export function daffCartItemEntitiesRetrievalActionsReducerFactory<T extends DaffCart = DaffCart>(retrievalActions: DaffCartRetrievalActionInjection[]) {
  return (
    state = daffCartItemEntitiesAdapter<T['items'][number]>().getInitialState(),
    action: Action,
  ): DaffOperationEntityState<T['items'][number]> => {
    const adapter = daffCartItemEntitiesAdapter<T['items'][number]>();
    const cart = daffCartRetrievalGetResponse<T>(action, retrievalActions);

    return cart?.items
      ? adapter.list(cart.items, state)
      : state;
  };
}
