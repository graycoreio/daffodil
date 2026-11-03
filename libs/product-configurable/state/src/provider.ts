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
import { daffProductProvideMetaReducers } from '@daffodil/product/state';

import { daffConfigurableProductReducers } from './reducers/configurable-product-reducers';
import { DAFF_CONFIGURABLE_PRODUCT_STORE_FEATURE_KEY } from './reducers/configurable-product-store-feature-key';
import { daffProductConfigurableEnsureChildrenMetaReducer } from './reducers/ensure-children.meta-reducer';
import { DAFF_PRODUCT_CONFIGURABLE_EXTRA_REDUCERS } from './reducers/injection-tokens/extra.token';
import {
  DAFF_PRODUCT_CONFIGURABLE_REDUCERS,
  provideDaffProductConfigurableReducersFactory,
} from './reducers/injection-tokens/reducers.token';

/**
 * Provides the default reducers for the configurable product redux state.
 */
export const provideDaffProductConfigurableState = (): EnvironmentProviders => makeEnvironmentProviders([
  provideState(DAFF_CONFIGURABLE_PRODUCT_STORE_FEATURE_KEY, DAFF_PRODUCT_CONFIGURABLE_REDUCERS),
  daffProductProvideMetaReducers(daffProductConfigurableEnsureChildrenMetaReducer),
  provideDaffProductConfigurableReducersFactory(() => daffComposeReducers([
    combineReducers(daffConfigurableProductReducers),
    ...inject(DAFF_PRODUCT_CONFIGURABLE_EXTRA_REDUCERS),
  ])),
]);
