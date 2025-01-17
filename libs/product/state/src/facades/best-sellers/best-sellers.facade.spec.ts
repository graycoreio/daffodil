import { TestBed } from '@angular/core/testing';
import {
  Store,
  StoreModule,
  combineReducers,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import {
  DaffBestSellersLoad,
  DaffBestSellersLoadSuccess,
  DaffProductStateRootSlice,
  daffProductReducers,
  DAFF_PRODUCT_STORE_FEATURE_KEY,
} from '@daffodil/product/state';
import { DaffProductFactory } from '@daffodil/product/testing';

import { DaffBestSellersFacade } from './best-sellers.facade';

describe('DaffBestSellersFacade', () => {
  let store: Store<DaffProductStateRootSlice>;
  let facade: DaffBestSellersFacade;
  let productFactory: DaffProductFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        StoreModule.forRoot({
          [DAFF_PRODUCT_STORE_FEATURE_KEY]: combineReducers(daffProductReducers),
        }),
      ],
      providers: [
        DaffBestSellersFacade,
      ],
    });

    productFactory = TestBed.inject(DaffProductFactory);
    store = TestBed.inject(Store);
    facade = TestBed.inject(DaffBestSellersFacade);
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
    it('should be false if the bestSellers is not loading', () => {
      const expected = cold('a', { a: false });
      expect(facade.loading$).toBeObservable(expected);
    });

    it('should be true if the bestSellers is loading', () => {
      const expected = cold('a', { a: true });
      store.dispatch(new DaffBestSellersLoad());
      expect(facade.loading$).toBeObservable(expected);
    });
  });

  describe('bestSellers$', () => {
    it('should be initially an empty array', () => {
      const initial = cold('a', { a: []});
      expect(facade.bestSellers$).toBeObservable(initial);
    });

    it('should be an observable of the list of the best sellers that are added to state', () => {
      const stubProduct = productFactory.create();
      const expected = cold('a', { a: [stubProduct]});
      store.dispatch(new DaffBestSellersLoadSuccess([stubProduct]));
      expect(facade.bestSellers$).toBeObservable(expected);
    });
  });
});
