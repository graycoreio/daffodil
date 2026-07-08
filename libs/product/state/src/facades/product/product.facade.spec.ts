import { TestBed } from '@angular/core/testing';
import {
  Store,
  StoreModule,
  combineReducers,
} from '@ngrx/store';
import { TestScheduler } from 'rxjs/testing';

import { daffSubtract } from '@daffodil/core';
import {
  DaffProductLoad,
  DaffProductLoadSuccess,
  daffProductReducers,
  DaffProductStateRootSlice,
  DAFF_PRODUCT_STORE_FEATURE_KEY,
} from '@daffodil/product/state';
import { DaffProductFactory } from '@daffodil/product/testing';

import { DaffProductFacade } from './product.facade';

describe('DaffProductFacade', () => {
  let store: Store<DaffProductStateRootSlice>;
  let facade: DaffProductFacade;
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
        DaffProductFacade,
      ],
    });

    store = TestBed.inject(Store);
    facade = TestBed.inject(DaffProductFacade);
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

  describe('getProduct()', () => {
    it('should be an observable of a product', () => {
      const product = productFactory.create();
      store.dispatch(new DaffProductLoad(product.id));
      store.dispatch(new DaffProductLoadSuccess({
        id: product.id,
        products: [product],
      }));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.getProduct(product.id)).toBe('a', { a: product });
      });
    });
  });

  describe('getPrice()', () => {
    it('should be an observable of a product', () => {
      const product = productFactory.create();
      store.dispatch(new DaffProductLoad(product.id));
      store.dispatch(new DaffProductLoadSuccess({
        id: product.id,
        products: [product],
      }));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.getPrice(product.id)).toBe('a', { a: product.price });
      });
    });
  });

  describe('hasDiscount()', () => {
    it('should be an observable of whether the given product has discount', () => {
      const product = productFactory.create({
        discount: { amount: 20, percent: 10 },
      });
      store.dispatch(new DaffProductLoad(product.id));
      store.dispatch(new DaffProductLoadSuccess({
        id: product.id,
        products: [product],
      }));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.hasDiscount(product.id)).toBe('a', { a: true });
      });
    });
  });

  describe('getDiscountAmount()', () => {
    it('should be an observable of whether the given product has discount', () => {
      const product = productFactory.create({
        discount: { amount: 20, percent: 10 },
      });
      store.dispatch(new DaffProductLoad(product.id));
      store.dispatch(new DaffProductLoadSuccess({
        id: product.id,
        products: [product],
      }));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.getDiscountAmount(product.id)).toBe('a', { a: 20 });
      });
    });
  });

  describe('getDiscountedPrice()', () => {
    it('should be an observable of the discounted price of a product', () => {
      const product = productFactory.create();
      store.dispatch(new DaffProductLoad(product.id));
      store.dispatch(new DaffProductLoadSuccess({
        id: product.id,
        products: [product],
      }));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.getDiscountedPrice(product.id)).toBe('a', { a: daffSubtract(product.price, product.discount.amount) });
      });
    });
  });

  describe('getDiscountPercent()', () => {
    it('should be an observable of whether the given product has discount', () => {
      const product = productFactory.create({
        discount: { amount: 20, percent: 10 },
      });
      store.dispatch(new DaffProductLoad(product.id));
      store.dispatch(new DaffProductLoadSuccess({
        id: product.id,
        products: [product],
      }));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.getDiscountPercent(product.id)).toBe('a', { a: 10 });
      });
    });
  });

  describe('isOutOfStock()', () => {
    it('should be an observable of whether the given product is out of stock', () => {
      const product = productFactory.create({
        discount: { amount: 20, percent: 10 },
        in_stock: false,
      });
      store.dispatch(new DaffProductLoad(product.id));
      store.dispatch(new DaffProductLoadSuccess({
        id: product.id,
        products: [product],
      }));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.isOutOfStock(product.id)).toBe('a', { a: true });
      });
    });
  });
});
