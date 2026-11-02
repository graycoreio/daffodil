import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';
import { provideState } from '@ngrx/store';

import { daffProductProvideMetaReducers } from '@daffodil/product/state';

import {
  DAFF_RELATED_PRODUCTS_STORE_FEATURE_KEY,
  daffRelatedProductsDedupeMetaReducer,
  daffRelatedProductsReducers,
} from './reducers/public_api';

/**
 * Provides the default reducers for the related product redux state.
 */
export const provideDaffRelatedProductsState = (): EnvironmentProviders => makeEnvironmentProviders([
  provideState(DAFF_RELATED_PRODUCTS_STORE_FEATURE_KEY, daffRelatedProductsReducers),
  daffProductProvideMetaReducers(daffRelatedProductsDedupeMetaReducer),
]);
