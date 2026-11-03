import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';
import { combineReducers } from '@ngrx/store';

import { daffProductProvideMetaReducers } from '@daffodil/product/state';
import {
  daffProductConfigurableProvideExtraReducers,
  provideDaffProductConfigurableState,
} from '@daffodil/product-configurable/state';
import { provideDaffSearchProductState } from '@daffodil/search-product/state';

import { daffSearchProductConfigurableEnsureChildrenMetaReducer } from './reducers/ensure-children.meta-reducer';
import { daffSearchProductConfigurableReducers } from './reducers/public_api';

/**
 * Provides the search product configurable reducers into the configurable product and product states.
 * Includes {@link provideDaffSearchProductState} and {@link provideDaffProductConfigurableState}.
 */
export const provideDaffSearchProductConfigurableState = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffSearchProductState(),
  provideDaffProductConfigurableState(),
  daffProductConfigurableProvideExtraReducers(combineReducers(daffSearchProductConfigurableReducers)),
  daffProductProvideMetaReducers(daffSearchProductConfigurableEnsureChildrenMetaReducer),
]);
