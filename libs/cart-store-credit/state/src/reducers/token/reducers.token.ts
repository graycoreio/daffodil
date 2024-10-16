import { inject } from '@angular/core';
import {
  ActionReducer,
  combineReducers,
} from '@ngrx/store';

import { DaffCartWithStoreCredit } from '@daffodil/cart-store-credit';
import { createSingleInjectionToken } from '@daffodil/core';
import { daffComposeReducers } from '@daffodil/core/state';
// these unused imports are a workaround

import { DAFF_CART_STORE_CREDIT_EXTRA_REDUCERS } from './extra.token';
import { DaffCartStoreCreditReducersState } from '../reducers.interface';
import { daffCartStoreCreditReducer } from '../store-credit/public_api';

export const {
  /**
   * An internal token to hold the Daffodil cart reducers.
   * Includes the extra and standard reducers.
   *
   * @docs-private
   */
  token: DAFF_CART_STORE_CREDIT_REDUCERS,
  /**
   * Provider function for {@link DAFF_CART_STORE_CREDIT_REDUCERS}.
   */
  provider: provideDaffCartStoreCreditReducers,
} = createSingleInjectionToken<ActionReducer<DaffCartStoreCreditReducersState>>(
  'DAFF_CART_STORE_CREDIT_REDUCERS',
  {
    providedIn: 'any',
    factory: () => daffComposeReducers([
      combineReducers({
        storeCredit: daffCartStoreCreditReducer,
      }),
      ...inject(DAFF_CART_STORE_CREDIT_EXTRA_REDUCERS),
    ]),
  },
);
