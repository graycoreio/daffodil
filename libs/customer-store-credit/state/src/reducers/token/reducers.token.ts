import { inject } from '@angular/core';
import {
  ActionReducer,
  combineReducers,
} from '@ngrx/store';

import { createSingleInjectionToken } from '@daffodil/core';
import { daffComposeReducers } from '@daffodil/core/state';
// these unused imports are a workaround
import { DaffCustomerStoreCredit } from '@daffodil/customer-store-credit';

import { DAFF_CUSTOMER_STORE_CREDIT_EXTRA_REDUCERS } from './extra.token';
import { DaffCustomerStoreCreditReducersState } from '../reducers.interface';
import { daffCustomerStoreCreditReducer } from '../store-credit/public_api';

export const {
  /**
   * An internal token to hold the Daffodil customer reducers.
   * Includes the extra and standard reducers.
   *
   * @docs-private
   */
  token: DAFF_CUSTOMER_STORE_CREDIT_REDUCERS,
  provider: provideDaffCustomerStoreCreditReducers,
} = createSingleInjectionToken<ActionReducer<DaffCustomerStoreCreditReducersState>>(
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
