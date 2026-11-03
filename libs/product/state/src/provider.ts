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

import { DaffProductGridEffects } from './effects/product-grid.effects';
import { DaffProductPageEffects } from './effects/product-page.effects';
import { DaffProductEffects } from './effects/product.effects';
import { DAFF_PRODUCT_STORE_CONFIG } from './reducers/injection-tokens/config.token';
import { DAFF_PRODUCT_EXTRA_REDUCERS } from './reducers/injection-tokens/extra.token';
import {
  DAFF_PRODUCT_REDUCERS,
  provideDaffProductReducersFactory,
} from './reducers/injection-tokens/reducers.token';
import { daffProductReducers } from './reducers/product-reducers';
import { DAFF_PRODUCT_STORE_FEATURE_KEY } from './reducers/public_api';

/**
 * Provides the default reducers and effects for the product redux state.
 */
export const provideDaffProductState = (): EnvironmentProviders => makeEnvironmentProviders([
  provideState(DAFF_PRODUCT_STORE_FEATURE_KEY, DAFF_PRODUCT_REDUCERS, DAFF_PRODUCT_STORE_CONFIG),
  provideEffects(
    DaffProductGridEffects,
    DaffProductEffects,
    DaffProductPageEffects,
  ),
  provideDaffProductReducersFactory(() => daffComposeReducers([
    combineReducers(daffProductReducers),
    ...inject(DAFF_PRODUCT_EXTRA_REDUCERS),
  ])),
]);
