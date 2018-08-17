import { Product, ProductFactory } from "@daffodil/core";

import { ProductLoadSuccess } from "../actions/product.actions";
import { ProductGridLoadSuccess } from "../actions/product-grid.actions";
import { initialState, reducer } from "../reducers/product-entities.reducer";

describe('Product | Product Entities Reducer', () => {

  let productFactory: ProductFactory;

  beforeEach(() => {
    productFactory = new ProductFactory();
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
    let product1Id;

    beforeEach(() => {
      let product1 = productFactory.create();
      let product2 = productFactory.create();
      product1Id = product1.id;
      
      products = new Array(product1, product2);
      let productGridLoadSuccess = new ProductGridLoadSuccess(products);
      
      result = reducer(initialState, productGridLoadSuccess);
    });

    it('sets expected number of products on state', () => {
      expect(result.ids.length).toEqual(products.length);
    });

    it('sets expected product on state', () => {
      expect(result.entities[product1Id]).toEqual(products[0]);
    });
  });

  describe('when ProductLoadSuccessAction is triggered', () => {
    
    let product: Product;
    let result;
    let productId;

    beforeEach(() => {
      product = productFactory.create();
      productId = product.id;
      
      let productLoadSuccess = new ProductLoadSuccess(product);
      
      result = reducer(initialState, productLoadSuccess);
    });

    it('sets expected product on state', () => {
      expect(result.entities[productId]).toEqual(product);
    });
  });
});
