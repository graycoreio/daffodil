import { TestBed } from '@angular/core/testing';

import {
  DaffCollectionRequest,
  daffFilterArrayToDict,
  DaffFilterEqual,
  DaffFilterEqualOption,
  daffFilterEqualOptionArrayToDict,
  DaffFilterEqualRequest,
} from '@daffodil/core';
import { daffCollectionReducerInitialState } from '@daffodil/core/state';
import {
  DaffCollectionRequestFactory,
  DaffFilterEqualFactory,
  DaffFilterEqualOptionFactory,
  DaffFilterRequestEqualFactory,
} from '@daffodil/core/testing';
import {
  DaffProductReview,
  DaffProductReviews,
} from '@daffodil/reviews';
import {
  DaffReviewsProductList,
  DaffReviewsProductListSuccess,
  DaffReviewsProductListFailure,
  DaffReviewsCollectionReducerState,
  DaffReviewsCollectionChangeFilter,
} from '@daffodil/reviews/state';
import { DaffProductReviewsFactory } from '@daffodil/reviews/testing';

import { daffReviewsCollectionReducer } from './reducer';


describe('@daffodil/reviews/state | daffReviewsCollectionReducer', () => {
  let collectionRequestFactory: DaffCollectionRequestFactory;
  let productReviewsFactory: DaffProductReviewsFactory;
  let equalFilterFactory: DaffFilterEqualFactory;
  let equalOptionFactory: DaffFilterEqualOptionFactory;
  let equalFilterRequestFactory: DaffFilterRequestEqualFactory;

  let mockProductReviews: DaffProductReviews;
  let mockProductReview: DaffProductReview;
  let mockCollectionRequest: DaffCollectionRequest;
  let productId: string;

  beforeEach(() => {
    productReviewsFactory = TestBed.inject(DaffProductReviewsFactory);
    collectionRequestFactory = TestBed.inject(DaffCollectionRequestFactory);
    equalFilterFactory = TestBed.inject(DaffFilterEqualFactory);
    equalOptionFactory = TestBed.inject(DaffFilterEqualOptionFactory);
    equalFilterRequestFactory = TestBed.inject(DaffFilterRequestEqualFactory);

    mockProductReviews = productReviewsFactory.create();
    mockCollectionRequest = collectionRequestFactory.create();
    mockProductReview = Object.values(mockProductReviews.data)[0];
  });

  describe('when an unknown action is triggered', () => {
    it('should return the current state', () => {
      const action = <any>{};

      const result = daffReviewsCollectionReducer(daffCollectionReducerInitialState, action);

      expect(result).toBe(daffCollectionReducerInitialState);
    });
  });

  describe('when ChangeFilterAction is triggered', () => {
    let currentEqualFilter: DaffFilterEqual;
    let currentAppliedEqualFilterOption: DaffFilterEqualOption;
    let currentUnappliedEqualFilterOption: DaffFilterEqualOption;
    let equalFilterRequest: DaffFilterEqualRequest;
    let result: DaffReviewsCollectionReducerState;
    let stateUnderTest: DaffReviewsCollectionReducerState;

    beforeEach(() => {
      currentAppliedEqualFilterOption = equalOptionFactory.create({
        applied: true,
      });
      currentUnappliedEqualFilterOption = equalOptionFactory.create({
        applied: false,
      });
      currentEqualFilter = equalFilterFactory.create({
        options: daffFilterEqualOptionArrayToDict([
          currentAppliedEqualFilterOption,
          currentUnappliedEqualFilterOption,
        ]),
      });
      equalFilterRequest = equalFilterRequestFactory.create({
        name: currentEqualFilter.name,
        value: [currentUnappliedEqualFilterOption.value],
      });
      stateUnderTest = {
        ...daffCollectionReducerInitialState,
        filters: daffFilterArrayToDict([
          currentEqualFilter,
        ]),
      };
      const action = new DaffReviewsCollectionChangeFilter([
        equalFilterRequest,
      ]);

      result = daffReviewsCollectionReducer(stateUnderTest, action);
    });

    it('should apply the requested options', () => {
      equalFilterRequest.value.forEach(option => {
        expect(result.filters[equalFilterRequest.name].options[option].applied).toBeTrue();
      });
    });

    it('should remove the existing options', () => {
      expect(result.filters[currentEqualFilter.name].options[currentAppliedEqualFilterOption.value].applied).toBeFalse();
    });
  });

  describe('when ReviewsProductListAction is triggered', () => {
    let result: DaffReviewsCollectionReducerState;

    beforeEach(() => {
      const productLoadAction: DaffReviewsProductList = new DaffReviewsProductList(productId, mockCollectionRequest);

      result = daffReviewsCollectionReducer(daffCollectionReducerInitialState, productLoadAction);
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
        ...daffCollectionReducerInitialState,
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
        ...daffCollectionReducerInitialState,
        ids: ['an ID'],
      };

      const productLoadFailure = new DaffReviewsProductListFailure(error);

      result = daffReviewsCollectionReducer(state, productLoadFailure);
    });

    it('resets state', () => {
      expect(result).toEqual(daffCollectionReducerInitialState);
    });
  });
});
