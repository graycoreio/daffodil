import { TestBed } from '@angular/core/testing';

import { DaffProduct } from '@daffodil/product';
import {
  DaffProductLoadSuccess,
  DaffProductGridLoadSuccess,
  DaffProductGridReset,
  DaffBestSellersLoadSuccess,
} from '@daffodil/product/state';
import { DaffProductFactory } from '@daffodil/product/testing';

import { daffProductEntitiesAdapter } from './product-entities-reducer-adapter';
import { daffProductEntitiesReducer } from './product-entities.reducer';
import { DaffProductPageLoadSuccess } from '../../actions/public_api';

describe('Product | Product Entities Reducer', () => {

  let productFactory: DaffProductFactory;
  const initialState = daffProductEntitiesAdapter().getInitialState();

  beforeEach(() => {
    productFactory = TestBed.inject(DaffProductFactory);
  });

  describe('when an unknown action is triggered', () => {

    it('should return the current state', () => {
      const action = <any>{};

      const result = daffProductEntitiesReducer(initialState, action);

      expect(result).toEqual(initialState);
    });
  });

  describe('when ProductGridLoadSuccessAction is triggered', () => {

    let products: DaffProduct[];
    let result;

    beforeEach(() => {
      products = productFactory.createMany(2);
      const productGridLoadSuccess = new DaffProductGridLoadSuccess(products);

      result = daffProductEntitiesReducer(initialState, productGridLoadSuccess);
    });

    it('sets expected number of products on state', () => {
      expect(result.ids.length).toEqual(products.length);
    });

    it('sets expected product on state', () => {
      expect(result.entities[products[0].id]).toEqual(products[0]);
    });
  });

  describe('when BestSellersLoadSuccessAction is triggered', () => {

    let products: DaffProduct[];
    let result;

    beforeEach(() => {
      products = productFactory.createMany(2);

      const bestSellersLoadSuccess = new DaffBestSellersLoadSuccess(products);

      result = daffProductEntitiesReducer(initialState, bestSellersLoadSuccess);
    });

    it('sets expected number of products on state', () => {
      expect(result.ids.length).toEqual(products.length);
    });

    it('sets expected product on state', () => {
      expect(result.entities[products[0].id]).toEqual(products[0]);
    });
  });

  describe('when ProductPageLoadSuccessAction is triggered', () => {

    let product: DaffProduct;
    let result;
    let productId;

    beforeEach(() => {
      product = productFactory.create();
      productId = product.id;

      const productPageLoadSuccess = new DaffProductPageLoadSuccess({
        id: product.id,
        products: [product],
      });

      result = daffProductEntitiesReducer(initialState, productPageLoadSuccess);
    });

    it('sets expected product on state', () => {
      expect(result.entities[productId]).toEqual(product);
    });
  });

  describe('when ProductLoadSuccessAction is triggered', () => {

    let product: DaffProduct;
    let result;
    let productId;

    beforeEach(() => {
      product = productFactory.create();
      productId = product.id;

      const productLoadSuccess = new DaffProductLoadSuccess({
        id: product.id,
        products: [product],
      });

      result = daffProductEntitiesReducer(initialState, productLoadSuccess);
    });

    it('sets expected product on state', () => {
      expect(result.entities[productId]).toEqual(product);
    });
  });

  describe('when ProductGridResetAction is triggered', () => {

    let result;

    beforeEach(() => {
      const productGridReset = new DaffProductGridReset();

      result = daffProductEntitiesReducer(initialState, productGridReset);
    });

    it('removes all entities from state', () => {
      expect(result.entities).toEqual({});
    });
  });
});
