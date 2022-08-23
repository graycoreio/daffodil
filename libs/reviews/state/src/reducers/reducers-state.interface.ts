import { EntityState } from '@ngrx/entity';

import { DaffProductReview } from '@daffodil/reviews';

import { DaffReviewsCollectionReducerState } from './product-reviews-collection/state.interface';
import { DaffProductPageReviewsReducerState } from './product-reviews/state.interface';
import { DAFF_REVIEWS_STORE_FEATURE_KEY } from './store-feature-key';

/**
 * Interface for the redux store of the product feature area.
 */
export interface DaffReviewsReducersState<T extends DaffProductReview = DaffProductReview> {
  productReviewEntities: EntityState<T>;
  productReviews: DaffProductPageReviewsReducerState;
  productReviewsCollection: DaffReviewsCollectionReducerState;
}

export interface DaffReviewsStateRootSlice<T extends DaffProductReview = DaffProductReview> {
  [DAFF_REVIEWS_STORE_FEATURE_KEY]: DaffReviewsReducersState<T>;
}
