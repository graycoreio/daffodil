import { TestBed } from '@angular/core/testing';
import {
  StoreModule,
  combineReducers,
  Store,
  select,
} from '@ngrx/store';
import { TestScheduler } from 'rxjs/testing';

import { daffSubtract } from '@daffodil/core';
import { DaffProduct } from '@daffodil/product';
import {
  DaffProductGridLoadSuccess,
  DaffProductStateRootSlice,
  daffProductReducers,
  DAFF_PRODUCT_STORE_FEATURE_KEY,
  DaffProductGridLoad,
} from '@daffodil/product/state';
import { DaffProductFactory } from '@daffodil/product/testing';

import { getDaffProductEntitiesSelectors } from './product-entities.selectors';

describe('selectProductEntitiesState', () => {

  let store: Store<DaffProductStateRootSlice>;
  let productFactory: DaffProductFactory;
  let mockProduct: DaffProduct;
  let scheduler: TestScheduler;
  const {
    selectProductIds,
    selectProductEntities,
    selectAllProducts,
    selectProductTotal,
    selectProduct,
    selectProductPrice,
    selectProductDiscountAmount,
    selectProductDiscountedPrice,
    selectProductDiscountPercent,
    selectProductHasDiscount,
    selectIsProductOutOfStock,
  } = getDaffProductEntitiesSelectors();

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });

    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_PRODUCT_STORE_FEATURE_KEY]: combineReducers(daffProductReducers),
        }),
      ],
    });

    store = TestBed.inject(Store);
    productFactory = TestBed.inject(DaffProductFactory);

    mockProduct = productFactory.create();

    store.dispatch(new DaffProductGridLoadSuccess(new Array(mockProduct)));
  });

  describe('ProductEntitiesState', () => {

    describe('selectIds', () => {

      it('selects product ids', () => {
        const selector = store.pipe(select(selectProductIds));

        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: [mockProduct.id]});
        });
      });
    });

    describe('selectProductEntities', () => {

      it('selects product entities as a dictionary object', () => {
        const expectedDictionary = new Object();
        expectedDictionary[mockProduct.id] = mockProduct;

        const selector = store.pipe(select(selectProductEntities));

        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: expectedDictionary });
        });
      });
    });

    describe('selectAllProducts', () => {

      it('selects all products as an array', () => {
        const selector = store.pipe(select(selectAllProducts));

        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: [mockProduct]});
        });
      });
    });

    describe('selectProductTotal', () => {

      it('selects the total number of products', () => {
        const selector = store.pipe(select(selectProductTotal));

        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: 1 });
        });
      });
    });
  });

  describe('selectProduct', () => {

    it('should select the product of the given id', () => {
      const selector = store.pipe(select(selectProduct(mockProduct.id)));

      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: mockProduct });
      });
    });

    it('should not emit when an unrelated piece of state changes', () => {
      const spy = jasmine.createSpy();
      const selector = store.pipe(select(selectProduct(mockProduct.id)));

      selector.subscribe(spy);

      store.dispatch(new DaffProductGridLoad());

      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('selectProductPrice', () => {

    it('should select the product of the given id', () => {
      const selector = store.pipe(select(selectProductPrice(mockProduct.id)));

      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: mockProduct.price });
      });
    });

    it('should not emit when an unrelated piece of state changes', () => {
      const spy = jasmine.createSpy();
      const selector = store.pipe(select(selectProductPrice(mockProduct.id)));

      selector.subscribe(spy);

      store.dispatch(new DaffProductGridLoad());

      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('selectProductDiscountAmount', () => {

    it('should select the product discount amount of the given id', () => {
      const selector = store.pipe(select(selectProductDiscountAmount(mockProduct.id)));

      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: mockProduct.discount.amount });
      });
    });

    it('should not emit when an unrelated piece of state changes', () => {
      const spy = jasmine.createSpy();
      const selector = store.pipe(select(selectProductDiscountAmount(mockProduct.id)));

      selector.subscribe(spy);

      store.dispatch(new DaffProductGridLoad());

      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('selectProductDiscountedPrice', () => {

    it('should select the product of the given id', () => {
      const selector = store.pipe(select(selectProductDiscountedPrice(mockProduct.id)));

      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: daffSubtract(mockProduct.price, mockProduct.discount.amount) });
      });
    });

    it('should not emit when an unrelated piece of state changes', () => {
      const spy = jasmine.createSpy();
      const selector = store.pipe(select(selectProductDiscountedPrice(mockProduct.id)));

      selector.subscribe(spy);

      store.dispatch(new DaffProductGridLoad());

      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('selectProductDiscountPercent', () => {

    it('should select the product discount amount of the given id', () => {
      const selector = store.pipe(select(selectProductDiscountPercent(mockProduct.id)));

      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: mockProduct.discount.percent });
      });
    });

    it('should not emit when an unrelated piece of state changes', () => {
      const spy = jasmine.createSpy();
      const selector = store.pipe(select(selectProductDiscountPercent(mockProduct.id)));

      selector.subscribe(spy);

      store.dispatch(new DaffProductGridLoad());

      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('selectProductHasDiscount', () => {

    it('should select whether the product has a discount', () => {
      const selector = store.pipe(select(selectProductHasDiscount(mockProduct.id)));

      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: !!mockProduct.discount.amount });
      });
    });

    it('should not emit when an unrelated piece of state changes', () => {
      const spy = jasmine.createSpy();
      const selector = store.pipe(select(selectProductHasDiscount(mockProduct.id)));

      selector.subscribe(spy);

      store.dispatch(new DaffProductGridLoad());

      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('selectIsProductOutOfStock', () => {

    it('should select whether the product is out of stock', () => {
      const selector = store.pipe(select(selectIsProductOutOfStock(mockProduct.id)));

      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: !mockProduct.in_stock });
      });
    });

    it('should return null if the product is not in state', () => {
      const selector = store.pipe(select(selectIsProductOutOfStock(mockProduct + 'notId')));

      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: null });
      });
    });

    it('should not emit when an unrelated piece of state changes', () => {
      const spy = jasmine.createSpy();
      const selector = store.pipe(select(selectIsProductOutOfStock(mockProduct.id)));

      selector.subscribe(spy);

      store.dispatch(new DaffProductGridLoad());

      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});
