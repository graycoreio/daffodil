import { DaffProductFactory } from '@daffodil/product/testing';

import { DaffProductLoadSuccess } from "../actions/product.actions";
import { DaffProductGridLoadSuccess, DaffProductGridReset } from "../actions/product-grid.actions";
import { initialState, reducer } from "../reducers/product-entities.reducer";
import { DaffBestSellersLoadSuccess } from "../actions/best-sellers.actions";
import { DaffProduct } from "../models/product";

describe('Product | Product Entities Reducer', () => {

  let productFactory: DaffProductFactory;

  beforeEach(() => {
    productFactory = new DaffProductFactory();
  });

  describe('when an unknown action is triggered', () => {

    it('should return the current state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when ProductGridLoadSuccessAction is triggered', () => {

    let products: DaffProduct[];
    let result;

    beforeEach(() => {
      products = productFactory.createMany(2);
      const productGridLoadSuccess = new DaffProductGridLoadSuccess(products);
      
      result = reducer(initialState, productGridLoadSuccess);
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
      
      result = reducer(initialState, bestSellersLoadSuccess);
    });

    it('sets expected number of products on state', () => {
      expect(result.ids.length).toEqual(products.length);
    });

    it('sets expected product on state', () => {
      expect(result.entities[products[0].id]).toEqual(products[0]);
    });
  });

  describe('when ProductLoadSuccessAction is triggered', () => {
    
    let product: DaffProduct;
    let result;
    let productId;

    beforeEach(() => {
      product = productFactory.create();
      productId = product.id;
      
      const productLoadSuccess = new DaffProductLoadSuccess(product);
      
      result = reducer(initialState, productLoadSuccess);
    });

    it('sets expected product on state', () => {
      expect(result.entities[productId]).toEqual(product);
    });
  });

  describe('when ProductGridResetAction is triggered', () => {
    
    let result;

    beforeEach(() => {
      const productGridReset = new DaffProductGridReset();
      
      result = reducer(initialState, productGridReset);
    });

    it('removes all entities from state', () => {
      expect(result.entities).toEqual({});
    });
  });
});
