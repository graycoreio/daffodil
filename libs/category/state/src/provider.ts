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
  daffProductProvideExtraReducers,
  provideDaffProductState,
} from '@daffodil/product/state';

import { DaffCategoryPageMetadataEffects } from './effects/category-page-metadata.effects';
import { DaffCategoryPageEffects } from './effects/category-page.effects';
import { DaffCategoryEffects } from './effects/category.effects';
import { daffCategoryReducers } from './reducers/category-reducers';
import { daffCategoryProductReducers } from './reducers/product-reducers';
import { DAFF_CATEGORY_STORE_FEATURE_KEY } from './reducers/public_api';
import { DAFF_CATEGORY_EXTRA_REDUCERS } from './reducers/token/extra.token';
import {
  DAFF_CATEGORY_REDUCERS,
  provideDaffCategoryReducersFactory,
} from './reducers/token/reducers.token';

/**
 * Provides the default reducers and effects for the category redux state.
 * Includes {@link provideDaffProductState}.
 */
export const provideDaffCategoryState = (): EnvironmentProviders => makeEnvironmentProviders([
  provideState(DAFF_CATEGORY_STORE_FEATURE_KEY, DAFF_CATEGORY_REDUCERS),
  provideEffects(DaffCategoryEffects, DaffCategoryPageEffects, DaffCategoryPageMetadataEffects),
  provideDaffProductState(),
  provideDaffCategoryReducersFactory(() => daffComposeReducers([
    combineReducers(daffCategoryReducers),
    ...inject(DAFF_CATEGORY_EXTRA_REDUCERS),
  ])),
]);

/**
 * Provides injectable reducers into product state.
 * Includes {@link provideDaffProductState}.
 */
export const provideDaffCategoryProductState = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffProductState(),
  ...daffProductProvideExtraReducers(
    combineReducers(daffCategoryProductReducers),
  ),
]);
