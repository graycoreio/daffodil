import { DaffProductFactory } from '../../testing/src';
import { ProductLoadSuccess } from "../actions/product.actions";
import { ProductGridLoadSuccess, ProductGridReset } from "../actions/product-grid.actions";
import { initialState, reducer } from "../reducers/product-entities.reducer";
import { BestSellersLoadSuccess } from "../actions/best-sellers.actions";
import { Product } from "../models/product";

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

    let products: Product[];
    let result;

    beforeEach(() => {
      products = productFactory.createMany(2);
      const productGridLoadSuccess = new ProductGridLoadSuccess(products);
      
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

    let products: Product[];
    let result;

    beforeEach(() => {
      products = productFactory.createMany(2);
      
      const bestSellersLoadSuccess = new BestSellersLoadSuccess(products);
      
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
    
    let product: Product;
    let result;
    let productId;

    beforeEach(() => {
      product = productFactory.create();
      productId = product.id;
      
      const productLoadSuccess = new ProductLoadSuccess(product);
      
      result = reducer(initialState, productLoadSuccess);
    });

    it('sets expected product on state', () => {
      expect(result.entities[productId]).toEqual(product);
    });
  });

  describe('when ProductGridResetAction is triggered', () => {
    
    let result;

    beforeEach(() => {
      const productGridReset = new ProductGridReset();
      
      result = reducer(initialState, productGridReset);
    });

    it('removes all entities from state', () => {
      expect(result.entities).toEqual({});
    });
  });
});
