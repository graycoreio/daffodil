import {
  EnvironmentProviders,
  inject,
  makeEnvironmentProviders,
} from '@angular/core';
import { provideEffects } from '@ngrx/effects';
import {
  combineReducers,
  provideState,
} from '@ngrx/store';

import { daffComposeReducers } from '@daffodil/core/state';

import { DaffCustomerStoreCreditEffects } from './effects/store-credit.effects';
import { DAFF_CUSTOMER_STORE_CREDIT_STORE_FEATURE_KEY } from './reducers/public_api';
import { daffCustomerStoreCreditReducer } from './reducers/store-credit/public_api';
import { DAFF_CUSTOMER_STORE_CREDIT_EXTRA_REDUCERS } from './reducers/token/extra.token';
import {
  DAFF_CUSTOMER_STORE_CREDIT_REDUCERS,
  provideDaffCustomerStoreCreditReducersFactory,
} from './reducers/token/reducers.token';

/**
 * Provides the `@daffodil/customer-store-credit/state` feature state and effects.
 */
export const provideDaffCustomerStoreCreditState = (): EnvironmentProviders => makeEnvironmentProviders([
  provideState(DAFF_CUSTOMER_STORE_CREDIT_STORE_FEATURE_KEY, DAFF_CUSTOMER_STORE_CREDIT_REDUCERS),
  provideEffects(
    DaffCustomerStoreCreditEffects,
  ),
  provideDaffCustomerStoreCreditReducersFactory(() => daffComposeReducers([
    combineReducers({
      storeCredit: daffCustomerStoreCreditReducer,
    }),
    ...inject(DAFF_CUSTOMER_STORE_CREDIT_EXTRA_REDUCERS),
  ])),
]);
