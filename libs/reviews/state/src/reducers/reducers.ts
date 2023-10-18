import { ActionReducerMap } from '@ngrx/store';

import { daffReviewsProductEntitiesReducer } from './product-review-entities/product-entities.reducer';
import { daffProductPageReviewsReducer } from './product-reviews/reducer';
import { daffReviewsCollectionReducer } from './product-reviews-collection/reducer';
import { DaffReviewsReducersState } from './reducers-state.interface';

/**
 * Returns state values from all reviews related reducers.
 */
export const daffReviewsReducers: ActionReducerMap<DaffReviewsReducersState> = {
  productReviewEntities: daffReviewsProductEntitiesReducer,
  productReviews: daffProductPageReviewsReducer,
  productReviewsCollection: daffReviewsCollectionReducer,
};
