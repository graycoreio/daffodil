import { inject } from '@angular/core';
import {
  ActionReducer,
  combineReducers,
} from '@ngrx/store';

// these unused imports are a workaround
import {
  DaffCart,
  DaffCartOrderResult,
} from '@daffodil/cart';
import { createSingleInjectionToken } from '@daffodil/core';
import {
  daffComposeReducers,
  daffIdentityReducer,
} from '@daffodil/core/state';

import { DAFF_CART_EXTRA_REDUCERS } from './extra.token';
import { DAFF_CART_RETRIEVAL_ACTIONS } from '../../cart-retrieval/public_api';
import { daffCartRetrievalActionsReducerFactory } from '../cart/retrieval-actions.reducer';
import { daffCartItemEntitiesRetrievalActionsReducerFactory } from '../cart-item-entities/retrieval-actions.reducer';
import { daffCartReducers } from '../cart-reducers';
import { DaffCartReducersState } from '../cart-reducers-state.interface';

export const {
  /**
   * An internal token to hold the Daffodil cart reducers.
   * Includes the extra and standard reducers.
   *
   * @docs-private
   */
  token: DAFF_CART_REDUCERS,
  provider: provideDaffCartReducers,
} = createSingleInjectionToken<ActionReducer<DaffCartReducersState>>(
  'DAFF_CART_REDUCERS',
  {
    factory: () => {
      const retrievalActions = inject(DAFF_CART_RETRIEVAL_ACTIONS);

      return daffComposeReducers([
        // daffodil reducers should run first, don't change this
        // TODO: enforce this somehow (meta-reducers?)
        combineReducers(daffCartReducers),
        //
        combineReducers({
          cart: daffCartRetrievalActionsReducerFactory(retrievalActions),
          cartItems: daffCartItemEntitiesRetrievalActionsReducerFactory(retrievalActions),
          order: daffIdentityReducer,
        }),
        ...inject(DAFF_CART_EXTRA_REDUCERS),
      ]);
    },
  },
);
