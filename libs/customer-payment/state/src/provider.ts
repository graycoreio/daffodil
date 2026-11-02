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

import { DaffCustomerPaymentEffects } from './effects/payment.effects';
import { daffCustomerPaymentReducer } from './reducers/payment/public_api';
import { daffCustomerPaymentEntitiesReducer } from './reducers/payment-entities/public_api';
import { DAFF_CUSTOMER_PAYMENT_STORE_FEATURE_KEY } from './reducers/public_api';
import { DAFF_CUSTOMER_PAYMENT_EXTRA_REDUCERS } from './reducers/token/extra.token';
import {
  DAFF_CUSTOMER_PAYMENT_REDUCERS,
  provideDaffCustomerPaymentReducersFactory,
} from './reducers/token/reducers.token';

/**
 * Provides the `@daffodil/customer-payment/state` feature state and effects.
 */
export const provideDaffCustomerPaymentState = (): EnvironmentProviders => makeEnvironmentProviders([
  provideState(DAFF_CUSTOMER_PAYMENT_STORE_FEATURE_KEY, DAFF_CUSTOMER_PAYMENT_REDUCERS),
  provideEffects(DaffCustomerPaymentEffects),
  provideDaffCustomerPaymentReducersFactory(() => daffComposeReducers([
    combineReducers({
      payment: daffCustomerPaymentReducer,
      paymentEntities: daffCustomerPaymentEntitiesReducer,
    }),
    ...inject(DAFF_CUSTOMER_PAYMENT_EXTRA_REDUCERS),
  ])),
]);
