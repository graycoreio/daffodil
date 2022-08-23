import { TestBed } from '@angular/core/testing';

import {
  daffArrayToDict,
  DaffCollectionRequest,
} from '@daffodil/core';
import { DaffCollectionRequestFactory } from '@daffodil/core/testing';
import {
  DaffProductReview,
  DaffProductReviews,
} from '@daffodil/reviews';
import {
  DaffReviewsProductList,
  DaffReviewsProductListSuccess,
  DaffReviewsProductListFailure,
  DaffReviewsCollectionReducerState,
} from '@daffodil/reviews/state';
import { DaffProductReviewsFactory } from '@daffodil/reviews/testing';

import {
  daffReviewsCollectionReducerInitialState,
  daffReviewsCollectionReducer,
} from './reducer';

describe('@daffodil/reviews/state | daffReviewsCollectionReducer', () => {
  let collectionRequestFactory: DaffCollectionRequestFactory;
  let productReviewsFactory: DaffProductReviewsFactory;
  let mockProductReviews: DaffProductReviews;
  let mockProductReview: DaffProductReview;
  let mockCollectionRequest: DaffCollectionRequest;
  let productId: string;

  beforeEach(() => {
    productReviewsFactory = TestBed.inject(DaffProductReviewsFactory);
    collectionRequestFactory = TestBed.inject(DaffCollectionRequestFactory);

    mockProductReviews = productReviewsFactory.create();
    mockCollectionRequest = collectionRequestFactory.create();
    mockProductReview = Object.values(mockProductReviews.data)[0];
  });

  describe('when an unknown action is triggered', () => {
    it('should return the current state', () => {
      const action = <any>{};

      const result = daffReviewsCollectionReducer(daffReviewsCollectionReducerInitialState, action);

      expect(result).toBe(daffReviewsCollectionReducerInitialState);
    });
  });

  describe('when ReviewsProductListAction is triggered', () => {
    let result: DaffReviewsCollectionReducerState;

    beforeEach(() => {
      const productLoadAction: DaffReviewsProductList = new DaffReviewsProductList(productId, mockCollectionRequest);

      result = daffReviewsCollectionReducer(daffReviewsCollectionReducerInitialState, productLoadAction);
    });

    it('stores the request', () => {
      expect(result.currentPage).toEqual(mockCollectionRequest.currentPage);
      expect(result.appliedSortDirection).toEqual(mockCollectionRequest.appliedSortDirection);
      expect(result.appliedSortOption).toEqual(mockCollectionRequest.appliedSortOption);
      expect(result.pageSize).toEqual(mockCollectionRequest.pageSize);
    });
  });

  describe('when ReviewsProductListSuccessAction is triggered', () => {
    let result: DaffReviewsCollectionReducerState;
    let state: DaffReviewsCollectionReducerState;

    beforeEach(() => {
      state = {
        ...daffReviewsCollectionReducerInitialState,
      };

      const productLoadSuccess = new DaffReviewsProductListSuccess(mockProductReviews);
      result = daffReviewsCollectionReducer(state, productLoadSuccess);
    });

    it('sets metadata', () => {
      expect(result.ids).toEqual(mockProductReviews.metadata.ids);
      expect(result.count).toEqual(mockProductReviews.metadata.count);
      expect(result.currentPage).toEqual(mockProductReviews.metadata.currentPage);
      expect(result.pageSize).toEqual(mockProductReviews.metadata.pageSize);
      expect(result.sortOptions).toEqual(mockProductReviews.metadata.sortOptions);
      expect(result.totalPages).toEqual(mockProductReviews.metadata.totalPages);
      expect(result.appliedSortOption).toEqual(mockProductReviews.metadata.appliedSortOption);
      expect(result.appliedSortDirection).toEqual(mockProductReviews.metadata.appliedSortDirection);
    });
  });

  describe('when ReviewsProductListFailureAction is triggered', () => {

    const error = {
      code: 'error code',
      message: 'error message',
    };
    let result: DaffReviewsCollectionReducerState;
    let state: DaffReviewsCollectionReducerState;

    beforeEach(() => {
      state = {
        ...daffReviewsCollectionReducerInitialState,
        ids: ['an ID'],
      };

      const productLoadFailure = new DaffReviewsProductListFailure(error);

      result = daffReviewsCollectionReducer(state, productLoadFailure);
    });

    it('resets state', () => {
      expect(result).toEqual(daffReviewsCollectionReducerInitialState);
    });
  });
});
