import { TestBed } from '@angular/core/testing';
import {
  Store,
  StoreModule,
  combineReducers,
} from '@ngrx/store';
import { TestScheduler } from 'rxjs/testing';

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
  let scheduler: TestScheduler;

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });

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
      store.dispatch(new DaffConfigurableProductApplyAttribute(
        stubConfigurableProduct.id,
        stubConfigurableProduct.configurableAttributes[0].code,
        stubConfigurableProduct.configurableAttributes[0].values[0].value,
      ));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.getAllAttributes(stubConfigurableProduct.id)).toBe('a', {
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
      });
    });
  });

  describe('getAllVariants', () => {

    it('should return an Observable dictionary of all attributes', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.getAllVariants(stubConfigurableProduct.id)).toBe('a', { a: stubConfigurableProduct.variants });
      });
    });
  });

  describe('getAppliedAttributes', () => {

    it('should return an Observable dictionary of applied attributes', () => {
      store.dispatch(new DaffConfigurableProductApplyAttribute(
        stubConfigurableProduct.id,
        stubConfigurableProduct.configurableAttributes[0].code,
        stubConfigurableProduct.configurableAttributes[0].values[0].value,
      ));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.getAppliedAttributes(stubConfigurableProduct.id)).toBe('a', {
          a: {
            [stubConfigurableProduct.configurableAttributes[0].code]: stubConfigurableProduct.configurableAttributes[0].values[0].value,
          },
        });
      });
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

      store.dispatch(new DaffConfigurableProductApplyAttribute(
        stubConfigurableProduct.id,
        stubConfigurableProduct.configurableAttributes[0].code,
        stubConfigurableProduct.configurableAttributes[0].values[0].value,
      ));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.getMinimumPrice(stubConfigurableProduct.id)).toBe('a', { a: 1 });
      });
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

      store.dispatch(new DaffConfigurableProductApplyAttribute(
        stubConfigurableProduct.id,
        stubConfigurableProduct.configurableAttributes[0].code,
        stubConfigurableProduct.configurableAttributes[0].values[0].value,
      ));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.getMaximumPrice(stubConfigurableProduct.id)).toBe('a', { a: 4 });
      });
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

      store.dispatch(new DaffConfigurableProductApplyAttribute(
        stubConfigurableProduct.id,
        stubConfigurableProduct.configurableAttributes[0].code,
        stubConfigurableProduct.configurableAttributes[0].values[0].value,
      ));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.getMinimumDiscountedPrice(stubConfigurableProduct.id)).toBe('a', { a: 1 });
      });
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

      store.dispatch(new DaffConfigurableProductApplyAttribute(
        stubConfigurableProduct.id,
        stubConfigurableProduct.configurableAttributes[0].code,
        stubConfigurableProduct.configurableAttributes[0].values[0].value,
      ));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.getMaximumDiscountedPrice(stubConfigurableProduct.id)).toBe('a', { a: 3 });
      });
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

      store.dispatch(new DaffConfigurableProductApplyAttribute(
        stubConfigurableProduct.id,
        stubConfigurableProduct.configurableAttributes[0].code,
        stubConfigurableProduct.configurableAttributes[0].values[0].value,
      ));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.getMinimumPercentDiscount(stubConfigurableProduct.id)).toBe('a', { a: 1 });
      });
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

      store.dispatch(new DaffConfigurableProductApplyAttribute(
        stubConfigurableProduct.id,
        stubConfigurableProduct.configurableAttributes[0].code,
        stubConfigurableProduct.configurableAttributes[0].values[0].value,
      ));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.getMaximumPercentDiscount(stubConfigurableProduct.id)).toBe('a', { a: 3 });
      });
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

      store.dispatch(new DaffConfigurableProductApplyAttribute(
        stubConfigurableProduct.id,
        stubConfigurableProduct.configurableAttributes[0].code,
        stubConfigurableProduct.configurableAttributes[0].values[0].value,
      ));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.isPriceRanged(stubConfigurableProduct.id)).toBe('a', { a: true });
      });
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

      store.dispatch(new DaffConfigurableProductApplyAttribute(
        stubConfigurableProduct.id,
        stubConfigurableProduct.configurableAttributes[0].code,
        stubConfigurableProduct.configurableAttributes[0].values[0].value,
      ));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.hasDiscount(stubConfigurableProduct.id)).toBe('a', { a: true });
      });
    });
  });

  describe('getSelectableAttributes', () => {

    it('should return the selectable attributes for a configurable product', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.getSelectableAttributes(stubConfigurableProduct.id)).toBe('a', {
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
      });
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

      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.getMatchingVariants(stubConfigurableProduct.id)).toBe('a', { a:
				stubConfigurableProduct.variants.slice(0, 4) });
      });
    });
  });
});
