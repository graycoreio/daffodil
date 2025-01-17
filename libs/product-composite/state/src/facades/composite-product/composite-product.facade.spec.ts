import { TestBed } from '@angular/core/testing';
import { Dictionary } from '@ngrx/entity';
import {
  Store,
  StoreModule,
  combineReducers,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import {
  daffAdd,
  daffDivide,
  daffMultiply,
  daffSubtract,
} from '@daffodil/core';
import {
  DaffProductLoadSuccess,
  daffProductReducers,
  DAFF_PRODUCT_STORE_FEATURE_KEY,
} from '@daffodil/product/state';
import {
  DaffCompositeProduct,
  DaffCompositeConfigurationItem,
} from '@daffodil/product-composite';
import {
  DaffCompositeProductApplyOption,
  daffCompositeProductReducers,
  DaffCompositeProductStateRootSlice,
  DAFF_COMPOSITE_PRODUCT_STORE_FEATURE_KEY,
} from '@daffodil/product-composite/state';
import { DaffCompositeProductFactory } from '@daffodil/product-composite/testing';

import { DaffCompositeProductFacade } from './composite-product.facade';

describe('DaffCompositeProductFacade', () => {
  let store: Store<DaffCompositeProductStateRootSlice>;
  let facade: DaffCompositeProductFacade;
  let stubCompositeProduct: DaffCompositeProduct;
  let compositeProductFactory: DaffCompositeProductFactory;
  const stubPrice00 = 10;
  const stubDiscountAmount00 = 2;
  const stubPrice01 = 20;
  const stubDiscountAmount01 = 1;
  const stubPrice10 = 30;
  const stubDiscountAmount10 = 3;
  const stubPrice11 = 40;
  const stubDiscountAmount11 = 4;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        StoreModule.forRoot({
          [DAFF_COMPOSITE_PRODUCT_STORE_FEATURE_KEY]: combineReducers(daffCompositeProductReducers),
          [DAFF_PRODUCT_STORE_FEATURE_KEY]: combineReducers(daffProductReducers),
        }),
      ],
      providers: [
        DaffCompositeProductFacade,
      ],
    });

    store = TestBed.inject(Store);
    facade = TestBed.inject(DaffCompositeProductFacade);
    compositeProductFactory = TestBed.inject(DaffCompositeProductFactory);

    stubCompositeProduct = compositeProductFactory.create();
    stubCompositeProduct.items[0].required = true;
    stubCompositeProduct.items[1].required = false;
    stubCompositeProduct.items[0].options[0].is_default = true;
    stubCompositeProduct.items[0].options[1].is_default = false;
    stubCompositeProduct.items[1].options[0].is_default = false;
    stubCompositeProduct.items[1].options[1].is_default = false;
    stubCompositeProduct.items[0].options[0].price = stubPrice00;
    stubCompositeProduct.items[0].options[1].price = stubPrice01;
    stubCompositeProduct.items[1].options[0].price = stubPrice10;
    stubCompositeProduct.items[1].options[1].price = stubPrice11;
    stubCompositeProduct.items[0].options[0].discount.amount = stubDiscountAmount00;
    stubCompositeProduct.items[0].options[1].discount.amount = stubDiscountAmount01;
    stubCompositeProduct.items[1].options[0].discount.amount = stubDiscountAmount10;
    stubCompositeProduct.items[1].options[1].discount.amount = stubDiscountAmount11;
    stubCompositeProduct.items[0].options[0].quantity = 1;
    stubCompositeProduct.items[0].options[1].quantity = 1;
    stubCompositeProduct.items[1].options[0].quantity = 1;
    stubCompositeProduct.items[1].options[1].quantity = 1;
    store.dispatch(new DaffProductLoadSuccess({
      id: stubCompositeProduct.id,
      products: [stubCompositeProduct],
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

  describe('getRequiredItemPricesForConfiguration', () => {

    it('should return the expected price range for the configuration provided', () => {
      const stubConfiguration: Dictionary<DaffCompositeConfigurationItem> = {
        [stubCompositeProduct.items[0].id]: {
          value: stubCompositeProduct.items[0].options[1].id,
          qty: 1,
        },
      };
      const expected = cold('a', { a: {
        minPrice: {
          discountedPrice: stubCompositeProduct.price - stubCompositeProduct.discount.amount +
						stubPrice01 - stubDiscountAmount01,
          discount: {
            amount: null,
            percent: null,
          },
          originalPrice: stubCompositeProduct.price + stubPrice01,
        },
        maxPrice: {
          discountedPrice: stubCompositeProduct.price - stubCompositeProduct.discount.amount +
						stubPrice01 - stubDiscountAmount01,
          discount: {
            amount: null,
            percent: null,
          },
          originalPrice: stubCompositeProduct.price + stubPrice01,
        },
      }});

      expect(facade.getRequiredItemPricesForConfiguration(stubCompositeProduct.id, stubConfiguration)).toBeObservable(expected);
    });
  });

  describe('getOptionalItemPricesForConfiguration', () => {

    it('should return the broadest price range for a composite product including optional items', () => {
      const expected = cold('a', { a: {
        minPrice: {
          discountedPrice: stubCompositeProduct.price - stubCompositeProduct.discount.amount +
						stubPrice00 - stubDiscountAmount00,
          discount: {
            amount: null,
            percent: null,
          },
          originalPrice: stubCompositeProduct.price + stubPrice00,
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

      expect(facade.getOptionalItemPricesForConfiguration(stubCompositeProduct.id)).toBeObservable(expected);
    });
  });

  describe('getPricesAsCurrentlyConfigured', () => {

    it('should return the expected price range for the current configuration of the product in state', () => {
      store.dispatch(new DaffCompositeProductApplyOption(
        stubCompositeProduct.id,
				<string>stubCompositeProduct.items[0].id,
				stubCompositeProduct.items[0].options[1].id,
				1,
      ));
      const expected = cold('a', { a: {
        minPrice: {
          discountedPrice: stubCompositeProduct.price - stubCompositeProduct.discount.amount +
						stubPrice01 - stubDiscountAmount01,
          discount: {
            amount: null,
            percent: null,
          },
          originalPrice: stubCompositeProduct.price + stubPrice01,
        },
        maxPrice: {
          discountedPrice: stubCompositeProduct.price - stubCompositeProduct.discount.amount +
						stubPrice01 - stubDiscountAmount01,
          discount: {
            amount: null,
            percent: null,
          },
          originalPrice: stubCompositeProduct.price + stubPrice01,
        },
      }});

      expect(facade.getPricesAsCurrentlyConfigured(stubCompositeProduct.id)).toBeObservable(expected);
    });
  });

  describe('getAppliedOptions', () => {

    it('should return the applied option for a composite product', () => {
      const expected = cold('a', { a: {
        [stubCompositeProduct.items[0].id]: stubCompositeProduct.items[0].options[0],
        [stubCompositeProduct.items[1].id]: null,
      }});

      expect(facade.getAppliedOptions(stubCompositeProduct.id)).toBeObservable(expected);
    });
  });

  describe('getDiscountAmount', () => {

    it('should return the discount percent for a composite product', () => {
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

      const expectedDiscountAmount = daffAdd(stubCompositeProduct.discount.amount, stubCompositeProduct.items[0].options[0].discount.amount);
      const expected = cold('a', { a: expectedDiscountAmount });

      expect(facade.getDiscountAmount(stubCompositeProduct.id)).toBeObservable(expected);
    });
  });

  describe('getDiscountPercent', () => {

    it('should return the discount percent for a composite product', () => {
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

      const totalOriginalPrice = daffAdd(stubCompositeProduct.price, stubCompositeProduct.items[0].options[0].price);
      const primaryProductDiscountedPrice = daffSubtract(stubCompositeProduct.price, stubCompositeProduct.discount.amount);
      const selectedOptionDiscountedPrice = daffSubtract(stubCompositeProduct.items[0].options[0].price, stubCompositeProduct.items[0].options[0].discount.amount);
      const totalDiscountedPrice = daffAdd(primaryProductDiscountedPrice, selectedOptionDiscountedPrice);
      const expectedDiscountPercent = daffMultiply(daffDivide(daffSubtract(totalOriginalPrice, totalDiscountedPrice), totalOriginalPrice), 100);
      const expected = cold('a', { a: expectedDiscountPercent });

      expect(facade.getDiscountPercent(stubCompositeProduct.id)).toBeObservable(expected);
    });
  });

  describe('isItemRequired', () => {

    it('should return whether the composite product item is required', () => {
      const expected = cold('a', { a: stubCompositeProduct.items[0].required });

      expect(facade.isItemRequired(stubCompositeProduct.id, stubCompositeProduct.items[0].id)).toBeObservable(expected);
    });
  });
});
