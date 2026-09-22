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
import { provideDaffProductState } from '@daffodil/product/state';

import { DaffProductReviewCollectionEffects } from './effects/product-page-review-collection.effects';
import { DaffProductPageReviewsEffects } from './effects/product-page-reviews.effects';
import { DAFF_REVIEWS_STORE_CONFIG } from './reducers/injection-tokens/config.token';
import { DAFF_REVIEWS_EXTRA_REDUCERS } from './reducers/injection-tokens/extra.token';
import {
  DAFF_REVIEWS_REDUCERS,
  provideDaffReviewsReducersFactory,
} from './reducers/injection-tokens/reducers.token';
import { DAFF_REVIEWS_STORE_FEATURE_KEY } from './reducers/public_api';
import { daffReviewsReducers } from './reducers/reducers';

/**
 * Provides the default reducers and effects for the reviews redux state.
 * Includes {@link provideDaffProductState}.
 */
export const provideDaffReviewsState = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffProductState(),
  provideState(DAFF_REVIEWS_STORE_FEATURE_KEY, DAFF_REVIEWS_REDUCERS, DAFF_REVIEWS_STORE_CONFIG),
  provideEffects(
    DaffProductPageReviewsEffects,
    DaffProductReviewCollectionEffects,
  ),
  provideDaffReviewsReducersFactory(() => daffComposeReducers([
    combineReducers(daffReviewsReducers),
    ...inject(DAFF_REVIEWS_EXTRA_REDUCERS),
  ])),
]);
