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

import { DAFF_AUTHORIZENET_PAYMENT_KIND } from '@daffodil/authorizenet';
import { DaffAuthorizeNetPaymentDriver } from '@daffodil/authorizenet/driver';
import { daffComposeReducers } from '@daffodil/core/state';
import {
  daffPaymentProvideAvailableProcessors,
  daffPaymentProvideExtraReducers,
  daffPaymentReducerFactory,
  provideDaffPaymentState,
} from '@daffodil/payment/state';

import { DaffAuthorizeNetActionTypes } from './actions/authorizenet.actions';
import {
  DaffAuthorizeNetStateConfig,
  daffAuthorizeNetStateDefaultConfig,
  provideDaffAuthorizeNetStateConfig,
} from './config/public_api';
import { DaffAuthorizeNetEffects } from './effects/authorize-net.effects';
import { daffAuthorizeNetReducer } from './reducers/authorize-net/authorize-net.reducer';
import { DAFF_AUTHORIZENET_STORE_FEATURE_KEY } from './reducers/authorizenet-store-feature-key';
import { DAFF_AUTHORIZE_NET_EXTRA_REDUCERS } from './reducers/token/extra.token';
import {
  DAFF_AUTHORIZE_NET_REDUCERS,
  provideDaffAuthorizeNetReducersFactory,
} from './reducers/token/reducers.token';

/**
 * Provides the `@daffodil/authorizenet/state` feature state and effects.
 * The passed config is merged over {@link daffAuthorizeNetStateDefaultConfig}.
 */
export const provideDaffAuthorizeNetState = (config: Partial<DaffAuthorizeNetStateConfig> = {}): EnvironmentProviders => makeEnvironmentProviders([
  provideState(DAFF_AUTHORIZENET_STORE_FEATURE_KEY, DAFF_AUTHORIZE_NET_REDUCERS),
  provideEffects(DaffAuthorizeNetEffects),
  provideDaffAuthorizeNetStateConfig({
    ...daffAuthorizeNetStateDefaultConfig,
    ...config,
  }),
  provideDaffAuthorizeNetReducersFactory(() => daffComposeReducers([
    combineReducers({
      authorizeNet: daffAuthorizeNetReducer,
    }),
    ...inject(DAFF_AUTHORIZE_NET_EXTRA_REDUCERS),
  ])),
]);

/**
 * Registers Authorize.Net as an available payment processor with `@daffodil/payment/state`.
 * Includes {@link provideDaffPaymentState}.
 */
export const provideDaffAuthorizeNetPaymentState = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffPaymentState(),
  daffPaymentProvideAvailableProcessors({
    kind: DAFF_AUTHORIZENET_PAYMENT_KIND,
    action: DaffAuthorizeNetActionTypes.ApplyPaymentAction,
    driver: DaffAuthorizeNetPaymentDriver,
  }),
  ...daffPaymentProvideExtraReducers(combineReducers({
    payment: daffPaymentReducerFactory([DaffAuthorizeNetActionTypes.ApplyPaymentAction]),
  })),
]);
