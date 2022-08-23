import { daffReviewsProductEntitiesReducer } from './product-review-entities/product-entities.reducer';
import { daffReviewsCollectionReducer } from './product-reviews-collection/reducer';
import { daffProductPageReviewsReducer } from './product-reviews/reducer';

/**
 * Returns state values from all reviews related reducers.
 */
export const daffReviewsReducers = {
  productReviewEntities: daffReviewsProductEntitiesReducer,
  productReviews: daffProductPageReviewsReducer,
  productReviewsCollection: daffReviewsCollectionReducer,
};
