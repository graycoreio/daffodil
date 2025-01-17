import { TestBed } from '@angular/core/testing';
import {
  Store,
  StoreModule,
  combineReducers,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import {
  DaffProductLoadSuccess,
  daffProductReducers,
  DaffProductStateRootSlice,
  DAFF_PRODUCT_STORE_FEATURE_KEY,
} from '@daffodil/product/state';
import { DaffConfigurableProduct } from '@daffodil/product-configurable';
import {
  DAFF_CONFIGURABLE_PRODUCT_STORE_FEATURE_KEY,
  daffConfigurableProductReducers,
  DaffConfigurableProductApplyAttribute,
} from '@daffodil/product-configurable/state';
import { DaffConfigurableProductFactory } from '@daffodil/product-configurable/testing';

import { DaffConfigurableProductFacade } from './configurable-product.facade';

describe('DaffConfigurableProductFacade', () => {
  let store: Store<DaffProductStateRootSlice>;
  let facade: DaffConfigurableProductFacade;
  let stubConfigurableProduct: DaffConfigurableProduct;
  let configurableProductFactory: DaffConfigurableProductFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        StoreModule.forRoot({
          [DAFF_CONFIGURABLE_PRODUCT_STORE_FEATURE_KEY]: combineReducers(daffConfigurableProductReducers),
          [DAFF_PRODUCT_STORE_FEATURE_KEY]: combineReducers(daffProductReducers),
        }),
      ],
      providers: [
        DaffConfigurableProductFacade,
      ],
    });

    store = TestBed.inject(Store);
    facade = TestBed.inject(DaffConfigurableProductFacade);
    configurableProductFactory = TestBed.inject(DaffConfigurableProductFactory);
    stubConfigurableProduct = configurableProductFactory.create();
    store.dispatch(new DaffProductLoadSuccess({
      id: stubConfigurableProduct.id,
      products: [stubConfigurableProduct],
    }));
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

  describe('getAllAttributes', () => {

    it('should return an Observable dictionary of all attributes', () => {
      const expected = cold('a', {
        a: {
          [stubConfigurableProduct.configurableAttributes[0].code]: [
            stubConfigurableProduct.configurableAttributes[0].values[0].value,
            stubConfigurableProduct.configurableAttributes[0].values[1].value,
            stubConfigurableProduct.configurableAttributes[0].values[2].value,
          ],
          [stubConfigurableProduct.configurableAttributes[1].code]: [
            stubConfigurableProduct.configurableAttributes[1].values[0].value,
            stubConfigurableProduct.configurableAttributes[1].values[1].value,
            stubConfigurableProduct.configurableAttributes[1].values[2].value,
          ],
          [stubConfigurableProduct.configurableAttributes[2].code]: [
            stubConfigurableProduct.configurableAttributes[2].values[0].value,
            stubConfigurableProduct.configurableAttributes[2].values[1].value,
            stubConfigurableProduct.configurableAttributes[2].values[2].value,
          ],
        },
      });
      store.dispatch(new DaffConfigurableProductApplyAttribute(
        stubConfigurableProduct.id,
        stubConfigurableProduct.configurableAttributes[0].code,
        stubConfigurableProduct.configurableAttributes[0].values[0].value,
      ));
      expect(facade.getAllAttributes(stubConfigurableProduct.id)).toBeObservable(expected);
    });
  });

  describe('getAllVariants', () => {

    it('should return an Observable dictionary of all attributes', () => {
      const expected = cold('a', { a: stubConfigurableProduct.variants });

      expect(facade.getAllVariants(stubConfigurableProduct.id)).toBeObservable(expected);
    });
  });

  describe('getAppliedAttributes', () => {

    it('should return an Observable dictionary of applied attributes', () => {
      const expected = cold('a', {
        a: {
          [stubConfigurableProduct.configurableAttributes[0].code]: stubConfigurableProduct.configurableAttributes[0].values[0].value,
        },
      });
      store.dispatch(new DaffConfigurableProductApplyAttribute(
        stubConfigurableProduct.id,
        stubConfigurableProduct.configurableAttributes[0].code,
        stubConfigurableProduct.configurableAttributes[0].values[0].value,
      ));
      expect(facade.getAppliedAttributes(stubConfigurableProduct.id)).toBeObservable(expected);
    });
  });

  describe('getMinimumPrice', () => {

    it('should return the minimum possible price for a configurable product', () => {
      const product = {
        ...stubConfigurableProduct,
        variants: [
          {
            ...stubConfigurableProduct.variants[0],
            price: 2,
          },
          {
            ...stubConfigurableProduct.variants[1],
            price: 1,
          },
          {
            ...stubConfigurableProduct.variants[2],
            price: 4,
          },
          {
            ...stubConfigurableProduct.variants[3],
            price: 3,
          },
          ...stubConfigurableProduct.variants.slice(4),
        ],
      };
      store.dispatch(new DaffProductLoadSuccess({
        id: product.id,
        products: [product],
      }));
      const expected = cold('a', { a: 1 });

      store.dispatch(new DaffConfigurableProductApplyAttribute(
        stubConfigurableProduct.id,
        stubConfigurableProduct.configurableAttributes[0].code,
        stubConfigurableProduct.configurableAttributes[0].values[0].value,
      ));
      expect(facade.getMinimumPrice(stubConfigurableProduct.id)).toBeObservable(expected);
    });
  });

  describe('getMaximumPrice', () => {

    it('should return the minimum possible price for a configurable product', () => {
      const product = {
        ...stubConfigurableProduct,
        variants: [
          {
            ...stubConfigurableProduct.variants[0],
            price: 2,
          },
          {
            ...stubConfigurableProduct.variants[1],
            price: 1,
          },
          {
            ...stubConfigurableProduct.variants[2],
            price: 4,
          },
          {
            ...stubConfigurableProduct.variants[3],
            price: 3,
          },
          ...stubConfigurableProduct.variants.slice(4),
        ],
      };
      store.dispatch(new DaffProductLoadSuccess({
        id: product.id,
        products: [product],
      }));
      const expected = cold('a', { a: 4 });

      store.dispatch(new DaffConfigurableProductApplyAttribute(
        stubConfigurableProduct.id,
        stubConfigurableProduct.configurableAttributes[0].code,
        stubConfigurableProduct.configurableAttributes[0].values[0].value,
      ));
      expect(facade.getMaximumPrice(stubConfigurableProduct.id)).toBeObservable(expected);
    });
  });

  describe('getMinimumDiscountedPrice', () => {

    it('should return the minimum possible discounted price for a configurable product', () => {
      const product  = {
        ...stubConfigurableProduct,
        variants: [
          {
            ...stubConfigurableProduct.variants[0],
            price: 4,
            discount: {
              ...stubConfigurableProduct.variants[0].discount,
              amount: 3,
            },
          },
          {
            ...stubConfigurableProduct.variants[1],
            price: 4,
            discount: {
              ...stubConfigurableProduct.variants[1].discount,
              amount: 2,
            },
          },
          {
            ...stubConfigurableProduct.variants[2],
            price: 4,
            discount: {
              ...stubConfigurableProduct.variants[2].discount,
              amount: 1,
            },
          },
          {
            ...stubConfigurableProduct.variants[3],
            price: 4,
            discount: {
              ...stubConfigurableProduct.variants[3].discount,
              amount: 3,
            },
          },
          ...stubConfigurableProduct.variants.slice(4),
        ],
      };
      store.dispatch(new DaffProductLoadSuccess({
        id: product.id,
        products: [product],
      }));
      const expected = cold('a', { a: 1 });

      store.dispatch(new DaffConfigurableProductApplyAttribute(
        stubConfigurableProduct.id,
        stubConfigurableProduct.configurableAttributes[0].code,
        stubConfigurableProduct.configurableAttributes[0].values[0].value,
      ));
      expect(facade.getMinimumDiscountedPrice(stubConfigurableProduct.id)).toBeObservable(expected);
    });
  });

  describe('getMaximumDiscountedPrice', () => {

    it('should return the maximum possible discounted price for a configurable product', () => {
      const product = {
        ...stubConfigurableProduct,
        variants: [
          {
            ...stubConfigurableProduct.variants[0],
            price: 4,
            discount: {
              ...stubConfigurableProduct.variants[0].discount,
              amount: 3,
            },
          },
          {
            ...stubConfigurableProduct.variants[1],
            price: 4,
            discount: {
              ...stubConfigurableProduct.variants[1].discount,
              amount: 2,
            },
          },
          {
            ...stubConfigurableProduct.variants[2],
            price: 4,
            discount: {
              ...stubConfigurableProduct.variants[2].discount,
              amount: 1,
            },
          },
          {
            ...stubConfigurableProduct.variants[3],
            price: 4,
            discount: {
              ...stubConfigurableProduct.variants[3].discount,
              amount: 3,
            },
          },
          ...stubConfigurableProduct.variants.slice(4),
        ],
      };
      store.dispatch(new DaffProductLoadSuccess({
        id: product.id,
        products: [product],
      }));
      const expected = cold('a', { a: 3 });

      store.dispatch(new DaffConfigurableProductApplyAttribute(
        stubConfigurableProduct.id,
        stubConfigurableProduct.configurableAttributes[0].code,
        stubConfigurableProduct.configurableAttributes[0].values[0].value,
      ));
      expect(facade.getMaximumDiscountedPrice(stubConfigurableProduct.id)).toBeObservable(expected);
    });
  });

  describe('getMinimumPercentDiscount', () => {

    it('should return the minimum possible percent discount for a configurable product', () => {
      const product = {
        ...stubConfigurableProduct,
        variants: [
          {
            ...stubConfigurableProduct.variants[0],
            discount: {
              ...stubConfigurableProduct.variants[0].discount,
              percent: 3,
            },
          },
          {
            ...stubConfigurableProduct.variants[1],
            discount: {
              ...stubConfigurableProduct.variants[1].discount,
              percent: 2,
            },
          },
          {
            ...stubConfigurableProduct.variants[2],
            discount: {
              ...stubConfigurableProduct.variants[2].discount,
              percent: 1,
            },
          },
          {
            ...stubConfigurableProduct.variants[3],
            discount: {
              ...stubConfigurableProduct.variants[3].discount,
              percent: 3,
            },
          },
          ...stubConfigurableProduct.variants.slice(4),
        ],
      };
      store.dispatch(new DaffProductLoadSuccess({
        id: product.id,
        products: [product],
      }));
      const expected = cold('a', { a: 1 });

      store.dispatch(new DaffConfigurableProductApplyAttribute(
        stubConfigurableProduct.id,
        stubConfigurableProduct.configurableAttributes[0].code,
        stubConfigurableProduct.configurableAttributes[0].values[0].value,
      ));
      expect(facade.getMinimumPercentDiscount(stubConfigurableProduct.id)).toBeObservable(expected);
    });
  });

  describe('getMaximumPercentDiscount', () => {

    it('should return the maximum possible percent discount for a configurable product', () => {
      const product = {
        ...stubConfigurableProduct,
        variants: [
          {
            ...stubConfigurableProduct.variants[0],
            discount: {
              ...stubConfigurableProduct.variants[0].discount,
              percent: 3,
            },
          },
          {
            ...stubConfigurableProduct.variants[1],
            discount: {
              ...stubConfigurableProduct.variants[1].discount,
              percent: 2,
            },
          },
          {
            ...stubConfigurableProduct.variants[2],
            discount: {
              ...stubConfigurableProduct.variants[2].discount,
              percent: 1,
            },
          },
          {
            ...stubConfigurableProduct.variants[3],
            discount: {
              ...stubConfigurableProduct.variants[3].discount,
              percent: 3,
            },
          },
          ...stubConfigurableProduct.variants.slice(4),
        ],
      };
      store.dispatch(new DaffProductLoadSuccess({
        id: product.id,
        products: [product],
      }));
      const expected = cold('a', { a: 3 });

      store.dispatch(new DaffConfigurableProductApplyAttribute(
        stubConfigurableProduct.id,
        stubConfigurableProduct.configurableAttributes[0].code,
        stubConfigurableProduct.configurableAttributes[0].values[0].value,
      ));
      expect(facade.getMaximumPercentDiscount(stubConfigurableProduct.id)).toBeObservable(expected);
    });
  });

  describe('isPriceRanged', () => {

    it('should return whether the possible price is a range of prices', () => {
      const product = {
        ...stubConfigurableProduct,
        variants: [
          {
            ...stubConfigurableProduct.variants[0],
            price: 2,
          },
          {
            ...stubConfigurableProduct.variants[1],
            price: 1,
          },
          {
            ...stubConfigurableProduct.variants[2],
            price: 4,
          },
          {
            ...stubConfigurableProduct.variants[3],
            price: 3,
          },
          ...stubConfigurableProduct.variants.slice(4),
        ],
      };
      store.dispatch(new DaffProductLoadSuccess({
        id: product.id,
        products: [product],
      }));
      const expected = cold('a', { a: true });

      store.dispatch(new DaffConfigurableProductApplyAttribute(
        stubConfigurableProduct.id,
        stubConfigurableProduct.configurableAttributes[0].code,
        stubConfigurableProduct.configurableAttributes[0].values[0].value,
      ));
      expect(facade.isPriceRanged(stubConfigurableProduct.id)).toBeObservable(expected);
    });
  });

  describe('hasDiscount', () => {

    it('should return whether a variant of the configurable product has a discount', () => {
      const product = {
        ...stubConfigurableProduct,
        variants: [
          {
            ...stubConfigurableProduct.variants[0],
            discount: {
              ...stubConfigurableProduct.variants[0].discount,
              amount: 3,
            },
          },
          {
            ...stubConfigurableProduct.variants[1],
            discount: {
              ...stubConfigurableProduct.variants[1].discount,
              amount: 2,
            },
          },
          {
            ...stubConfigurableProduct.variants[2],
            discount: {
              ...stubConfigurableProduct.variants[2].discount,
              amount: 1,
            },
          },
          {
            ...stubConfigurableProduct.variants[3],
            discount: {
              ...stubConfigurableProduct.variants[3].discount,
              amount: 3,
            },
          },
          ...stubConfigurableProduct.variants.slice(4),
        ],
      };
      store.dispatch(new DaffProductLoadSuccess({
        id: product.id,
        products: [product],
      }));
      const expected = cold('a', { a: true });

      store.dispatch(new DaffConfigurableProductApplyAttribute(
        stubConfigurableProduct.id,
        stubConfigurableProduct.configurableAttributes[0].code,
        stubConfigurableProduct.configurableAttributes[0].values[0].value,
      ));
      expect(facade.hasDiscount(stubConfigurableProduct.id)).toBeObservable(expected);
    });
  });

  describe('getSelectableAttributes', () => {

    it('should return the selectable attributes for a configurable product', () => {
      const expected = cold('a', {
        a: {
          [stubConfigurableProduct.configurableAttributes[0].code]: [
            stubConfigurableProduct.configurableAttributes[0].values[0].value,
            stubConfigurableProduct.configurableAttributes[0].values[1].value,
            stubConfigurableProduct.configurableAttributes[0].values[2].value,
          ],
          [stubConfigurableProduct.configurableAttributes[1].code]: [
            stubConfigurableProduct.configurableAttributes[1].values[0].value,
            stubConfigurableProduct.configurableAttributes[1].values[1].value,
            stubConfigurableProduct.configurableAttributes[1].values[2].value,
          ],
          [stubConfigurableProduct.configurableAttributes[2].code]: [
            stubConfigurableProduct.configurableAttributes[2].values[0].value,
            stubConfigurableProduct.configurableAttributes[2].values[2].value,
            stubConfigurableProduct.configurableAttributes[2].values[1].value,
          ],
        },
      });

      expect(facade.getSelectableAttributes(stubConfigurableProduct.id)).toBeObservable(expected);
    });
  });

  describe('getMatchingVariants', () => {

    it('should return variants that match the applied attributes for a configurable product', () => {
      store.dispatch(new DaffProductLoadSuccess({
        id: stubConfigurableProduct.id,
        products: [stubConfigurableProduct],
      }));
      store.dispatch(new DaffConfigurableProductApplyAttribute(
        stubConfigurableProduct.id,
        stubConfigurableProduct.configurableAttributes[0].code,
        stubConfigurableProduct.variants[0].appliedAttributes[stubConfigurableProduct.configurableAttributes[0].code],
      ));
      const expected = cold('a', { a:
				stubConfigurableProduct.variants.slice(0, 4) });

      expect(facade.getMatchingVariants(stubConfigurableProduct.id)).toBeObservable(expected);
    });
  });
});
