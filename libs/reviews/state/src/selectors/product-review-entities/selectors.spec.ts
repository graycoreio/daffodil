import { TestBed } from '@angular/core/testing';
import {
  StoreModule,
  combineReducers,
  Store,
  select,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

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
  });

  describe('selectProductReview', () => {
    let mockReview: DaffProductReview;

    beforeEach(() => {
      mockReview = Object.values(mockProductReviews.data)[0];
    });

    it('should select the product of the given id', () => {
      const selector = store.pipe(select(selectProductReview(mockReview.id)));
      const expected = cold('a', { a: mockReview });

      expect(selector).toBeObservable(expected);
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
