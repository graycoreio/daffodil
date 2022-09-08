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
  DaffReviewsCollectionChangePageSize,
  DaffReviewsProductList,
  DaffReviewsProductListSuccess,
  daffReviewsReducers,
  DaffReviewsStateRootSlice,
  DAFF_REVIEWS_STORE_FEATURE_KEY,
} from '@daffodil/reviews/state';
import { DaffProductReviewsFactory } from '@daffodil/reviews/testing';

import { getDaffProductReviewsCollectionSelectors } from './selectors';

describe('selectProductEntitiesState', () => {
  let store: Store<DaffReviewsStateRootSlice>;
  let reviewsFactory: DaffProductReviewsFactory;
  let mockProductReviews: DaffProductReviews;

  const {
    selectSelectedFilter,
  } = getDaffProductReviewsCollectionSelectors();

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

  describe('selectSelectedFilter', () => {
    it('should select the product of the given id', () => {
      const selector = store.pipe(select(selectSelectedFilter));
      const expected = cold('a', { a: mockProductReviews.metadata.appliedFilter });

      expect(selector).toBeObservable(expected);
    });

    it('should not emit when an unrelated piece of state changes', () => {
      const spy = jasmine.createSpy();
      const selector = store.pipe(select(selectSelectedFilter));

      selector.subscribe(spy);

      store.dispatch(new DaffReviewsCollectionChangePageSize(5));

      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});
