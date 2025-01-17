import { TestBed } from '@angular/core/testing';
import {
  Store,
  StoreModule,
  combineReducers,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import {
  daffProductReducers,
  DaffProductStateRootSlice,
  DAFF_PRODUCT_STORE_FEATURE_KEY,
} from '@daffodil/product/state';
import { DaffProductFactory } from '@daffodil/product/testing';

import { DaffProductPageFacade } from './facade';
import {
  DaffProductPageLoad,
  DaffProductPageLoadSuccess,
} from '../../actions/product-page.actions';

describe('DaffProductPageFacade', () => {
  let store: Store<DaffProductStateRootSlice>;
  let facade: DaffProductPageFacade;
  let productFactory: DaffProductFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        StoreModule.forRoot({
          [DAFF_PRODUCT_STORE_FEATURE_KEY]: combineReducers(daffProductReducers),
        }),
      ],
      providers: [
        DaffProductPageFacade,
      ],
    });

    store = TestBed.inject(Store);
    facade = TestBed.inject(DaffProductPageFacade);
    productFactory = TestBed.inject(DaffProductFactory);
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
    it('should be false if the product state is not loading', () => {
      const expected = cold('a', { a: false });
      expect(facade.loading$).toBeObservable(expected);
    });

    it('should be true if the product state is loading', () => {
      const expected = cold('a', { a: true });
      store.dispatch(new DaffProductPageLoad('1'));
      expect(facade.loading$).toBeObservable(expected);
    });
  });

  describe('product$', () => {
    it('should initially be undefined', () => {
      const initial = cold('a', { a: undefined });
      expect(facade.product$).toBeObservable(initial);
    });

    it('should be an observable of the currently selected product', () => {
      const product = productFactory.create();
      const expected = cold('a', { a: product });
      store.dispatch(new DaffProductPageLoad(product.id));
      store.dispatch(new DaffProductPageLoadSuccess({
        id: product.id,
        products: [product],
      }));
      expect(facade.product$).toBeObservable(expected);
    });
  });
});
