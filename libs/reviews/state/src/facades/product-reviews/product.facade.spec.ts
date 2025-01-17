import { TestBed } from '@angular/core/testing';
import {
  Store,
  StoreModule,
  combineReducers,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import {
  DaffProductReview,
  DaffProductReviews,
} from '@daffodil/reviews';
import {
  DaffReviewsProductListSuccess,
  daffReviewsReducers,
  DaffReviewsStateRootSlice,
  DAFF_REVIEWS_STORE_FEATURE_KEY,
} from '@daffodil/reviews/state';
import { DaffProductReviewsFactory } from '@daffodil/reviews/testing';

import { DaffProductReviewsFacade } from './product.facade';

describe('@daffodil/reviews/state | DaffProductReviewsFacade', () => {
  let store: Store<DaffReviewsStateRootSlice>;
  let facade: DaffProductReviewsFacade;
  let productReviewsFactory: DaffProductReviewsFactory;
  let mockReviews: DaffProductReviews;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        StoreModule.forRoot({
          [DAFF_REVIEWS_STORE_FEATURE_KEY]: combineReducers(daffReviewsReducers),
        }),
      ],
      providers: [
        DaffProductReviewsFacade,
      ],
    });

    store = TestBed.inject(Store);
    facade = TestBed.inject(DaffProductReviewsFacade);
    productReviewsFactory = TestBed.inject(DaffProductReviewsFactory);

    mockReviews = productReviewsFactory.create();

    store.dispatch(new DaffReviewsProductListSuccess(mockReviews));
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  it('should be able to dispatch an action to the store', () => {
    spyOn(store, 'dispatch');
    const action = { type: 'SOME_TYPE' };

    facade.dispatch(action);
    expect(<any>store.dispatch).toHaveBeenCalledWith(action);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  describe('getProductReview()', () => {
    let review: DaffProductReview;

    beforeEach(() => {
      review = Object.values(mockReviews.data)[0];
    });

    it('should be an observable of a product review', () => {
      const expected = cold('a', { a: review });
      expect(facade.getProductReview(review.id)).toBeObservable(expected);
    });
  });
});
