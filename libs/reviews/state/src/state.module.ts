import {
  inject,
  NgModule,
} from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import {
  combineReducers,
  StoreModule,
} from '@ngrx/store';

import { daffComposeReducers } from '@daffodil/core/state';
import { DaffProductStateModule } from '@daffodil/product/state';

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
 * A module that provides the default reducers and effects for the reviews redux state.
 */
@NgModule({
  imports: [
    DaffProductStateModule,
    StoreModule.forFeature(DAFF_REVIEWS_STORE_FEATURE_KEY, DAFF_REVIEWS_REDUCERS, DAFF_REVIEWS_STORE_CONFIG),
    EffectsModule.forFeature([
      DaffProductPageReviewsEffects,
      DaffProductReviewCollectionEffects,
    ]),
  ],
  providers: [
    provideDaffReviewsReducersFactory(() => daffComposeReducers([
      combineReducers(daffReviewsReducers),
      ...inject(DAFF_REVIEWS_EXTRA_REDUCERS),
    ])),
  ],
})
export class DaffReviewsStateModule { }
