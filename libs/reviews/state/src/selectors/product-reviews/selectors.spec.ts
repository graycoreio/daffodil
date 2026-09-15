import { TestBed } from '@angular/core/testing';
import {
  StoreModule,
  combineReducers,
  Store,
  select,
} from '@ngrx/store';
import { TestScheduler } from 'rxjs/testing';

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
  let scheduler: TestScheduler;

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

    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
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

      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: expectedState });
      });
    });
  });

  describe('selectProductPageReviewsLoading', () => {

    it('selects the loading state of the current product page reviews', () => {
      const selector = store.pipe(select(selectProductPageReviewsLoading));

      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: false });
      });
    });
  });

  describe('selectProductPageReviewsErrors', () => {

    it('returns the current product page reviews errors', () => {
      const selector = store.pipe(select(selectProductPageReviewsErrors));

      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: []});
      });
    });
  });

  describe('selectProductPageReviews', () => {
    it('selects the product reviews', () => {
      const selector = store.pipe(select(selectProductPageReviews));

      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: jasmine.arrayContaining(Object.values(mockProductReviews.data)) });
      });
    });
  });
});
