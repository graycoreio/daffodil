import { TestBed } from '@angular/core/testing';
import {
  Store,
  StoreModule,
  combineReducers,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import {
  DaffReviewsProductList,
  DaffReviewsProductListSuccess,
  daffReviewsReducers,
  DaffReviewsStateRootSlice,
  DAFF_REVIEWS_STORE_FEATURE_KEY,
} from '@daffodil/reviews/state';
import { DaffProductReviewsFactory } from '@daffodil/reviews/testing';

import { DaffProductPageReviewsFacade } from './facade';

describe('@daffodil/reviews/state | DaffProductPageReviewsFacade', () => {
  let store: Store<DaffReviewsStateRootSlice>;
  let facade: DaffProductPageReviewsFacade;
  let reviewsFactory: DaffProductReviewsFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        StoreModule.forRoot({
          [DAFF_REVIEWS_STORE_FEATURE_KEY]: combineReducers(daffReviewsReducers),
        }),
      ],
      providers: [
        DaffProductPageReviewsFacade,
      ],
    });

    store = TestBed.inject(Store);
    facade = TestBed.inject(DaffProductPageReviewsFacade);
    reviewsFactory = TestBed.inject(DaffProductReviewsFactory);
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

  describe('loading$', () => {
    it('should be false if the state is not loading', () => {
      const expected = cold('a', { a: false });
      expect(facade.loading$).toBeObservable(expected);
    });

    it('should be true if the state is loading', () => {
      const expected = cold('a', { a: true });
      store.dispatch(new DaffReviewsProductList('1'));
      expect(facade.loading$).toBeObservable(expected);
    });
  });

  describe('productReviews$', () => {
    it('should initially be an empty array', () => {
      const initial = cold('a', { a: []});
      expect(facade.productReviews$).toBeObservable(initial);
    });

    it('should be an observable of the currently selected product', () => {
      const reviews = reviewsFactory.create();
      const expected = cold('a', { a: jasmine.arrayContaining(Object.values(reviews.data)) });
      store.dispatch(new DaffReviewsProductListSuccess(reviews));
      expect(facade.productReviews$).toBeObservable(expected);
    });
  });
});
