import {
  EnvironmentProviders,
  inject,
  makeEnvironmentProviders,
} from '@angular/core';
import {
  combineReducers,
  provideState,
} from '@ngrx/store';

import { daffComposeReducers } from '@daffodil/core/state';

import { DAFF_PAYMENT_AVAILABLE_PROCESSORS } from './injection-tokens/public_api';
import { daffPaymentReducerFactory } from './reducers/payment/reducer';
import { DAFF_PAYMENT_STORE_FEATURE_KEY } from './reducers/public_api';
import { DAFF_PAYMENT_EXTRA_REDUCERS } from './reducers/token/extra.token';
import {
  DAFF_PAYMENT_REDUCERS,
  provideDaffPaymentReducersFactory,
} from './reducers/token/reducers.token';

/**
 * Provides the `@daffodil/payment/state` feature state.
 */
export const provideDaffPaymentState = (): EnvironmentProviders => makeEnvironmentProviders([
  provideState(DAFF_PAYMENT_STORE_FEATURE_KEY, DAFF_PAYMENT_REDUCERS),
  provideDaffPaymentReducersFactory(() => daffComposeReducers([
    combineReducers({
      payment: daffPaymentReducerFactory(inject(DAFF_PAYMENT_AVAILABLE_PROCESSORS).map(({ action }) => action)),
    }),
    ...inject(DAFF_PAYMENT_EXTRA_REDUCERS),
  ])),
]);
