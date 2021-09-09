import {
  DaffProduct,
  DaffCompositeProduct,
} from '@daffodil/product';
import {
  DaffProductLoadSuccess,
  DaffProductGridLoadSuccess,
  DaffBestSellersLoadSuccess,
  DaffCompositeProductApplyOption,
  DaffProductPageLoadSuccess,
} from '@daffodil/product/state';
import {
  DaffProductFactory,
  DaffCompositeProductFactory,
} from '@daffodil/product/testing';

import { daffCompositeProductAppliedOptionsEntitiesAdapter } from './composite-product-entities-reducer-adapter';
import { daffCompositeProductEntitiesReducer } from './composite-product-entities.reducer';

describe('Product | Composite Product Entities Reducer', () => {

  let productFactory: DaffProductFactory;
  let compositeProductFactory: DaffCompositeProductFactory;
  const initialState = daffCompositeProductAppliedOptionsEntitiesAdapter().getInitialState();
  let compositeProduct: DaffCompositeProduct;

  beforeEach(() => {
    productFactory = new DaffProductFactory();
    compositeProductFactory = new DaffCompositeProductFactory();
    compositeProduct = compositeProductFactory.create();
  });

  describe('when an unknown action is triggered', () => {

    it('should return the current state', () => {
      const action = <any>{};

      const result = daffCompositeProductEntitiesReducer(initialState, action);

      expect(result).toEqual(initialState);
    });
  });

  describe('when ProductGridLoadSuccessAction is triggered', () => {

    let products: DaffProduct[];
    let compositeProducts: DaffCompositeProduct[];
    let result;

    beforeEach(() => {
      products = productFactory.createMany(2);
      compositeProducts = compositeProductFactory.createMany(2);

      products = [
        ...products,
        ...compositeProducts,
      ];
      const productGridLoadSuccess = new DaffProductGridLoadSuccess(products);

      result = daffCompositeProductEntitiesReducer(initialState, productGridLoadSuccess);
    });

    it('sets a composite product entity for each composite product', () => {
      expect(result.ids.length).toEqual(compositeProducts.length);
    });
  });

  describe('when BestSellersLoadSuccessAction is triggered', () => {

    let products: DaffProduct[];
    let compositeProducts: DaffCompositeProduct[];
    let result;

    beforeEach(() => {
      products = productFactory.createMany(2);
      compositeProducts = compositeProductFactory.createMany(2);

      products = [
        ...products,
        ...compositeProducts,
      ];

      const bestSellersLoadSuccess = new DaffBestSellersLoadSuccess(products);

      result = daffCompositeProductEntitiesReducer(initialState, bestSellersLoadSuccess);
    });

    it('sets a composite product entity for each composite product', () => {
      expect(result.ids.length).toEqual(compositeProducts.length);
    });
  });

  describe('when ProductLoadSuccessAction is triggered', () => {

    let product: DaffProduct;
    let result;

    beforeEach(() => {
      product = productFactory.create();
    });

    it('sets a composite product entity when the given product is composite', () => {
      const productLoadSuccess = new DaffProductLoadSuccess({
        id: compositeProduct.id,
        products: [compositeProduct],
      });
      result = daffCompositeProductEntitiesReducer(initialState, productLoadSuccess);
      expect(result.entities[compositeProduct.id]).toEqual({
        id: compositeProduct.id,
        items: {
          [compositeProduct.items[0].id]: {
            value: compositeProduct.items[0].options[0].id,
            qty: compositeProduct.items[0].options[0].quantity,
          },
          [compositeProduct.items[1].id]: {
            value: compositeProduct.items[1].options[0].id,
            qty: compositeProduct.items[1].options[0].quantity,
          },
        },
      });
    });

    it('does not set a composite product entity when the given product is not composite', () => {
      const productLoadSuccess = new DaffProductLoadSuccess({
        id: product.id,
        products: [product],
      });
      result = daffCompositeProductEntitiesReducer(initialState, productLoadSuccess);
      expect(result.entities[product.id]).toBeUndefined();
    });
  });

  describe('when ProductPageLoadSuccessAction is triggered', () => {

    let product: DaffProduct;
    let result;

    beforeEach(() => {
      product = productFactory.create();
    });

    it('sets a composite product entity when the given product is composite', () => {
      const productPageLoadSuccess = new DaffProductPageLoadSuccess({
        id: compositeProduct.id,
        products: [compositeProduct],
      });
      result = daffCompositeProductEntitiesReducer(initialState, productPageLoadSuccess);
      expect(result.entities[compositeProduct.id]).toEqual({
        id: compositeProduct.id,
        items: {
          [compositeProduct.items[0].id]: {
            value: compositeProduct.items[0].options[0].id,
            qty: compositeProduct.items[0].options[0].quantity,
          },
          [compositeProduct.items[1].id]: {
            value: compositeProduct.items[1].options[0].id,
            qty: compositeProduct.items[1].options[0].quantity,
          },
        },
      });
    });

    it('does not set a composite product entity when the given product is not composite', () => {
      const productPageLoadSuccess = new DaffProductPageLoadSuccess({
        id: product.id,
        products: [product],
      });
      result = daffCompositeProductEntitiesReducer(initialState, productPageLoadSuccess);
      expect(result.entities[product.id]).toBeUndefined();
    });
  });

  describe('when DaffCompositeProductApplyOption is triggered', () => {

    let result;

    beforeEach(() => {
      const specInitialState = {
        ids: [compositeProduct.id],
        entities: {
          [compositeProduct.id]: {
            id: compositeProduct.id,
            items: compositeProduct.items.reduce((acc, item) => ({
              ...acc,
              [item.id]: {
                value: item.options.find(option => option.is_default).id,
                qty: item.options.find(option => option.is_default).quantity,
              },
            }), {}),
          },
        },
      };

      const compositeProductApplyAttribute = new DaffCompositeProductApplyOption(
        compositeProduct.id,
				<string>compositeProduct.items[0].id,
				compositeProduct.items[0].options[1].id,
				compositeProduct.items[0].options[1].quantity,
      );

      result = daffCompositeProductEntitiesReducer(specInitialState, compositeProductApplyAttribute);
    });

    it('changes the option id of the given product item', () => {
      expect(result.entities[compositeProduct.id].items[compositeProduct.items[0].id]).toEqual({
        value: compositeProduct.items[0].options[1].id,
        qty: compositeProduct.items[0].options[1].quantity,
      });
    });
  });

  describe('setting the default item option', () => {

    let result;

    it('should set the item to the default option when it is provided and in stock', () => {
      compositeProduct.items[0].options[0].is_default = false;
      compositeProduct.items[0].options[1].is_default = true;
      compositeProduct.items[0].options[1].in_stock = true;
      const productLoadSuccess = new DaffProductLoadSuccess({
        id: compositeProduct.id,
        products: [compositeProduct],
      });
      result = daffCompositeProductEntitiesReducer(initialState, productLoadSuccess);

      expect(result.entities[compositeProduct.id].items[compositeProduct.items[0].id]).toEqual({
        value: compositeProduct.items[0].options[1].id,
        qty: compositeProduct.items[0].options[1].quantity,
      });
    });

    it('should set the default option to null when the default option is out of stock', () => {
      compositeProduct.items[0].options[0].is_default = false;
      compositeProduct.items[0].options[1].is_default = true;
      compositeProduct.items[0].options[1].in_stock = false;
      const productLoadSuccess = new DaffProductLoadSuccess({
        id: compositeProduct.id,
        products: [compositeProduct],
      });
      result = daffCompositeProductEntitiesReducer(initialState, productLoadSuccess);

      expect(result.entities[compositeProduct.id].items[compositeProduct.items[0].id].value).toEqual(null);
    });

    it('should set the default option qty to the default qty when the default option is out of stock', () => {
      compositeProduct.items[0].options[0].is_default = false;
      compositeProduct.items[0].options[1].is_default = true;
      compositeProduct.items[0].options[1].in_stock = false;
      const productLoadSuccess = new DaffProductLoadSuccess({
        id: compositeProduct.id,
        products: [compositeProduct],
      });
      result = daffCompositeProductEntitiesReducer(initialState, productLoadSuccess);

      expect(result.entities[compositeProduct.id].items[compositeProduct.items[0].id].qty).toEqual(compositeProduct.items[0].options[1].quantity);
    });

    it(`should set the default option to null when the default item option is not defined`, () => {
      compositeProduct.items[0].options[0].is_default = false;
      compositeProduct.items[0].options[1].is_default = false;
      compositeProduct.items[0].required = true;
      const productLoadSuccess = new DaffProductLoadSuccess({
        id: compositeProduct.id,
        products: [compositeProduct],
      });
      result = daffCompositeProductEntitiesReducer(initialState, productLoadSuccess);

      expect(result.entities[compositeProduct.id].items[compositeProduct.items[0].id]).toEqual({ value: null, qty: null });
    });
  });
});
