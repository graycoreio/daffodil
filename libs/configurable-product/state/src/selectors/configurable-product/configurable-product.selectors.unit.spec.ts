import { TestBed } from '@angular/core/testing';
import {
  StoreModule,
  combineReducers,
  Store,
  select,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import {
  DAFF_CONFIGURABLE_PRODUCT_STORE_FEATURE_KEY,
  daffConfigurableProductReducers,
} from '@daffodil/configurable-product/state';
import { DaffConfigurableProduct } from '@daffodil/product';
import {
  DaffProductLoadSuccess,
  daffProductReducers,
  DaffProductStateRootSlice,
  DaffProductGridLoadSuccess,
  DaffConfigurableProductApplyAttribute,
  DAFF_PRODUCT_STORE_FEATURE_KEY,
  DaffProductGridLoad,
} from '@daffodil/product/state';
import { DaffConfigurableProductFactory } from '@daffodil/product/testing';

import { getDaffConfigurableProductSelectors } from './configurable-product.selectors';

describe('Configurable Product Selectors | unit tests', () => {

  let store: Store<DaffProductStateRootSlice>;
  const configurableProductFactory: DaffConfigurableProductFactory = new DaffConfigurableProductFactory();
  let stubConfigurableProduct: DaffConfigurableProduct;
  const {
    selectAllConfigurableProductVariants,
    selectConfigurableProductPrices,
    selectConfigurableProductDiscountedPrices,
    selectConfigurableProductPercentDiscounts,
    selectConfigurableProductHasDiscount,
    selectConfigurableProductMinimumPrice,
    selectConfigurableProductMaximumPrice,
    selectConfigurableProductMinimumPercentDiscount,
    selectConfigurableProductMaximumPercentDiscount,
    selectConfigurableProductMinimumDiscountedPrice,
    selectConfigurableProductMaximumDiscountedPrice,
    isConfigurablePriceRanged,
    selectMatchingConfigurableProductVariants,
    selectSelectableConfigurableProductAttributes,
  } = getDaffConfigurableProductSelectors();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_CONFIGURABLE_PRODUCT_STORE_FEATURE_KEY]: combineReducers(daffConfigurableProductReducers),
          [DAFF_PRODUCT_STORE_FEATURE_KEY]: combineReducers(daffProductReducers),
        }),
      ],
    });

    stubConfigurableProduct = configurableProductFactory.create();
    store = TestBed.inject(Store);
  });

  describe('selectAllConfigurableProductVariants', () => {

    it('returns all variants for the given product', () => {
      store.dispatch(new DaffProductLoadSuccess({
        id: stubConfigurableProduct.id,
        products: [stubConfigurableProduct],
      }));
      const selector = store.pipe(select(selectAllConfigurableProductVariants(stubConfigurableProduct.id)));
      const expected = cold('a', { a: stubConfigurableProduct.variants });

      expect(selector).toBeObservable(expected);
    });

    it('should not emit when an unrelated piece of state changes', () => {
      store.dispatch(new DaffProductLoadSuccess({
        id: stubConfigurableProduct.id,
        products: [stubConfigurableProduct],
      }));

      const spy = jasmine.createSpy();
      const selector = store.pipe(select(selectAllConfigurableProductVariants(stubConfigurableProduct.id)));

      selector.subscribe(spy);

      store.dispatch(new DaffProductGridLoad());

      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('selectConfigurableProductPrices', () => {

    it('should return an array of prices', () => {
      stubConfigurableProduct.variants[0].price = 2;
      stubConfigurableProduct.variants[1].price = 1;
      stubConfigurableProduct.variants[2].price = 3;
      stubConfigurableProduct.variants[3].price = 4;
      store.dispatch(new DaffProductGridLoadSuccess([stubConfigurableProduct]));
      store.dispatch(new DaffConfigurableProductApplyAttribute(
        stubConfigurableProduct.id,
        stubConfigurableProduct.configurableAttributes[0].code,
        stubConfigurableProduct.variants[0].appliedAttributes[stubConfigurableProduct.configurableAttributes[0].code],
      ));
      const selector = store.pipe(select(selectConfigurableProductPrices(stubConfigurableProduct.id)));
      const expected = cold('a', { a: [2, 1, 3, 4]});

      expect(selector).toBeObservable(expected);
    });

    it('should not emit when an unrelated piece of state changes', () => {
      store.dispatch(new DaffProductLoadSuccess({
        id: stubConfigurableProduct.id,
        products: [stubConfigurableProduct],
      }));

      const spy = jasmine.createSpy();
      const selector = store.pipe(select(selectConfigurableProductPrices(stubConfigurableProduct.id)));

      selector.subscribe(spy);

      store.dispatch(new DaffProductGridLoad());

      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('selectConfigurableProductDiscountedPrices', () => {

    it('should return an array of prices', () => {
      stubConfigurableProduct.variants[0].price = 4;
      stubConfigurableProduct.variants[1].price = 4;
      stubConfigurableProduct.variants[2].price = 4;
      stubConfigurableProduct.variants[3].price = 4;
      stubConfigurableProduct.variants[0].discount.amount = 3.2;
      stubConfigurableProduct.variants[1].discount.amount = 2.002;
      stubConfigurableProduct.variants[2].discount.amount = 1.9999999;
      stubConfigurableProduct.variants[3].discount.amount = 3;
      store.dispatch(new DaffProductGridLoadSuccess([stubConfigurableProduct]));
      store.dispatch(new DaffConfigurableProductApplyAttribute(
        stubConfigurableProduct.id,
        stubConfigurableProduct.configurableAttributes[0].code,
        stubConfigurableProduct.variants[0].appliedAttributes[stubConfigurableProduct.configurableAttributes[0].code],
      ));
      const selector = store.pipe(select(selectConfigurableProductDiscountedPrices(stubConfigurableProduct.id)));
      const expected = cold('a', { a: [.8, 1.998, 2.0000001, 1]});

      expect(selector).toBeObservable(expected);
    });

    it('should not emit when an unrelated piece of state changes', () => {
      store.dispatch(new DaffProductLoadSuccess({
        id: stubConfigurableProduct.id,
        products: [stubConfigurableProduct],
      }));

      const spy = jasmine.createSpy();
      const selector = store.pipe(select(selectConfigurableProductDiscountedPrices(stubConfigurableProduct.id)));

      selector.subscribe(spy);

      store.dispatch(new DaffProductGridLoad());

      expect(spy).toHaveBeenCalledTimes(1);
    });
  });


  describe('selectConfigurableProductPercentDiscounts', () => {

    it('should return an array of the percent discounts for a product', () => {
      stubConfigurableProduct.variants[0].discount.percent = 1;
      stubConfigurableProduct.variants[1].discount.percent = 2;
      stubConfigurableProduct.variants[2].discount.percent = 3;
      stubConfigurableProduct.variants[3].discount.percent = 4;
      store.dispatch(new DaffProductGridLoadSuccess([stubConfigurableProduct]));
      store.dispatch(new DaffConfigurableProductApplyAttribute(
        stubConfigurableProduct.id,
        stubConfigurableProduct.configurableAttributes[0].code,
        stubConfigurableProduct.variants[0].appliedAttributes[stubConfigurableProduct.configurableAttributes[0].code],
      ));
      const selector = store.pipe(select(selectConfigurableProductPercentDiscounts(stubConfigurableProduct.id)));
      const expected = cold('a', { a: [1, 2, 3, 4]});

      expect(selector).toBeObservable(expected);
    });

    it('should not emit when an unrelated piece of state changes', () => {
      store.dispatch(new DaffProductLoadSuccess({
        id: stubConfigurableProduct.id,
        products: [stubConfigurableProduct],
      }));

      const spy = jasmine.createSpy();
      const selector = store.pipe(select(selectConfigurableProductPercentDiscounts(stubConfigurableProduct.id)));

      selector.subscribe(spy);

      store.dispatch(new DaffProductGridLoad());

      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('selectConfigurableProductHasDiscount', () => {

    it('should return true when a variant has a discount', () => {
      stubConfigurableProduct.variants[0].discount.amount = 3;
      stubConfigurableProduct.variants[1].discount.amount = 5;
      stubConfigurableProduct.variants[2].discount.amount = 6;
      stubConfigurableProduct.variants[3].discount.amount = 3;
      store.dispatch(new DaffProductGridLoadSuccess([stubConfigurableProduct]));
      store.dispatch(new DaffConfigurableProductApplyAttribute(
        stubConfigurableProduct.id,
        stubConfigurableProduct.configurableAttributes[0].code,
        stubConfigurableProduct.variants[0].appliedAttributes[stubConfigurableProduct.configurableAttributes[0].code],
      ));
      const selector = store.pipe(select(selectConfigurableProductHasDiscount(stubConfigurableProduct.id)));
      const expected = cold('a', { a: true });

      expect(selector).toBeObservable(expected);
    });

    it('should return false when no variants have a discount', () => {
      stubConfigurableProduct.variants[0].discount.amount = 0;
      stubConfigurableProduct.variants[1].discount.amount = 0;
      stubConfigurableProduct.variants[2].discount.amount = 0;
      stubConfigurableProduct.variants[3].discount.amount = 0;
      store.dispatch(new DaffProductGridLoadSuccess([stubConfigurableProduct]));
      store.dispatch(new DaffConfigurableProductApplyAttribute(
        stubConfigurableProduct.id,
        stubConfigurableProduct.configurableAttributes[0].code,
        stubConfigurableProduct.variants[0].appliedAttributes[stubConfigurableProduct.configurableAttributes[0].code],
      ));
      const selector = store.pipe(select(selectConfigurableProductHasDiscount(stubConfigurableProduct.id)));
      const expected = cold('a', { a: false });

      expect(selector).toBeObservable(expected);
    });

    it('should not emit when an unrelated piece of state changes', () => {
      store.dispatch(new DaffProductLoadSuccess({
        id: stubConfigurableProduct.id,
        products: [stubConfigurableProduct],
      }));

      const spy = jasmine.createSpy();
      const selector = store.pipe(select(selectConfigurableProductHasDiscount(stubConfigurableProduct.id)));

      selector.subscribe(spy);

      store.dispatch(new DaffProductGridLoad());

      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('selectConfigurableProductMinimumPrice', () => {

    it('should return the minimum price of the range of variant prices', () => {
      stubConfigurableProduct.variants[0].price = 2;
      stubConfigurableProduct.variants[1].price = 1;
      stubConfigurableProduct.variants[2].price = 3;
      stubConfigurableProduct.variants[3].price = 4;
      store.dispatch(new DaffProductGridLoadSuccess([stubConfigurableProduct]));
      store.dispatch(new DaffConfigurableProductApplyAttribute(
        stubConfigurableProduct.id,
        stubConfigurableProduct.configurableAttributes[0].code,
        stubConfigurableProduct.variants[0].appliedAttributes[stubConfigurableProduct.configurableAttributes[0].code],
      ));
      const selector = store.pipe(select(selectConfigurableProductMinimumPrice(stubConfigurableProduct.id)));
      const expected = cold('a', { a: 1 });

      expect(selector).toBeObservable(expected);
    });

    it('should not emit when an unrelated piece of state changes', () => {
      store.dispatch(new DaffProductLoadSuccess({
        id: stubConfigurableProduct.id,
        products: [stubConfigurableProduct],
      }));

      const spy = jasmine.createSpy();
      const selector = store.pipe(select(selectConfigurableProductMinimumPrice(stubConfigurableProduct.id)));

      selector.subscribe(spy);

      store.dispatch(new DaffProductGridLoad());

      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('selectConfigurableProductMaximumPrice', () => {

    it('should return the maximum price of the range of variant prices', () => {
      stubConfigurableProduct.variants[0].price = 2;
      stubConfigurableProduct.variants[1].price = 1;
      stubConfigurableProduct.variants[2].price = 3;
      stubConfigurableProduct.variants[3].price = 4;
      store.dispatch(new DaffProductGridLoadSuccess([stubConfigurableProduct]));
      store.dispatch(new DaffConfigurableProductApplyAttribute(
        stubConfigurableProduct.id,
        stubConfigurableProduct.configurableAttributes[0].code,
        stubConfigurableProduct.variants[0].appliedAttributes[stubConfigurableProduct.configurableAttributes[0].code],
      ));
      const selector = store.pipe(select(selectConfigurableProductMaximumPrice(stubConfigurableProduct.id)));
      const expected = cold('a', { a: 4 });

      expect(selector).toBeObservable(expected);
    });

    it('should not emit when an unrelated piece of state changes', () => {
      store.dispatch(new DaffProductLoadSuccess({
        id: stubConfigurableProduct.id,
        products: [stubConfigurableProduct],
      }));

      const spy = jasmine.createSpy();
      const selector = store.pipe(select(selectConfigurableProductMaximumPrice(stubConfigurableProduct.id)));

      selector.subscribe(spy);

      store.dispatch(new DaffProductGridLoad());

      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('selectConfigurableProductMinimumDiscountedPrice', () => {

    it('should return the minimum discounted price of the range of variant discounted prices', () => {
      stubConfigurableProduct.variants[0].price = 10;
      stubConfigurableProduct.variants[1].price = 10;
      stubConfigurableProduct.variants[2].price = 10;
      stubConfigurableProduct.variants[3].price = 10;
      stubConfigurableProduct.variants[0].discount.amount = 2;
      stubConfigurableProduct.variants[1].discount.amount = 1;
      stubConfigurableProduct.variants[2].discount.amount = 3;
      stubConfigurableProduct.variants[3].discount.amount = 4;
      store.dispatch(new DaffProductGridLoadSuccess([stubConfigurableProduct]));
      store.dispatch(new DaffConfigurableProductApplyAttribute(
        stubConfigurableProduct.id,
        stubConfigurableProduct.configurableAttributes[0].code,
        stubConfigurableProduct.variants[0].appliedAttributes[stubConfigurableProduct.configurableAttributes[0].code],
      ));
      const selector = store.pipe(select(selectConfigurableProductMinimumDiscountedPrice(stubConfigurableProduct.id)));
      const expected = cold('a', { a: 6 });

      expect(selector).toBeObservable(expected);
    });

    it('should not emit when an unrelated piece of state changes', () => {
      store.dispatch(new DaffProductLoadSuccess({
        id: stubConfigurableProduct.id,
        products: [stubConfigurableProduct],
      }));

      const spy = jasmine.createSpy();
      const selector = store.pipe(select(selectConfigurableProductMinimumDiscountedPrice(stubConfigurableProduct.id)));

      selector.subscribe(spy);

      store.dispatch(new DaffProductGridLoad());

      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('selectConfigurableProductMaximumDiscountedPrice', () => {

    it('should return the maximum discounted price of the range of variant discounted prices', () => {
      stubConfigurableProduct.variants[0].price = 10;
      stubConfigurableProduct.variants[1].price = 10;
      stubConfigurableProduct.variants[2].price = 10;
      stubConfigurableProduct.variants[3].price = 10;
      stubConfigurableProduct.variants[0].discount.amount = 2;
      stubConfigurableProduct.variants[1].discount.amount = 1;
      stubConfigurableProduct.variants[2].discount.amount = 3;
      stubConfigurableProduct.variants[3].discount.amount = 4;
      store.dispatch(new DaffProductGridLoadSuccess([stubConfigurableProduct]));
      store.dispatch(new DaffConfigurableProductApplyAttribute(
        stubConfigurableProduct.id,
        stubConfigurableProduct.configurableAttributes[0].code,
        stubConfigurableProduct.variants[0].appliedAttributes[stubConfigurableProduct.configurableAttributes[0].code],
      ));
      const selector = store.pipe(select(selectConfigurableProductMaximumDiscountedPrice(stubConfigurableProduct.id)));
      const expected = cold('a', { a: 9 });

      expect(selector).toBeObservable(expected);
    });

    it('should not emit when an unrelated piece of state changes', () => {
      store.dispatch(new DaffProductLoadSuccess({
        id: stubConfigurableProduct.id,
        products: [stubConfigurableProduct],
      }));

      const spy = jasmine.createSpy();
      const selector = store.pipe(select(selectConfigurableProductMaximumDiscountedPrice(stubConfigurableProduct.id)));

      selector.subscribe(spy);

      store.dispatch(new DaffProductGridLoad());

      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('selectConfigurableProductMinimumPercentDiscount', () => {

    it('should return the maximum percent discount of the range of variant discounted prices', () => {
      stubConfigurableProduct.variants[0].discount.percent = 2;
      stubConfigurableProduct.variants[1].discount.percent = 1;
      stubConfigurableProduct.variants[2].discount.percent = 3;
      stubConfigurableProduct.variants[3].discount.percent = 4;
      store.dispatch(new DaffProductGridLoadSuccess([stubConfigurableProduct]));
      store.dispatch(new DaffConfigurableProductApplyAttribute(
        stubConfigurableProduct.id,
        stubConfigurableProduct.configurableAttributes[0].code,
        stubConfigurableProduct.variants[0].appliedAttributes[stubConfigurableProduct.configurableAttributes[0].code],
      ));
      const selector = store.pipe(select(selectConfigurableProductMinimumPercentDiscount(stubConfigurableProduct.id)));
      const expected = cold('a', { a: 1 });

      expect(selector).toBeObservable(expected);
    });

    it('should not emit when an unrelated piece of state changes', () => {
      store.dispatch(new DaffProductLoadSuccess({
        id: stubConfigurableProduct.id,
        products: [stubConfigurableProduct],
      }));

      const spy = jasmine.createSpy();
      const selector = store.pipe(select(selectConfigurableProductMinimumPercentDiscount(stubConfigurableProduct.id)));

      selector.subscribe(spy);

      store.dispatch(new DaffProductGridLoad());

      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('selectConfigurableProductMaximumPercentDiscount', () => {

    it('should return the maximum percent discount of the range of variant discounted prices', () => {
      stubConfigurableProduct.variants[0].discount.percent = 2;
      stubConfigurableProduct.variants[1].discount.percent = 1;
      stubConfigurableProduct.variants[2].discount.percent = 3;
      stubConfigurableProduct.variants[3].discount.percent = 4;
      store.dispatch(new DaffProductGridLoadSuccess([stubConfigurableProduct]));
      store.dispatch(new DaffConfigurableProductApplyAttribute(
        stubConfigurableProduct.id,
        stubConfigurableProduct.configurableAttributes[0].code,
        stubConfigurableProduct.variants[0].appliedAttributes[stubConfigurableProduct.configurableAttributes[0].code],
      ));
      const selector = store.pipe(select(selectConfigurableProductMaximumPercentDiscount(stubConfigurableProduct.id)));
      const expected = cold('a', { a: 4 });

      expect(selector).toBeObservable(expected);
    });

    it('should not emit when an unrelated piece of state changes', () => {
      store.dispatch(new DaffProductLoadSuccess({
        id: stubConfigurableProduct.id,
        products: [stubConfigurableProduct],
      }));

      const spy = jasmine.createSpy();
      const selector = store.pipe(select(selectConfigurableProductMaximumPercentDiscount(stubConfigurableProduct.id)));

      selector.subscribe(spy);

      store.dispatch(new DaffProductGridLoad());

      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('isConfigurablePriceRanged', () => {

    it('should return true when more than one price is possible', () => {
      stubConfigurableProduct.variants[0].price = 2;
      stubConfigurableProduct.variants[1].price = 1;
      stubConfigurableProduct.variants[2].price = 3;
      stubConfigurableProduct.variants[3].price = 4;
      store.dispatch(new DaffProductLoadSuccess({
        id: stubConfigurableProduct.id,
        products: [stubConfigurableProduct],
      }));
      store.dispatch(new DaffConfigurableProductApplyAttribute(
        stubConfigurableProduct.id,
        stubConfigurableProduct.configurableAttributes[0].code,
        stubConfigurableProduct.variants[0].appliedAttributes[stubConfigurableProduct.configurableAttributes[0].code],
      ));
      const selector = store.pipe(select(isConfigurablePriceRanged(stubConfigurableProduct.id)));
      const expected = cold('a', { a: true });

      expect(selector).toBeObservable(expected);
    });

    it('should return false when only one price is possible', () => {
      store.dispatch(new DaffProductLoadSuccess({
        id: stubConfigurableProduct.id,
        products: [stubConfigurableProduct],
      }));
      store.dispatch(new DaffConfigurableProductApplyAttribute(
        stubConfigurableProduct.id,
        stubConfigurableProduct.configurableAttributes[0].code,
        stubConfigurableProduct.variants[0].appliedAttributes[stubConfigurableProduct.configurableAttributes[0].code],
      ));
      store.dispatch(new DaffConfigurableProductApplyAttribute(
        stubConfigurableProduct.id,
        stubConfigurableProduct.configurableAttributes[1].code,
        stubConfigurableProduct.variants[0].appliedAttributes[stubConfigurableProduct.configurableAttributes[1].code],
      ));
      store.dispatch(new DaffConfigurableProductApplyAttribute(
        stubConfigurableProduct.id,
        stubConfigurableProduct.configurableAttributes[2].code,
        stubConfigurableProduct.variants[0].appliedAttributes[stubConfigurableProduct.configurableAttributes[2].code],
      ));
      const selector = store.pipe(select(isConfigurablePriceRanged(stubConfigurableProduct.id)));
      const expected = cold('a', { a: false });

      expect(selector).toBeObservable(expected);
    });

    it('should not emit when an unrelated piece of state changes', () => {
      store.dispatch(new DaffProductLoadSuccess({
        id: stubConfigurableProduct.id,
        products: [stubConfigurableProduct],
      }));

      const spy = jasmine.createSpy();
      const selector = store.pipe(select(isConfigurablePriceRanged(stubConfigurableProduct.id)));

      selector.subscribe(spy);

      store.dispatch(new DaffProductGridLoad());

      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('selectMatchingConfigurableProductVariants', () => {

    it('returns the variants that match current attribute filters', () => {
      store.dispatch(new DaffProductLoadSuccess({
        id: stubConfigurableProduct.id,
        products: [stubConfigurableProduct],
      }));
      store.dispatch(new DaffConfigurableProductApplyAttribute(
        stubConfigurableProduct.id,
        stubConfigurableProduct.configurableAttributes[0].code,
        stubConfigurableProduct.variants[0].appliedAttributes[stubConfigurableProduct.configurableAttributes[0].code],
      ));
      const selector = store.pipe(select(selectMatchingConfigurableProductVariants(stubConfigurableProduct.id)));
      const expected = cold('a', { a:
				stubConfigurableProduct.variants.slice(0, 4) });

      expect(selector).toBeObservable(expected);
    });

    it('only returns variants that are in stock', () => {
      stubConfigurableProduct.variants[0].in_stock = false;

      store.dispatch(new DaffProductLoadSuccess({
        id: stubConfigurableProduct.id,
        products: [stubConfigurableProduct],
      }));
      store.dispatch(new DaffConfigurableProductApplyAttribute(
        stubConfigurableProduct.id,
        stubConfigurableProduct.configurableAttributes[0].code,
        stubConfigurableProduct.variants[0].appliedAttributes[stubConfigurableProduct.configurableAttributes[0].code],
      ));
      const selector = store.pipe(select(selectMatchingConfigurableProductVariants(stubConfigurableProduct.id)));
      const expected = cold('a', { a:
				stubConfigurableProduct.variants.slice(1, 4) });

      expect(selector).toBeObservable(expected);
    });

    it('should not emit when an unrelated piece of state changes', () => {
      store.dispatch(new DaffProductLoadSuccess({
        id: stubConfigurableProduct.id,
        products: [stubConfigurableProduct],
      }));

      const spy = jasmine.createSpy();
      const selector = store.pipe(select(selectMatchingConfigurableProductVariants(stubConfigurableProduct.id)));

      selector.subscribe(spy);

      store.dispatch(new DaffProductGridLoad());

      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('selectSelectableConfigurableProductAttributes', () => {

    it('returns a dictionary of attribute values that are still selectable', () => {
      store.dispatch(new DaffProductLoadSuccess({
        id: stubConfigurableProduct.id,
        products: [stubConfigurableProduct],
      }));
      const selector = store.pipe(select(selectSelectableConfigurableProductAttributes(stubConfigurableProduct.id)));
      const expected = cold('a', {
        a: {
          color: ['0', '1', '2'],
          size: ['0', '1', '2'],
          material: ['0', '2', '1'],
        },
      });

      expect(selector).toBeObservable(expected);
    });

    it('returns expected dictionary when variants are out of stock', () => {
      stubConfigurableProduct.variants = stubConfigurableProduct.variants.map(variant => {
        if(variant.appliedAttributes['material'] === '1') {
          variant.in_stock = false;
        }

        return variant;
      });
      store.dispatch(new DaffProductLoadSuccess({
        id: stubConfigurableProduct.id,
        products: [stubConfigurableProduct],
      }));
      const selector = store.pipe(select(selectSelectableConfigurableProductAttributes(stubConfigurableProduct.id)));
      const expected = cold('a', {
        a: {
          color: ['0', '1', '2'],
          size: ['0', '1', '2'],
          material: ['0', '2'],
        },
      });

      expect(selector).toBeObservable(expected);
    });

    it('should not emit when an unrelated piece of state changes', () => {
      store.dispatch(new DaffProductLoadSuccess({
        id: stubConfigurableProduct.id,
        products: [stubConfigurableProduct],
      }));

      const spy = jasmine.createSpy();
      const selector = store.pipe(select(selectSelectableConfigurableProductAttributes(stubConfigurableProduct.id)));

      selector.subscribe(spy);

      store.dispatch(new DaffProductGridLoad());

      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});
