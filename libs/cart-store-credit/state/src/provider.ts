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

import { daffCartProvideExtraReducers } from '@daffodil/cart/state';
import { daffComposeReducers } from '@daffodil/core/state';

import { DaffCartStoreCreditEffects } from './effects/store-credit.effects';
import { daffCartStoreCreditCartReducers } from './reducers/cart-reducers';
import { daffCartStoreCreditReducer } from './reducers/store-credit/public_api';
import { DAFF_CART_STORE_CREDIT_STORE_FEATURE_KEY } from './reducers/store-feature-key';
import { DAFF_CART_STORE_CREDIT_EXTRA_REDUCERS } from './reducers/token/extra.token';
import {
  DAFF_CART_STORE_CREDIT_REDUCERS,
  provideDaffCartStoreCreditReducersFactory,
} from './reducers/token/reducers.token';

/**
 * Provides the `@daffodil/cart-store-credit/state` feature state and effects.
 */
export const provideDaffCartStoreCreditState = (): EnvironmentProviders => makeEnvironmentProviders([
  provideState(DAFF_CART_STORE_CREDIT_STORE_FEATURE_KEY, DAFF_CART_STORE_CREDIT_REDUCERS),
  provideEffects(
    DaffCartStoreCreditEffects,
  ),
  ...daffCartProvideExtraReducers(
    combineReducers(daffCartStoreCreditCartReducers),
  ),
  provideDaffCartStoreCreditReducersFactory(() => daffComposeReducers([
    combineReducers({
      storeCredit: daffCartStoreCreditReducer,
    }),
    ...inject(DAFF_CART_STORE_CREDIT_EXTRA_REDUCERS),
  ])),
]);
