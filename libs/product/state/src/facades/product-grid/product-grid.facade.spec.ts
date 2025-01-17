import { TestBed } from '@angular/core/testing';
import {
  Store,
  StoreModule,
  combineReducers,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import {
  DaffProductGridLoad,
  DaffProductGridLoadSuccess,
  DaffProductStateRootSlice,
  daffProductReducers,
  DAFF_PRODUCT_STORE_FEATURE_KEY,
} from '@daffodil/product/state';
import { DaffProductFactory } from '@daffodil/product/testing';

import { DaffProductGridFacade } from './product-grid.facade';

describe('DaffProductGridFacade', () => {
  let store: Store<DaffProductStateRootSlice>;
  let facade: DaffProductGridFacade;
  let productFactory: DaffProductFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        StoreModule.forRoot({
          [DAFF_PRODUCT_STORE_FEATURE_KEY]: combineReducers(daffProductReducers),
        }),
      ],
      providers: [
        DaffProductGridFacade,
      ],
    });

    productFactory = TestBed.inject(DaffProductFactory);
    store = TestBed.inject(Store);
    facade = TestBed.inject(DaffProductGridFacade);
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
    it('should be false if the product-grid state is not loading', () => {
      const expected = cold('a', { a: false });
      expect(facade.loading$).toBeObservable(expected);
    });

    it('should be true if the product-grid state is loading', () => {
      const expected = cold('a', { a: true });
      store.dispatch(new DaffProductGridLoad());
      expect(facade.loading$).toBeObservable(expected);
    });
  });

  describe('products$', () => {
    it('should initially be an empty array', () => {
      const initial = cold('a', { a: []});
      expect(facade.products$).toBeObservable(initial);
    });

    it('should be an observable of the list of products', () => {
      const products = productFactory.createMany(1);
      const expected = cold('a', { a: products });
      store.dispatch(new DaffProductGridLoad());
      store.dispatch(new DaffProductGridLoadSuccess(products));
      expect(facade.products$).toBeObservable(expected);
    });
  });
});
