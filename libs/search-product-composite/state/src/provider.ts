import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';
import { combineReducers } from '@ngrx/store';

import { daffProductProvideMetaReducers } from '@daffodil/product/state';
import {
  daffProductCompositeProvideExtraReducers,
  provideDaffProductCompositeState,
} from '@daffodil/product-composite/state';
import { provideDaffSearchProductState } from '@daffodil/search-product/state';

import { daffSearchProductCompositeEnsureItemsMetaReducer } from './reducers/ensure-items.meta-reducer';
import { daffSearchProductCompositeReducers } from './reducers/public_api';

/**
 * Provides the search product composite reducers into the composite product and product states.
 * Includes {@link provideDaffSearchProductState} and {@link provideDaffProductCompositeState}.
 */
export const provideDaffSearchProductCompositeState = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffSearchProductState(),
  provideDaffProductCompositeState(),
  ...daffProductCompositeProvideExtraReducers(combineReducers(daffSearchProductCompositeReducers)),
  ...daffProductProvideMetaReducers(daffSearchProductCompositeEnsureItemsMetaReducer),
]);
