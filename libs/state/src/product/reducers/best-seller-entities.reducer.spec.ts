import { Product, ProductFactory } from "@daffodil/core";

import { BestSellerGridLoadSuccess } from "../actions/best-seller-grid.actions";
import { initialState, reducer } from "../reducers/best-seller-entities.reducer";

describe('Product | Best Seller Entities Reducer', () => {

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

  describe('when BestSellerGridLoadSuccessAction is triggered', () => {

    let products: Product[];
    let result;
    let product1Id;

    beforeEach(() => {
      let product1 = productFactory.create();
      let product2 = productFactory.create();
      product1Id = product1.id;
      
      products = new Array(product1, product2);
      let productGridLoadSuccess = new BestSellerGridLoadSuccess(products);
      
      result = reducer(initialState, productGridLoadSuccess);
    });

    it('sets expected number of products on state', () => {
      expect(result.ids.length).toEqual(products.length);
    });

    it('sets expected product on state', () => {
      expect(result.entities[product1Id]).toEqual(products[0]);
    });
  });
});
