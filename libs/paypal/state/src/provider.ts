import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';
import { provideEffects } from '@ngrx/effects';
import {
  combineReducers,
  provideState,
} from '@ngrx/store';

import { daffComposeReducers } from '@daffodil/core/state';
import {
  DaffPaymentActions,
  daffPaymentProvideAvailableProcessors,
  daffPaymentProvideExtraReducers,
  daffPaymentReducerFactory,
  DaffPaymentReducerState,
  provideDaffPaymentState,
} from '@daffodil/payment/state';
import { DAFF_PAYPAL_PAYMENT_KIND } from '@daffodil/paypal';
import { DaffPaypalExpressPaymentDriver } from '@daffodil/paypal/driver';

import {
  DaffPaypalActions,
  DaffPaypalActionTypes,
} from './actions/paypal.actions';
import { DaffPaypalEffects } from './effects/paypal.effects';
import { daffPaypalPaymentReducer } from './reducers/payment/reducer';
import { daffPaypalReducers } from './reducers/paypal-reducers';
import { DAFF_PAYPAL_STORE_FEATURE_KEY } from './reducers/paypal-store-feature-key';

/**
 * Provides the `@daffodil/paypal/state` feature state and effects.
 */
export const provideDaffPaypalState = (): EnvironmentProviders => makeEnvironmentProviders([
  provideState(DAFF_PAYPAL_STORE_FEATURE_KEY, daffPaypalReducers),
  provideEffects(DaffPaypalEffects),
]);

/**
 * Registers paypal as an available payment processor with `@daffodil/payment/state`.
 * Includes {@link provideDaffPaymentState}.
 */
export const provideDaffPaypalPaymentState = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffPaymentState(),
  ...daffPaymentProvideAvailableProcessors({
    kind: DAFF_PAYPAL_PAYMENT_KIND,
    driver: DaffPaypalExpressPaymentDriver,
    action: DaffPaypalActionTypes.ApplyPaymentAction,
  }),
  ...daffPaymentProvideExtraReducers(combineReducers({
    payment: daffComposeReducers<DaffPaymentReducerState, DaffPaypalActions | DaffPaymentActions>([daffPaymentReducerFactory([DaffPaypalActionTypes.ApplyPaymentAction]), daffPaypalPaymentReducer]),
  })),
]);
