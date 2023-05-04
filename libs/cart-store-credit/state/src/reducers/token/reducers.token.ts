import {
  inject,
  InjectionToken,
} from '@angular/core';
import {
  ActionReducer,
  combineReducers,
} from '@ngrx/store';

import { DaffCartWithStoreCredit } from '@daffodil/cart-store-credit';
import { daffComposeReducers } from '@daffodil/core/state';
// these unused imports are a workaround

import { DaffCartStoreCreditReducersState } from '../reducers.interface';
import { daffCustomerStoreCreditReducer } from '../store-credit/public_api';
import { DAFF_CART_STORE_CREDIT_EXTRA_REDUCERS } from './extra.token';

/**
 * An internal token to hold the Daffodil cart reducers.
 * Includes the extra and standard reducers.
 *
 * @docs-private
 */
export const DAFF_CART_STORE_CREDIT_REDUCERS = new InjectionToken<ActionReducer<DaffCartStoreCreditReducersState>>(
  'DAFF_CART_STORE_CREDIT_REDUCERS',
  {
    providedIn: 'any',
    factory: () => daffComposeReducers([
      combineReducers({
        storeCredit: daffCustomerStoreCreditReducer,
      }),
      ...inject(DAFF_CART_STORE_CREDIT_EXTRA_REDUCERS),
    ]),
  },
);
