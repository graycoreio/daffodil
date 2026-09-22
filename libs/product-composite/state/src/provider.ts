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

import { daffCompositeProductReducers } from './reducers/composite-product-reducers';
import { daffProductCompositeEnsureItemsMetaReducer } from './reducers/ensure-items.meta-reducer';
import { DAFF_PRODUCT_COMPOSITE_EXTRA_REDUCERS } from './reducers/injection-tokens/extra.token';
import {
  DAFF_PRODUCT_COMPOSITE_REDUCERS,
  provideDaffProductCompositeReducersFactory,
} from './reducers/injection-tokens/reducers.token';
import { DAFF_COMPOSITE_PRODUCT_STORE_FEATURE_KEY } from './reducers/public_api';

/**
 * Provides the default reducers for composite product redux state.
 */
export const provideDaffProductCompositeState = (): EnvironmentProviders => makeEnvironmentProviders([
  provideState(DAFF_COMPOSITE_PRODUCT_STORE_FEATURE_KEY, DAFF_PRODUCT_COMPOSITE_REDUCERS),
  ...daffProductProvideMetaReducers(daffProductCompositeEnsureItemsMetaReducer),
  provideDaffProductCompositeReducersFactory(() => daffComposeReducers([
    combineReducers(daffCompositeProductReducers),
    ...inject(DAFF_PRODUCT_COMPOSITE_EXTRA_REDUCERS),
  ])),
]);
