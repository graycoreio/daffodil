import {
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';

import { DaffStateError } from '@daffodil/core/state';
import { DaffProductReview } from '@daffodil/reviews';

import { DaffProductPageReviewsReducerState } from '../../reducers/product-reviews/state.interface';
import {
  DaffReviewsReducersState,
  DaffReviewsStateRootSlice,
} from '../../reducers/reducers-state.interface';
import { getDaffReviewsFeatureSelector } from '../feature.selector';
import { getDaffProductReviewsCollectionSelectors } from '../product-review-collection/selectors';
import { getDaffProductReviewEntitiesSelectors } from '../product-review-entities/selectors';

/**
 * An interface for selectors related to the current product page.
 */
export interface DaffProductPageReviewsMemoizedSelectors<T extends DaffProductReview = DaffProductReview> {
  /**
   * Selects the entire state object for the product page feature area.
   */
  selectProductPageReviewsState: MemoizedSelector<DaffReviewsStateRootSlice, DaffProductPageReviewsReducerState>;
  /**
   * Selects the loading state of the current product.
   */
  selectProductPageReviewsLoading: MemoizedSelector<DaffReviewsStateRootSlice, boolean>;
  /**
   * Selects the loading state of the current product.
   */
  selectProductPageReviewsErrors: MemoizedSelector<DaffReviewsStateRootSlice, DaffStateError[]>;
  /**
   * Selects the reviews for the current product page.
   */
  selectProductPageReviews: MemoizedSelector<DaffReviewsStateRootSlice, T[]>;
}

const createProductPageSelectors = <T extends DaffProductReview = DaffProductReview>(): DaffProductPageReviewsMemoizedSelectors => {

  const {
    selectReviewsState,
  } = getDaffReviewsFeatureSelector<T>();
  const {
    selectCollectionIds,
  } = getDaffProductReviewsCollectionSelectors();
  const {
    selectProductReview,
    selectProductReviewEntities,
  } = getDaffProductReviewEntitiesSelectors<T>();

  const selectProductPageReviewsState = createSelector(
    selectReviewsState,
    (state: DaffReviewsReducersState<T>) => state.productReviews,
  );

  const selectProductPageReviewsLoading = createSelector(
    selectProductPageReviewsState,
    (state: DaffProductPageReviewsReducerState) => state.loading,
  );

  const selectProductPageReviewsErrors = createSelector(
    selectProductPageReviewsState,
    (state: DaffProductPageReviewsReducerState) => state.errors,
  );

  const selectProductPageReviews = createSelector(
    selectCollectionIds,
    selectProductReviewEntities,
    (ids, productReviews) => ids.map(id => selectProductReview(id).projector(productReviews)),
  );

  return {
    selectProductPageReviewsState,
    selectProductPageReviewsLoading,
    selectProductPageReviewsErrors,
    selectProductPageReviews,
  };
};

/**
 * A function that returns all selectors related to the product page.
 * Returns {@link DaffProductPageMemoizedSelectors}.
 */
export const getDaffProductPageReviewsSelectors = (() => {
  let cache;
  return <T extends DaffProductReview = DaffProductReview>(): DaffProductPageReviewsMemoizedSelectors<T> => cache = cache
    ? cache
    : createProductPageSelectors<T>();
})();
