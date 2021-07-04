import {
  inject,
  InjectionToken,
} from '@angular/core';
import {
  ActionReducer,
  combineReducers,
} from '@ngrx/store';

// these unused imports are a workaround
import {
  DaffCart,
  DaffCartOrderResult,
} from '@daffodil/cart';
import { daffCreateMetaReducer } from '@daffodil/core/state';

import { daffCartReducers } from '../cart-reducers';
import { DaffCartReducersState } from '../cart-reducers-state.interface';
import { DAFF_CART_AFTER_REDUCERS } from './after.token';
import { DAFF_CART_BEFORE_REDUCERS } from './before.token';

/**
 * An internal token to hold the Daffodil cart reducers.
 * Includes the before, after, and standard reducers.
 *
 * @docs-private
 */
export const DAFF_CART_REDUCERS = new InjectionToken<ActionReducer<DaffCartReducersState>>(
  'DAFF_CART_REDUCERS',
  {
    factory: () => daffCreateMetaReducer([
      ...inject(DAFF_CART_BEFORE_REDUCERS),
      combineReducers(daffCartReducers),
      ...inject(DAFF_CART_AFTER_REDUCERS),
    ]),
  },
);
