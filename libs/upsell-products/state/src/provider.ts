import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';
import { provideState } from '@ngrx/store';

import { daffProductProvideMetaReducers } from '@daffodil/product/state';

import {
  DAFF_UPSELL_PRODUCTS_STORE_FEATURE_KEY,
  daffUpsellProductsDedupeMetaReducer,
  daffUpsellProductsReducers,
} from './reducers/public_api';

/**
 * Provides the default reducers for the upsell product redux state.
 */
export const provideDaffUpsellProductsState = (): EnvironmentProviders => makeEnvironmentProviders([
  provideState(DAFF_UPSELL_PRODUCTS_STORE_FEATURE_KEY, daffUpsellProductsReducers),
  daffProductProvideMetaReducers(daffUpsellProductsDedupeMetaReducer),
]);
