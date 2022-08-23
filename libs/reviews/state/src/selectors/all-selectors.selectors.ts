import { DaffProductReview } from '@daffodil/reviews';

import {
  DaffReviewsFeatureMemoizedSelector,
  getDaffReviewsFeatureSelector,
} from './feature.selector';
import {
  DaffProductReviewsCollectionMemoizedSelectors,
  getDaffProductReviewsCollectionSelectors,
} from './product-review-collection/selectors';
import {
  DaffProductReviewEntitiesMemoizedSelectors,
  getDaffProductReviewEntitiesSelectors,
} from './product-review-entities/selectors';
import {
  DaffProductPageReviewsMemoizedSelectors,
  getDaffProductPageReviewsSelectors,
} from './product-reviews/selectors';

/**
 * An interface for all selectors in the entire product feature area.
 */
export interface DaffReviewsAllSelectors<T extends DaffProductReview = DaffProductReview> extends
  DaffProductPageReviewsMemoizedSelectors<T>,
  DaffProductReviewEntitiesMemoizedSelectors<T>,
  DaffProductReviewsCollectionMemoizedSelectors,
  DaffReviewsFeatureMemoizedSelector<T>
{}

/**
 * A function that returns all selectors in the entire product feature area.
 * Returns {@link DaffReviewsAllSelectors}.
 */
export const getDaffReviewsSelectors = <T extends DaffProductReview = DaffProductReview>(): DaffReviewsAllSelectors<T> => ({
  ...getDaffProductPageReviewsSelectors<T>(),
  ...getDaffProductReviewEntitiesSelectors<T>(),
  ...getDaffProductReviewsCollectionSelectors(),
  ...getDaffReviewsFeatureSelector<T>(),
});
