import {
  inject,
  InjectionToken,
} from '@angular/core';
import {
  ActionReducer,
  combineReducers,
} from '@ngrx/store';

import { daffComposeReducers } from '@daffodil/core/state';
// these unused imports are a workaround
import { DaffCustomerStoreCredit } from '@daffodil/customer-store-credit';

import { DAFF_CUSTOMER_STORE_CREDIT_EXTRA_REDUCERS } from './extra.token';
import { DaffCustomerStoreCreditReducersState } from '../reducers.interface';
import { daffCustomerStoreCreditReducer } from '../store-credit/public_api';

/**
 * An internal token to hold the Daffodil customer reducers.
 * Includes the extra and standard reducers.
 *
 * @docs-private
 */
export const DAFF_CUSTOMER_STORE_CREDIT_REDUCERS = new InjectionToken<ActionReducer<DaffCustomerStoreCreditReducersState>>(
  'DAFF_CUSTOMER_STORE_CREDIT_REDUCERS',
  {
    providedIn: 'any',
    factory: () => daffComposeReducers([
      combineReducers({
        storeCredit: daffCustomerStoreCreditReducer,
      }),
      ...inject(DAFF_CUSTOMER_STORE_CREDIT_EXTRA_REDUCERS),
    ]),
  },
);
