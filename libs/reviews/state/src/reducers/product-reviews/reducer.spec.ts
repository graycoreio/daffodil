import { TestBed } from '@angular/core/testing';

import { daffIdentifiableArrayToDict } from '@daffodil/core';
import {
  DaffProductReview,
  DaffProductReviews,
} from '@daffodil/reviews';
import {
  DaffReviewsProductList,
  DaffReviewsProductListSuccess,
  DaffReviewsProductListFailure,
  DaffProductPageReviewsReducerState,
  DaffReviewsCollectionChangePageSize,
  DaffReviewsCollectionChangeCurrentPage,
  DaffReviewsCollectionChangeSortingOption,
  DaffReviewsCollectionChangeFilter,
} from '@daffodil/reviews/state';
import { DaffProductReviewFactory } from '@daffodil/reviews/testing';

import {
  daffProductReviewsReducerInitialState,
  daffProductPageReviewsReducer,
} from './reducer';

describe('@daffodil/reviews/state | daffProductPageReviewsReducer', () => {
  let reviewFactory: DaffProductReviewFactory;
  let review: DaffProductReview;
  let productId: string;

  beforeEach(() => {
    reviewFactory = TestBed.inject(DaffProductReviewFactory);

    review = reviewFactory.create();
    productId = review.id;
  });

  describe('when an unknown action is triggered', () => {

    it('should return the current state', () => {
      const action = <any>{};

      const result = daffProductPageReviewsReducer(daffProductReviewsReducerInitialState, action);

      expect(result).toBe(daffProductReviewsReducerInitialState);
    });
  });

  describe('when ReviewsProductListAction is triggered', () => {
    let result: DaffProductPageReviewsReducerState;

    beforeEach(() => {
      const productLoadAction: DaffReviewsProductList = new DaffReviewsProductList(productId);

      result = daffProductPageReviewsReducer(daffProductReviewsReducerInitialState, productLoadAction);
    });

    it('sets loading state to true', () => {
      expect(result.loading).toEqual(true);
    });
  });

  describe('when ChangePageSizeAction is triggered', () => {
    let result: DaffProductPageReviewsReducerState;

    beforeEach(() => {
      const action = new DaffReviewsCollectionChangePageSize(0);

      result = daffProductPageReviewsReducer(daffProductReviewsReducerInitialState, action);
    });

    it('sets loading state to true', () => {
      expect(result.loading).toEqual(true);
    });
  });

  describe('when ChangeCurrentPageAction is triggered', () => {
    let result: DaffProductPageReviewsReducerState;

    beforeEach(() => {
      const action = new DaffReviewsCollectionChangeCurrentPage(0);

      result = daffProductPageReviewsReducer(daffProductReviewsReducerInitialState, action);
    });

    it('sets loading state to true', () => {
      expect(result.loading).toEqual(true);
    });
  });

  describe('when ChangeSortingAction is triggered', () => {
    let result: DaffProductPageReviewsReducerState;

    beforeEach(() => {
      const action = new DaffReviewsCollectionChangeSortingOption(null);

      result = daffProductPageReviewsReducer(daffProductReviewsReducerInitialState, action);
    });

    it('sets loading state to true', () => {
      expect(result.loading).toEqual(true);
    });
  });

  describe('when ChangeFilterAction is triggered', () => {
    let result: DaffProductPageReviewsReducerState;

    beforeEach(() => {
      const action = new DaffReviewsCollectionChangeFilter(null);

      result = daffProductPageReviewsReducer(daffProductReviewsReducerInitialState, action);
    });

    it('sets loading state to true', () => {
      expect(result.loading).toEqual(true);
    });
  });

  describe('when ReviewsProductListSuccessAction is triggered', () => {

    let result: DaffProductPageReviewsReducerState;
    let state: DaffProductPageReviewsReducerState;

    beforeEach(() => {
      state = {
        ...daffProductReviewsReducerInitialState,
        loading: true,
      };

      const productLoadSuccess = new DaffReviewsProductListSuccess({
        metadata: <DaffProductReviews['metadata']>{},
        data: daffIdentifiableArrayToDict([review]),
      });
      result = daffProductPageReviewsReducer(state, productLoadSuccess);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });
  });

  describe('when ReviewsProductListFailureAction is triggered', () => {

    const error = {
      code: 'error code',
      message: 'error message',
    };
    let result: DaffProductPageReviewsReducerState;
    let state: DaffProductPageReviewsReducerState;

    beforeEach(() => {
      state = {
        ...daffProductReviewsReducerInitialState,
        loading: true,
        errors: [{ code: 'firstErrorCode', message: 'firstErrorMessage' }],
      };

      const productLoadFailure = new DaffReviewsProductListFailure(error);

      result = daffProductPageReviewsReducer(state, productLoadFailure);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('adds an error to state.errors', () => {
      expect(result.errors.length).toEqual(2);
    });
  });
});
