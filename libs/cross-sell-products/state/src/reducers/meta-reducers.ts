import {
  Action,
  ActionReducer,
  MetaReducer,
} from '@ngrx/store';

import {
  DaffCartReducersState,
  DaffCartRetrievalActionInjection,
  daffCartRetrievalGetResponse,
} from '@daffodil/cart/state';
import { DaffCartWithCrossSellProducts } from '@daffodil/cross-sell-products';
import {
  daffProductEntitiesAdapter,
  DaffProductReducersState,
} from '@daffodil/product/state';


/**
 * A meta reducer that ingests the cross sell products on the cart
 * and them removes them from the payload so that they are not
 * duplicated in state.
 */
export function daffCrossSellProductEntitiesMetaReducerFactory<T extends DaffProductReducersState = DaffProductReducersState>(retrievalActions: Array<DaffCartRetrievalActionInjection>): MetaReducer<T, Action<string>> {
  return (reducer: ActionReducer<T, Action<string>>): ActionReducer<T, Action<string>> => (state: T, action: Action<string>) => {
    const cart = daffCartRetrievalGetResponse<DaffCartWithCrossSellProducts>(action, retrievalActions);
    if (cart && cart.crossSells) {
      const adapter = daffProductEntitiesAdapter();
      return reducer(
        {
          ...state,
          products: adapter.upsertMany(cart.crossSells, state.products),
        },
        action,
      );
    } else {
      return reducer(state, action);
    }
  };
}

/**
 * A meta reducer that removes cross sells from the cart so that they are not
 * duplicated in state.
 */
export function daffCrossSellProductsCartMetaReducerFactory<T extends DaffCartReducersState = DaffCartReducersState>(retrievalActions: Array<DaffCartRetrievalActionInjection>): MetaReducer<T, Action<string>> {
  return (reducer: ActionReducer<T, Action<string>>): ActionReducer<T, Action<string>> => (state: T, action: Action<string>) => {
    const cart = daffCartRetrievalGetResponse<DaffCartWithCrossSellProducts>(action, retrievalActions);
    if (cart && cart.crossSells) {
      delete cart.crossSells;
      return reducer(
        state,
        action,
      );
    } else {
      return reducer(state, action);
    }
  };
}
