import { Product } from "@core/product/model/product";
import { ProductFactory } from "@core/product/testing/factories/product.factory";
import { initialState, reducer, productAdapter } from "@core/product/reducers/product-entities.reducer";
import { ProductListLoad, ProductListLoadSuccess } from "@core/product/actions/product-list.actions";

describe('Product | Product Entities Reducer', () => {

  let productFactory;

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

  describe('when ProductListLoadSuccessAction is triggered', () => {

    let products: Product[];
    let result;
    let product1Id;

    beforeEach(() => {
      let product1 = productFactory.create();
      let product2 = productFactory.create();
      product1Id = product1.id;
      
      products = new Array(product1, product2);
      let productListLoadSuccess = new ProductListLoadSuccess(products);
      
      result = reducer(initialState, productListLoadSuccess);
    });

    it('sets expected number of products on state', () => {
      expect(result.ids.length).toEqual(products.length);
    });

    it('sets expected product on state', () => {
      expect(result.entities[product1Id]).toEqual(products[0]);
    });
  });
});
