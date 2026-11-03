import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';
import { provideEffects } from '@ngrx/effects';
import {
  combineReducers,
  provideState,
} from '@ngrx/store';

import {
  daffProductProvideExtraReducers,
  provideDaffProductState,
} from '@daffodil/product/state';
import {
  daffSearchProvideExtraReducers,
  provideDaffSearchPageState,
  provideDaffSearchState,
} from '@daffodil/search/state';

import { DaffSearchProductCollectionEffects } from './effects/collection.effects';
import {
  DAFF_SEARCH_PRODUCT_STORE_FEATURE_KEY,
  daffSearchProductReducers,
  daffSearchProductCollectionSearchReducers,
  daffSearchProductProductReducers,
} from './reducers/public_api';

/**
 * Provides the search product feature state and injects the search product reducers into the search and product states.
 * Includes {@link provideDaffProductState} and {@link provideDaffSearchState}.
 */
export const provideDaffSearchProductStateCore = (): EnvironmentProviders => makeEnvironmentProviders([
  provideState(DAFF_SEARCH_PRODUCT_STORE_FEATURE_KEY, daffSearchProductReducers),
  provideDaffProductState(),
  provideDaffSearchState(),
  daffSearchProvideExtraReducers(combineReducers(daffSearchProductCollectionSearchReducers)),
  daffProductProvideExtraReducers(combineReducers(daffSearchProductProductReducers)),
]);

/**
 * Provides the search product state.
 * Includes {@link provideDaffProductState} and {@link provideDaffSearchState}.
 */
export const provideDaffSearchProductState = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffSearchProductStateCore(),
]);

/**
 * Provides the search product state and the search product page effects.
 * Includes {@link provideDaffProductState}, {@link provideDaffSearchState}, and {@link provideDaffSearchPageState}.
 */
export const provideDaffSearchProductPageState = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffSearchProductStateCore(),
  provideDaffSearchPageState(),
  provideEffects(DaffSearchProductCollectionEffects),
]);
