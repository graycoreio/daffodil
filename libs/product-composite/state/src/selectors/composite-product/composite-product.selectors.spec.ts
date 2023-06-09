import { TestBed } from '@angular/core/testing';
import { Dictionary } from '@ngrx/entity';
import {
  StoreModule,
  combineReducers,
  Store,
  select,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import {
  daffAdd,
  daffDivide,
  daffMultiply,
  daffSubtract,
} from '@daffodil/core';
import { DaffProduct } from '@daffodil/product';
import {
  DaffCompositeProduct,
  DaffCompositeConfigurationItem,
} from '@daffodil/product-composite';
import {
  DaffCompositeProductApplyOption,
  daffCompositeProductReducers,
} from '@daffodil/product-composite/state';
import { DaffCompositeProductStateRootSlice } from '@daffodil/product-composite/state';
import { DAFF_COMPOSITE_PRODUCT_STORE_FEATURE_KEY } from '@daffodil/product-composite/state';
import { DaffCompositeProductFactory } from '@daffodil/product-composite/testing';
import {
  DaffProductLoadSuccess,
  DaffProductGridLoad,
  daffProductReducers,
  DAFF_PRODUCT_STORE_FEATURE_KEY,
} from '@daffodil/product/state';
import { DaffProductFactory } from '@daffodil/product/testing';

import { getDaffCompositeProductPriceSelectors } from './composite-product.selectors';

describe('Composite Product Selectors | integration tests', () => {

  let store: Store<DaffCompositeProductStateRootSlice>;
  let compositeProductFactory: DaffCompositeProductFactory;
  const productFactory: DaffProductFactory = new DaffProductFactory();
  let stubCompositeProduct: DaffCompositeProduct;
  let stubProduct: DaffProduct;
  const {
    selectCompositeProductRequiredItemPricesForConfiguration,
    selectCompositeProductOptionalItemPricesForConfiguration,
    selectCompositeProductPricesAsCurrentlyConfigured,
    selectCompositeProductDiscountAmount,
    selectCompositeProductDiscountPercent,
  } = getDaffCompositeProductPriceSelectors();
  const stubPrice00 = 10;
  const stubDiscountAmount00 = 2;
  const stubPrice01 = 20;
  const stubDiscountAmount01 = 1;
  const stubPrice10 = 30;
  const stubDiscountAmount10 = 3;
  const stubPrice11 = 40;
  const stubDiscountAmount11 = 4;
  const stubQty00 = 3;
  const stubQty10 = 2;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_PRODUCT_STORE_FEATURE_KEY]: combineReducers(daffProductReducers),
          [DAFF_COMPOSITE_PRODUCT_STORE_FEATURE_KEY]: combineReducers(daffCompositeProductReducers),
        }),
      ],
    });

    compositeProductFactory = TestBed.inject(DaffCompositeProductFactory);

    stubCompositeProduct = compositeProductFactory.create();
    stubProduct = productFactory.create();

    // setup: set items to required, set a default option on each item, and set prices/discounts.
    stubCompositeProduct.items[0].required = true;
    stubCompositeProduct.items[0].options[0].is_default = true;
    stubCompositeProduct.items[0].options[0].price = stubPrice00;
    stubCompositeProduct.items[0].options[0].quantity = stubQty00;
    stubCompositeProduct.items[0].options[1].price = stubPrice01;
    stubCompositeProduct.items[0].options[0].discount = {
      amount: stubDiscountAmount00,
      percent: null,
    };
    stubCompositeProduct.items[0].options[1].discount = {
      amount: stubDiscountAmount01,
      percent: null,
    };
    stubCompositeProduct.items[1].required = false;
    stubCompositeProduct.items[1].options[0].is_default = false;
    stubCompositeProduct.items[1].options[0].price = stubPrice10;
    stubCompositeProduct.items[1].options[1].price = stubPrice11;
    stubCompositeProduct.items[1].options[0].quantity = stubQty10;
    stubCompositeProduct.items[1].options[0].discount = {
      amount: stubDiscountAmount10,
      percent: null,
    };
    stubCompositeProduct.items[1].options[1].discount = {
      amount: stubDiscountAmount11,
      percent: null,
    };
    store = TestBed.inject(Store);
    store.dispatch(new DaffProductLoadSuccess({
      id: stubCompositeProduct.id,
      products: [stubCompositeProduct, stubProduct],
    }));
  });

  describe('selectCompositeProductRequiredItemPricesForConfiguration', () => {
    it('should return undefined when the product is not a composite product', () => {
      const selector = store.pipe(select(selectCompositeProductRequiredItemPricesForConfiguration(stubProduct.id)));
      const expected = cold('a', { a: undefined });

      expect(selector).toBeObservable(expected);
    });

    it('should not emit when an unrelated piece of state changes', () => {
      const spy = jasmine.createSpy();
      const selector = store.pipe(select(selectCompositeProductRequiredItemPricesForConfiguration(stubCompositeProduct.id)));

      selector.subscribe(spy);

      store.dispatch(new DaffProductGridLoad());

      expect(spy).toHaveBeenCalledTimes(1);
    });

    // https://github.com/graycoreio/daffodil/issues/2397
    it('should return the broadest price range when no configuration is provided', () => {
      const selector = store.pipe(select(selectCompositeProductRequiredItemPricesForConfiguration(stubCompositeProduct.id)));
      const expected = cold('a', { a: {
        minPrice: {
          discountedPrice: (stubCompositeProduct.price + stubPrice00 - stubCompositeProduct.discount.amount - stubDiscountAmount00) * stubQty00,
          discount: {
            amount: null,
            percent: null,
          },
          originalPrice: (stubCompositeProduct.price + stubPrice00) * stubQty00,
        },
        maxPrice: {
          discountedPrice: (stubCompositeProduct.price + stubPrice01 - stubCompositeProduct.discount.amount - stubDiscountAmount01) * stubQty10,
          discount: {
            amount: null,
            percent: null,
          },
          originalPrice: (stubCompositeProduct.price + stubPrice01) * stubQty10,
        },
      }});

      expect(selector).toBeObservable(expected);
    });

    it('should return the expected price range when a partial configuration is provided', () => {
      const stubConfiguration: Dictionary<DaffCompositeConfigurationItem> = {
        [stubCompositeProduct.items[1].id]: {
          value: stubCompositeProduct.items[1].options[1].id,
          qty: stubQty10,
        },
      };
      const selector = store.pipe(select(selectCompositeProductRequiredItemPricesForConfiguration(stubCompositeProduct.id, stubConfiguration)));
      const expected = cold('a', { a: {
        minPrice: {
          discountedPrice: stubCompositeProduct.price - stubCompositeProduct.discount.amount +
						stubPrice00 - stubDiscountAmount00 +
						(stubPrice11 - stubDiscountAmount11) * stubQty10,
          discount: {
            amount: null,
            percent: null,
          },
          originalPrice: stubCompositeProduct.price + stubPrice00 + (stubPrice11 * stubQty10),
        },
        maxPrice: {
          discountedPrice: stubCompositeProduct.price - stubCompositeProduct.discount.amount +
						stubPrice01 - stubDiscountAmount01 +
						(stubPrice11 - stubDiscountAmount11) * stubQty10,
          discount: {
            amount: null,
            percent: null,
          },
          originalPrice: stubCompositeProduct.price + stubPrice01 + (stubPrice11 * stubQty10),
        },
      }});

      expect(selector).toBeObservable(expected);
    });

    it('should return the expected price range when a full configuration is provided', () => {
      const stubConfiguration: Dictionary<DaffCompositeConfigurationItem> = {
        [stubCompositeProduct.items[0].id]: {
          value: stubCompositeProduct.items[0].options[1].id,
          qty: stubQty00,
        },
        [stubCompositeProduct.items[1].id]: {
          value: stubCompositeProduct.items[1].options[1].id,
          qty: stubQty10,
        },
      };
      const selector = store.pipe(select(selectCompositeProductRequiredItemPricesForConfiguration(stubCompositeProduct.id, stubConfiguration)));
      const expected = cold('a', { a: {
        minPrice: {
          discountedPrice: stubCompositeProduct.price - stubCompositeProduct.discount.amount +
						(stubPrice01 - stubDiscountAmount01) * stubQty00 +
						(stubPrice11 - stubDiscountAmount11) * stubQty10,
          discount: {
            amount: null,
            percent: null,
          },
          originalPrice: stubCompositeProduct.price + (stubPrice01 * stubQty00) + (stubPrice11 * stubQty10),
        },
        maxPrice: {
          discountedPrice: stubCompositeProduct.price - stubCompositeProduct.discount.amount +
						(stubPrice01 - stubDiscountAmount01) * stubQty00 +
						(stubPrice11 - stubDiscountAmount11) * stubQty10,
          discount: {
            amount: null,
            percent: null,
          },
          originalPrice: stubCompositeProduct.price + (stubPrice01 * stubQty00) + (stubPrice11 * stubQty10),
        },
      }});

      expect(selector).toBeObservable(expected);
    });

    it('should return the expected price range when a configuration without quantities is provided', () => {
      const stubConfiguration: Dictionary<DaffCompositeConfigurationItem> = {
        [stubCompositeProduct.items[0].id]: {
          value: stubCompositeProduct.items[0].options[1].id,
        },
        [stubCompositeProduct.items[1].id]: {
          value: stubCompositeProduct.items[1].options[1].id,
        },
      };
      const selector = store.pipe(select(selectCompositeProductRequiredItemPricesForConfiguration(stubCompositeProduct.id, stubConfiguration)));
      const expected = cold('a', { a: {
        minPrice: {
          discountedPrice: stubCompositeProduct.price - stubCompositeProduct.discount.amount +
						stubPrice01 - stubDiscountAmount01 +
						stubPrice11 - stubDiscountAmount11,
          discount: {
            amount: null,
            percent: null,
          },
          originalPrice: stubCompositeProduct.price + stubPrice01 + stubPrice11,
        },
        maxPrice: {
          discountedPrice: stubCompositeProduct.price - stubCompositeProduct.discount.amount +
						stubPrice01 - stubDiscountAmount01 +
						stubPrice11 - stubDiscountAmount11,
          discount: {
            amount: null,
            percent: null,
          },
          originalPrice: stubCompositeProduct.price + stubPrice01 + stubPrice11,
        },
      }});

      expect(selector).toBeObservable(expected);
    });

    it('should return the expected price range when a configuration with only quantities is provided', () => {
      const stubConfiguration: Dictionary<DaffCompositeConfigurationItem> = {
        [stubCompositeProduct.items[0].id]: {
          qty: stubQty00,
        },
        [stubCompositeProduct.items[1].id]: {
          qty: stubQty10,
        },
      };
      const selector = store.pipe(select(selectCompositeProductRequiredItemPricesForConfiguration(stubCompositeProduct.id, stubConfiguration)));
      const expected = cold('a', { a: {
        minPrice: {
          discountedPrice: stubCompositeProduct.price - stubCompositeProduct.discount.amount +
						(stubPrice00 - stubDiscountAmount00) * stubQty00,
          discount: {
            amount: null,
            percent: null,
          },
          originalPrice: stubCompositeProduct.price + (stubPrice00 * stubQty00),
        },
        maxPrice: {
          discountedPrice: stubCompositeProduct.price - stubCompositeProduct.discount.amount +
						(stubPrice01 - stubDiscountAmount01) * stubQty00,
          discount: {
            amount: null,
            percent: null,
          },
          originalPrice: stubCompositeProduct.price + (stubPrice01 * stubQty00),
        },
      }});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCompositeProductOptionalItemPricesForConfiguration', () => {

    it('should return undefined when the product is not a composite product', () => {
      const selector = store.pipe(select(selectCompositeProductOptionalItemPricesForConfiguration(stubProduct.id)));
      const expected = cold('a', { a: undefined });

      expect(selector).toBeObservable(expected);
    });

    it('should not emit when an unrelated piece of state changes', () => {
      const spy = jasmine.createSpy();
      const selector = store.pipe(select(selectCompositeProductOptionalItemPricesForConfiguration(stubCompositeProduct.id)));

      selector.subscribe(spy);

      store.dispatch(new DaffProductGridLoad());

      expect(spy).toHaveBeenCalledTimes(1);
    });

    it(`should return the broadest price range for a composite product including optional items
				when no configuration is provided`, () => {
      const selector = store.pipe(select(selectCompositeProductOptionalItemPricesForConfiguration(stubCompositeProduct.id)));
      const expected = cold('a', { a: {
        minPrice: {
          discountedPrice: stubCompositeProduct.price + stubPrice00 - stubCompositeProduct.discount.amount - stubDiscountAmount00,
          discount: {
            amount: null,
            percent: null,
          },
          originalPrice: stubCompositeProduct.price + stubPrice00,
        },
        maxPrice: {
          discountedPrice: stubCompositeProduct.price + stubPrice01 + stubPrice11 -
						stubCompositeProduct.discount.amount - stubDiscountAmount01 - stubDiscountAmount11,
          discount: {
            amount: null,
            percent: null,
          },
          originalPrice: stubCompositeProduct.price + stubPrice01 + stubPrice11,
        },
      }});

      expect(selector).toBeObservable(expected);
    });

    it(`should return the expected price range including optional items
				when a partial configuration is provided`, () => {
      const stubConfiguration: Dictionary<DaffCompositeConfigurationItem> = {
        [stubCompositeProduct.items[0].id]: {
          value: stubCompositeProduct.items[0].options[0].id,
          qty: stubQty00,
        },
      };
      const selector = store.pipe(select(selectCompositeProductOptionalItemPricesForConfiguration(stubCompositeProduct.id, stubConfiguration)));
      const expected = cold('a', { a: {
        minPrice: {
          discountedPrice: stubCompositeProduct.price - stubCompositeProduct.discount.amount + (stubPrice00 - stubDiscountAmount00) * stubQty00,
          discount: {
            amount: null,
            percent: null,
          },
          originalPrice: stubCompositeProduct.price + (stubPrice00 * stubQty00),
        },
        maxPrice: {
          discountedPrice: stubCompositeProduct.price - stubCompositeProduct.discount.amount +
						(stubPrice00 - stubDiscountAmount00) * stubQty00 + (stubPrice11 - stubDiscountAmount11),
          discount: {
            amount: null,
            percent: null,
          },
          originalPrice: stubCompositeProduct.price + (stubPrice00 * stubQty00) + (stubPrice11),
        },
      }});

      expect(selector).toBeObservable(expected);
    });

    it(`should return the expected price range when a full configuration is provided`, () => {
      const stubConfiguration: Dictionary<DaffCompositeConfigurationItem> = {
        [stubCompositeProduct.items[0].id]: {
          value: stubCompositeProduct.items[0].options[1].id,
          qty: stubQty00,
        },
        [stubCompositeProduct.items[1].id]: {
          value: stubCompositeProduct.items[1].options[1].id,
          qty: stubQty10,
        },
      };
      const selector = store.pipe(select(selectCompositeProductOptionalItemPricesForConfiguration(stubCompositeProduct.id, stubConfiguration)));
      const expected = cold('a', { a: {
        minPrice: {
          discountedPrice: stubCompositeProduct.price - stubCompositeProduct.discount.amount +
						(stubPrice01 - stubDiscountAmount01) * stubQty00 +
						(stubPrice11 - stubDiscountAmount11) * stubQty10,
          discount: {
            amount: null,
            percent: null,
          },
          originalPrice: stubCompositeProduct.price + (stubPrice01 * stubQty00) + (stubPrice11 * stubQty10),
        },
        maxPrice: {
          discountedPrice: stubCompositeProduct.price - stubCompositeProduct.discount.amount +
						(stubPrice01 - stubDiscountAmount01) * stubQty00 +
						(stubPrice11 - stubDiscountAmount11) * stubQty10,
          discount: {
            amount: null,
            percent: null,
          },
          originalPrice: stubCompositeProduct.price + (stubPrice01 * stubQty00) + (stubPrice11 * stubQty10),
        },
      }});

      expect(selector).toBeObservable(expected);
    });

    it(`should return the expected price range when a configuration without quantities is provided`, () => {
      const stubConfiguration: Dictionary<DaffCompositeConfigurationItem> = {
        [stubCompositeProduct.items[0].id]: {
          value: stubCompositeProduct.items[0].options[1].id,
        },
        [stubCompositeProduct.items[1].id]: {
          value: stubCompositeProduct.items[1].options[1].id,
        },
      };
      const selector = store.pipe(select(selectCompositeProductOptionalItemPricesForConfiguration(stubCompositeProduct.id, stubConfiguration)));
      const expected = cold('a', { a: {
        minPrice: {
          discountedPrice: stubCompositeProduct.price - stubCompositeProduct.discount.amount +
						stubPrice01 - stubDiscountAmount01 +
						stubPrice11 - stubDiscountAmount11,
          discount: {
            amount: null,
            percent: null,
          },
          originalPrice: stubCompositeProduct.price + stubPrice01 + stubPrice11,
        },
        maxPrice: {
          discountedPrice: stubCompositeProduct.price - stubCompositeProduct.discount.amount +
						stubPrice01 - stubDiscountAmount01 +
						stubPrice11 - stubDiscountAmount11,
          discount: {
            amount: null,
            percent: null,
          },
          originalPrice: stubCompositeProduct.price + stubPrice01 + stubPrice11,
        },
      }});

      expect(selector).toBeObservable(expected);
    });

    it('should return the expected price range when a configuration with only quantities is provided', () => {
      const stubConfiguration: Dictionary<DaffCompositeConfigurationItem> = {
        [stubCompositeProduct.items[0].id]: {
          qty: stubQty00,
        },
        [stubCompositeProduct.items[1].id]: {
          qty: stubQty10,
        },
      };
      const selector = store.pipe(select(selectCompositeProductOptionalItemPricesForConfiguration(stubCompositeProduct.id, stubConfiguration)));
      const expected = cold('a', { a: {
        minPrice: {
          discountedPrice: stubCompositeProduct.price - stubCompositeProduct.discount.amount +
						(stubPrice00 - stubDiscountAmount00) * stubQty00,
          discount: {
            amount: null,
            percent: null,
          },
          originalPrice: stubCompositeProduct.price + (stubPrice00 * stubQty00),
        },
        maxPrice: {
          discountedPrice: stubCompositeProduct.price - stubCompositeProduct.discount.amount +
						(stubPrice01 - stubDiscountAmount01) * stubQty00 + (stubPrice11 - stubDiscountAmount11) * stubQty10,
          discount: {
            amount: null,
            percent: null,
          },
          originalPrice: stubCompositeProduct.price + (stubPrice01 * stubQty00) + (stubPrice11 * stubQty10),
        },
      }});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCompositeProductPricesAsCurrentlyConfigured', () => {

    it('should return undefined when the product is not a composite product', () => {
      const selector = store.pipe(select(selectCompositeProductPricesAsCurrentlyConfigured(stubProduct.id)));
      const expected = cold('a', { a: undefined });

      expect(selector).toBeObservable(expected);
    });

    it('should not emit when an unrelated piece of state changes', () => {
      const spy = jasmine.createSpy();
      const selector = store.pipe(select(selectCompositeProductPricesAsCurrentlyConfigured(stubCompositeProduct.id)));

      selector.subscribe(spy);

      store.dispatch(new DaffProductGridLoad());

      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should return the expected price range for the current configuration of the product in state', () => {
      store.dispatch(new DaffCompositeProductApplyOption(
        stubCompositeProduct.id,
				<string>stubCompositeProduct.items[0].id,
				stubCompositeProduct.items[0].options[1].id,
				stubQty00,
      ));
      store.dispatch(new DaffCompositeProductApplyOption(
        stubCompositeProduct.id,
				<string>stubCompositeProduct.items[1].id,
				stubCompositeProduct.items[1].options[1].id,
				stubQty10,
      ));

      const selector = store.pipe(select(selectCompositeProductPricesAsCurrentlyConfigured(stubCompositeProduct.id)));
      const expected = cold('a', { a: {
        minPrice: {
          discountedPrice: stubCompositeProduct.price - stubCompositeProduct.discount.amount +
						(stubPrice01 - stubDiscountAmount01) * stubQty00 +
						(stubPrice11 - stubDiscountAmount11) * stubQty10,
          discount: {
            amount: null,
            percent: null,
          },
          originalPrice: stubCompositeProduct.price + (stubPrice01 * stubQty00) + (stubPrice11 * stubQty10),
        },
        maxPrice: {
          discountedPrice: stubCompositeProduct.price - stubCompositeProduct.discount.amount +
						(stubPrice01 - stubDiscountAmount01) * stubQty00 +
						(stubPrice11 - stubDiscountAmount11) * stubQty10,
          discount: {
            amount: null,
            percent: null,
          },
          originalPrice: stubCompositeProduct.price + (stubPrice01 * stubQty00) + (stubPrice11 * stubQty10),
        },
      }});

      expect(selector).toBeObservable(expected);
    });

    it('should return a price range that reflects the expected option quantity when the default item option is out of stock', () => {
      const product = {
        ...stubCompositeProduct,
        items: [
          {
            ...stubCompositeProduct.items[0],
            options: [
              {
                ...stubCompositeProduct.items[0].options[0],
                in_stock: false,
              },
              ...stubCompositeProduct.items[0].options.slice(1),
            ],
          },
          ...stubCompositeProduct.items.slice(1),
        ],
      };
      store.dispatch(new DaffProductLoadSuccess({
        id: product.id,
        products: [product],
      }));

      const selector = store.pipe(select(selectCompositeProductPricesAsCurrentlyConfigured(stubCompositeProduct.id)));
      const expected = cold('a', { a: {
        minPrice: {
          discountedPrice: stubCompositeProduct.price - stubCompositeProduct.discount.amount +
						(stubPrice00 - stubDiscountAmount00) * stubQty00,
          discount: {
            amount: null,
            percent: null,
          },
          originalPrice: stubCompositeProduct.price + (stubPrice00 * stubQty00),
        },
        maxPrice: {
          discountedPrice: stubCompositeProduct.price - stubCompositeProduct.discount.amount +
						(stubPrice01 - stubDiscountAmount01) * stubQty00,
          discount: {
            amount: null,
            percent: null,
          },
          originalPrice: stubCompositeProduct.price + (stubPrice01 * stubQty00),
        },
      }});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCompositeProductDiscountAmount', () => {

    it('should return undefined when the product is not a composite product', () => {
      const selector = store.pipe(select(selectCompositeProductDiscountAmount(stubProduct.id)));
      const expected = cold('a', { a: undefined });

      expect(selector).toBeObservable(expected);
    });

    it('should not emit when an unrelated piece of state changes', () => {
      const spy = jasmine.createSpy();
      const selector = store.pipe(select(selectCompositeProductDiscountAmount(stubCompositeProduct.id)));

      selector.subscribe(spy);

      store.dispatch(new DaffProductGridLoad());

      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should not throw an error when optional items are not provided', () => {
      const product = {
        ...stubCompositeProduct,
        items: [
          {
            ...stubCompositeProduct.items[0],
            required: false,
            options: [
              {
                ...stubCompositeProduct.items[0].options[0],
                is_default: false,
              },
              {
                ...stubCompositeProduct.items[0].options[1],
                is_default: false,
              },
            ],
          },
          ...stubCompositeProduct.items.slice(1),
        ],
      };
      store.dispatch(new DaffProductLoadSuccess({
        id: product.id,
        products: [product],
      }));
      const selector = store.pipe(select(selectCompositeProductDiscountAmount(stubCompositeProduct.id)));
      const expected = cold('a', { a: stubCompositeProduct.discount.amount });

      expect(selector).toBeObservable(expected);
    });

    it('should return undefined when required options are not chosen', () => {
      const product = {
        ...stubCompositeProduct,
        items: [
          {
            ...stubCompositeProduct.items[0],
            required: true,
            options: [
              {
                ...stubCompositeProduct.items[0].options[0],
                is_default: false,
              },
              {
                ...stubCompositeProduct.items[0].options[1],
                is_default: false,
              },
            ],
          },
          ...stubCompositeProduct.items.slice(1),
        ],
      };
      store.dispatch(new DaffProductLoadSuccess({
        id: product.id,
        products: [product],
      }));
      const selector = store.pipe(select(selectCompositeProductDiscountAmount(stubCompositeProduct.id)));
      const expected = cold('a', { a: undefined });

      expect(selector).toBeObservable(expected);
    });

    it('should return the discount amount when all required options are chosen', () => {
      const product = {
        ...stubCompositeProduct,
        items: [
          {
            ...stubCompositeProduct.items[0],
            required: true,
            options: [
              {
                ...stubCompositeProduct.items[0].options[0],
                quantity: 1,
                is_default: true,
              },
              {
                ...stubCompositeProduct.items[0].options[1],
                is_default: false,
              },
            ],
          },
        ],
      };
      store.dispatch(new DaffProductLoadSuccess({
        id: product.id,
        products: [product],
      }));

      const selector = store.pipe(select(selectCompositeProductDiscountAmount(stubCompositeProduct.id)));
      const expectedDiscountAmount = daffAdd(stubCompositeProduct.discount.amount, stubCompositeProduct.items[0].options[0].discount.amount);
      const expected = cold('a', { a: expectedDiscountAmount });

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCompositeProductDiscountPercent', () => {

    it('should return undefined when the product is not a composite product', () => {
      const selector = store.pipe(select(selectCompositeProductDiscountPercent(stubProduct.id)));
      const expected = cold('a', { a: undefined });

      expect(selector).toBeObservable(expected);
    });

    it('should not emit when an unrelated piece of state changes', () => {
      const spy = jasmine.createSpy();
      const selector = store.pipe(select(selectCompositeProductDiscountPercent(stubCompositeProduct.id)));

      selector.subscribe(spy);

      store.dispatch(new DaffProductGridLoad());

      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should return undefined when required options are not chosen', () => {
      const product = {
        ...stubCompositeProduct,
        items: [
          {
            ...stubCompositeProduct.items[0],
            required: true,
            options: [
              {
                ...stubCompositeProduct.items[0].options[0],
                is_default: false,
              },
              {
                ...stubCompositeProduct.items[0].options[1],
                is_default: false,
              },
            ],
          },
          ...stubCompositeProduct.items.slice(1),
        ],
      };
      store.dispatch(new DaffProductLoadSuccess({
        id: product.id,
        products: [product],
      }));
      const selector = store.pipe(select(selectCompositeProductDiscountPercent(stubCompositeProduct.id)));
      const expected = cold('a', { a: undefined });

      expect(selector).toBeObservable(expected);
    });

    it('should return a percent discount when all required options are chosen', () => {
      const product = {
        ...stubCompositeProduct,
        items: [
          {
            ...stubCompositeProduct.items[0],
            required: true,
            options: [
              {
                ...stubCompositeProduct.items[0].options[0],
                quantity: 1,
                is_default: true,
              },
              {
                ...stubCompositeProduct.items[0].options[1],
                is_default: false,
              },
            ],
          },
        ],
      };
      store.dispatch(new DaffProductLoadSuccess({
        id: product.id,
        products: [product],
      }));

      const selector = store.pipe(select(selectCompositeProductDiscountPercent(stubCompositeProduct.id)));
      const totalOriginalPrice = daffAdd(stubCompositeProduct.price, stubCompositeProduct.items[0].options[0].price);
      const primaryProductDiscountedPrice = daffSubtract(stubCompositeProduct.price, stubCompositeProduct.discount.amount);
      const selectedOptionDiscountedPrice = daffSubtract(stubCompositeProduct.items[0].options[0].price, stubCompositeProduct.items[0].options[0].discount.amount);
      const totalDiscountedPrice = daffAdd(primaryProductDiscountedPrice, selectedOptionDiscountedPrice);
      const expectedDiscountPercent = daffMultiply(daffDivide(daffSubtract(totalOriginalPrice, totalDiscountedPrice), totalOriginalPrice), 100);
      const expected = cold('a', { a: expectedDiscountPercent });

      expect(selector).toBeObservable(expected);
    });
  });
});
