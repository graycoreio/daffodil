import { TestBed } from '@angular/core/testing';
import {
  Store,
  StoreModule,
  combineReducers,
} from '@ngrx/store';
import { TestScheduler } from 'rxjs/testing';

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
  let scheduler: TestScheduler;

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

    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
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
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.loading$).toBe('a', { a: false });
      });
    });

    it('should be true if the state is loading', () => {
      store.dispatch(new DaffReviewsProductList('1'));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.loading$).toBe('a', { a: true });
      });
    });
  });

  describe('productReviews$', () => {
    it('should initially be an empty array', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.productReviews$).toBe('a', { a: []});
      });
    });

    it('should be an observable of the currently selected product', () => {
      const reviews = reviewsFactory.create();
      store.dispatch(new DaffReviewsProductListSuccess(reviews));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.productReviews$).toBe('a', { a: jasmine.arrayContaining(Object.values(reviews.data)) });
      });
    });
  });
});
