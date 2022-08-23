import { TestBed } from '@angular/core/testing';
import {
  StoreModule,
  combineReducers,
  Store,
  select,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffProductReviews } from '@daffodil/reviews';
import {
  DaffReviewsStateRootSlice,
  DAFF_REVIEWS_STORE_FEATURE_KEY,
  daffReviewsReducers,
  DaffReviewsProductListSuccess,
  DaffProductPageReviewsReducerState,
} from '@daffodil/reviews/state';
import { DaffProductReviewsFactory } from '@daffodil/reviews/testing';

import { getDaffProductPageReviewsSelectors } from './selectors';

describe('selectReviewsState', () => {
  let store: Store<DaffReviewsStateRootSlice>;
  let reviewsFactory: DaffProductReviewsFactory;
  let mockProductReviews: DaffProductReviews;

  const {
    selectProductPageReviewsLoading,
    selectProductPageReviewsState,
    selectProductPageReviewsErrors,
    selectProductPageReviews,
  } = getDaffProductPageReviewsSelectors();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_REVIEWS_STORE_FEATURE_KEY]: combineReducers(daffReviewsReducers),
        }),
      ],
    });

    reviewsFactory = TestBed.inject(DaffProductReviewsFactory);
    store = TestBed.inject(Store);

    mockProductReviews = reviewsFactory.create();

    store.dispatch(new DaffReviewsProductListSuccess(mockProductReviews));
  });

  describe('selectProductPageReviewsState', () => {
    let expectedState: DaffProductPageReviewsReducerState;

    beforeEach(() => {
      expectedState = {
        loading: false,
        errors: [],
      };
    });

    it('returns the state for the current product page reviews', () => {
      const selector = store.pipe(select(selectProductPageReviewsState));
      const expected = cold('a', { a: expectedState });

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectProductPageReviewsLoading', () => {

    it('selects the loading state of the current product page reviews', () => {
      const selector = store.pipe(select(selectProductPageReviewsLoading));
      const expected = cold('a', { a: false });

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectProductPageReviewsErrors', () => {

    it('returns the current product page reviews errors', () => {
      const selector = store.pipe(select(selectProductPageReviewsErrors));
      const expected = cold('a', { a: []});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectProductPageReviews', () => {
    it('selects the product reviews', () => {
      const selector = store.pipe(select(selectProductPageReviews));
      const expected = cold('a', { a: jasmine.arrayContaining(Object.values(mockProductReviews.data)) });

      expect(selector).toBeObservable(expected);
    });
  });
});
