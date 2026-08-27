import { TestBed } from '@angular/core/testing';
import {
  StoreModule,
  combineReducers,
  Store,
  select,
} from '@ngrx/store';
import { TestScheduler } from 'rxjs/testing';

import {
  DaffProductReview,
  DaffProductReviews,
} from '@daffodil/reviews';
import {
  DaffReviewsProductList,
  DaffReviewsProductListSuccess,
  daffReviewsReducers,
  DaffReviewsStateRootSlice,
  DAFF_REVIEWS_STORE_FEATURE_KEY,
} from '@daffodil/reviews/state';
import { DaffProductReviewsFactory } from '@daffodil/reviews/testing';

import { getDaffProductReviewEntitiesSelectors } from './selectors';

describe('selectProductEntitiesState', () => {
  let store: Store<DaffReviewsStateRootSlice>;
  let reviewsFactory: DaffProductReviewsFactory;
  let mockProductReviews: DaffProductReviews;
  let scheduler: TestScheduler;

  const {
    selectProductReview,
  } = getDaffProductReviewEntitiesSelectors();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_REVIEWS_STORE_FEATURE_KEY]: combineReducers(daffReviewsReducers),
        }),
      ],
    });

    store = TestBed.inject(Store);
    reviewsFactory = TestBed.inject(DaffProductReviewsFactory);

    mockProductReviews = reviewsFactory.create();

    store.dispatch(new DaffReviewsProductListSuccess(mockProductReviews));

    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  describe('selectProductReview', () => {
    let mockReview: DaffProductReview;

    beforeEach(() => {
      mockReview = Object.values(mockProductReviews.data)[0];
    });

    it('should select the product of the given id', () => {
      const selector = store.pipe(select(selectProductReview(mockReview.id)));

      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: mockReview });
      });
    });

    it('should not emit when an unrelated piece of state changes', () => {
      const spy = jasmine.createSpy();
      const selector = store.pipe(select(selectProductReview(mockReview.id)));

      selector.subscribe(spy);

      store.dispatch(new DaffReviewsProductList('productId'));

      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});
