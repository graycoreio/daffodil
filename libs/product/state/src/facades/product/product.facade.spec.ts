import { TestBed } from '@angular/core/testing';
import {
  Store,
  StoreModule,
  combineReducers,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

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
import {
  DaffProductPageLoad,
  DaffProductPageLoadSuccess,
} from '../../actions/product-page.actions';

describe('DaffProductFacade', () => {
  let store: Store<DaffProductStateRootSlice>;
  let facade: DaffProductFacade;
  let productFactory: DaffProductFactory;

  beforeEach(() => {
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
      const expected = cold('a', { a: product });
      store.dispatch(new DaffProductLoad(product.id));
      store.dispatch(new DaffProductLoadSuccess({
        id: product.id,
        products: [product],
      }));
      expect(facade.getProduct(product.id)).toBeObservable(expected);
    });
  });

  describe('getPrice()', () => {
    it('should be an observable of a product', () => {
      const product = productFactory.create();
      const expected = cold('a', { a: product.price });
      store.dispatch(new DaffProductLoad(product.id));
      store.dispatch(new DaffProductLoadSuccess({
        id: product.id,
        products: [product],
      }));
      expect(facade.getPrice(product.id)).toBeObservable(expected);
    });
  });

  describe('hasDiscount()', () => {
    it('should be an observable of whether the given product has discount', () => {
      const product = productFactory.create({
        discount: { amount: 20, percent: 10 },
      });
      const expected = cold('a', { a: true });
      store.dispatch(new DaffProductLoad(product.id));
      store.dispatch(new DaffProductLoadSuccess({
        id: product.id,
        products: [product],
      }));
      expect(facade.hasDiscount(product.id)).toBeObservable(expected);
    });
  });

  describe('getDiscountAmount()', () => {
    it('should be an observable of whether the given product has discount', () => {
      const product = productFactory.create({
        discount: { amount: 20, percent: 10 },
      });
      const expected = cold('a', { a: 20 });
      store.dispatch(new DaffProductLoad(product.id));
      store.dispatch(new DaffProductLoadSuccess({
        id: product.id,
        products: [product],
      }));
      expect(facade.getDiscountAmount(product.id)).toBeObservable(expected);
    });
  });

  describe('getDiscountedPrice()', () => {
    it('should be an observable of the discounted price of a product', () => {
      const product = productFactory.create();
      const expected = cold('a', { a: daffSubtract(product.price, product.discount.amount) });
      store.dispatch(new DaffProductLoad(product.id));
      store.dispatch(new DaffProductLoadSuccess({
        id: product.id,
        products: [product],
      }));
      expect(facade.getDiscountedPrice(product.id)).toBeObservable(expected);
    });
  });

  describe('getDiscountPercent()', () => {
    it('should be an observable of whether the given product has discount', () => {
      const product = productFactory.create({
        discount: { amount: 20, percent: 10 },
      });
      const expected = cold('a', { a: 10 });
      store.dispatch(new DaffProductLoad(product.id));
      store.dispatch(new DaffProductLoadSuccess({
        id: product.id,
        products: [product],
      }));
      expect(facade.getDiscountPercent(product.id)).toBeObservable(expected);
    });
  });

  describe('isOutOfStock()', () => {
    it('should be an observable of whether the given product is out of stock', () => {
      const product = productFactory.create({
        discount: { amount: 20, percent: 10 },
        in_stock: false,
      });
      const expected = cold('a', { a: true });
      store.dispatch(new DaffProductLoad(product.id));
      store.dispatch(new DaffProductLoadSuccess({
        id: product.id,
        products: [product],
      }));
      expect(facade.isOutOfStock(product.id)).toBeObservable(expected);
    });
  });
});
