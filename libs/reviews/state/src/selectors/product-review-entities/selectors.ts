import { EntityState } from '@ngrx/entity';
import {
  createSelector,
  MemoizedSelector,
  defaultMemoize,
} from '@ngrx/store';

import { daffSubtract } from '@daffodil/core';
import { DaffProductReview } from '@daffodil/reviews';

import { daffProductReviewEntitiesAdapter } from '../../reducers/product-review-entities/product-entities-reducer-adapter';
import {
  DaffReviewsReducersState,
  DaffReviewsStateRootSlice,
} from '../../reducers/reducers-state.interface';
import { getDaffReviewsFeatureSelector } from '../feature.selector';

/**
 * An interface for selectors related to product entities and prices for simple products.
 */
export interface DaffProductReviewEntitiesMemoizedSelectors<T extends DaffProductReview = DaffProductReview> {
  /**
   * Selects the ngrx entities state for products.
   */
  selectProductReviewEntitiesState: MemoizedSelector<DaffReviewsStateRootSlice<T>, EntityState<T>>;
  /**
   * Selects all ids for products in state.
   */
  selectProductReviewIds: MemoizedSelector<DaffReviewsStateRootSlice<T>, EntityState<T>['ids']>;
  /**
   * Selects the ngrx entities for all products in state.
   */
  selectProductReviewEntities: MemoizedSelector<DaffReviewsStateRootSlice<T>, EntityState<T>['entities']>;
  /**
   * Selects all products in state as an array.
   */
  selectAllProductReviews: MemoizedSelector<DaffReviewsStateRootSlice<T>, T[]>;
  /**
   * Selects the total number of products in state.
   */
  selectProductReviewTotal: MemoizedSelector<DaffReviewsStateRootSlice<T>, number>;
  /**
   * Selects a product by id.
   *
   * @param productId the id of the product.
   */
  selectProductReview: (productId: T['id']) => MemoizedSelector<DaffReviewsStateRootSlice<T>, T>;
}

const createProductReviewEntitiesSelectors = <T extends DaffProductReview = DaffProductReview>(): DaffProductReviewEntitiesMemoizedSelectors<T> => {
  const {
    selectReviewsState,
  } = getDaffReviewsFeatureSelector<T>();
  const adapterSelectors = daffProductReviewEntitiesAdapter<T>().getSelectors();

  const selectProductReviewEntitiesState = createSelector(
    selectReviewsState,
    (state: DaffReviewsReducersState<T>) => state.productReviewEntities,
  );

  const selectProductReviewIds = createSelector(
    selectProductReviewEntitiesState,
    adapterSelectors.selectIds,
  );

  const selectProductReviewEntities = createSelector(
    selectProductReviewEntitiesState,
    adapterSelectors.selectEntities,
  );

  const selectAllProductReviews = createSelector(
    selectProductReviewEntitiesState,
    adapterSelectors.selectAll,
  );

  const selectProductReviewTotal = createSelector(
    selectProductReviewEntitiesState,
    adapterSelectors.selectTotal,
  );

  const selectProductReview = defaultMemoize((productId: T['id']) => createSelector(
    selectProductReviewEntities,
    productReviews => productReviews[productId],
  )).memoized;

  return {
    selectProductReviewEntitiesState,
    selectProductReviewIds,
    selectProductReviewEntities,
    selectAllProductReviews,
    selectProductReviewTotal,
    selectProductReview,
  };
};

/**
 * A function that returns all selectors related to product review entities.
 */
export const getDaffProductReviewEntitiesSelectors = (() => {
  let cache;
  return <T extends DaffProductReview = DaffProductReview>(): DaffProductReviewEntitiesMemoizedSelectors<T> => cache = cache
    ? cache
    : createProductReviewEntitiesSelectors<T>();
})();
