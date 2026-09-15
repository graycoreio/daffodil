import { TestBed } from '@angular/core/testing';
import {
  Store,
  StoreModule,
  combineReducers,
} from '@ngrx/store';
import { TestScheduler } from 'rxjs/testing';

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
  let scheduler: TestScheduler;

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });

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
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.loading$).toBe('a', { a: false });
      });
    });

    it('should be true if the product state is loading', () => {
      store.dispatch(new DaffProductPageLoad('1'));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.loading$).toBe('a', { a: true });
      });
    });
  });

  describe('product$', () => {
    it('should initially be undefined', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.product$).toBe('a', { a: undefined });
      });
    });

    it('should be an observable of the currently selected product', () => {
      const product = productFactory.create();
      store.dispatch(new DaffProductPageLoad(product.id));
      store.dispatch(new DaffProductPageLoadSuccess({
        id: product.id,
        products: [product],
      }));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.product$).toBe('a', { a: product });
      });
    });
  });
});
