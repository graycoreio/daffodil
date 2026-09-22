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

import {
  DaffSearchStateConfig,
  provideDaffSearchStateConfig,
  DAFF_SEARCH_STATE_CONFIG_DEFAULT,
} from './config/public_api';
import { DaffSearchIncrementalEffects } from './effects/incremental.effects';
import { DaffSearchPageEffects } from './effects/page.effects';
import { DAFF_SEARCH_STORE_FEATURE_KEY } from './reducers/public_api';
import { daffSearchReducers } from './reducers/reducers';
import { DAFF_SEARCH_EXTRA_REDUCERS } from './reducers/token/extra.token';
import {
  DAFF_SEARCH_REDUCERS,
  provideDaffSearchReducersFactory,
} from './reducers/token/reducers.token';

/**
 * Creates the search feature store.
 */
export const provideDaffSearchState = (): EnvironmentProviders => makeEnvironmentProviders([
  provideState(DAFF_SEARCH_STORE_FEATURE_KEY, DAFF_SEARCH_REDUCERS),
  provideDaffSearchReducersFactory(() => daffComposeReducers([
    combineReducers(daffSearchReducers),
    ...inject(DAFF_SEARCH_EXTRA_REDUCERS),
  ])),
]);

/**
 * Provides the search incremental effects and the search state config.
 * Includes {@link provideDaffSearchState}.
 */
export const provideDaffSearchIncrementalState = (config: DaffSearchStateConfig = DAFF_SEARCH_STATE_CONFIG_DEFAULT): EnvironmentProviders => makeEnvironmentProviders([
  provideEffects(DaffSearchIncrementalEffects),
  provideDaffSearchState(),
  provideDaffSearchStateConfig(config),
]);

/**
 * Provides the search page effects.
 * Includes {@link provideDaffSearchState}.
 */
export const provideDaffSearchPageState = (): EnvironmentProviders => makeEnvironmentProviders([
  provideEffects(DaffSearchPageEffects),
  provideDaffSearchState(),
]);
