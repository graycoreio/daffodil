import { Product, ProductFactory } from "@daffodil/core";
import { initialState, reducer, getProductGridLoading } from "../reducers/product-grid.reducer";
import { ProductGridLoad, ProductGridLoadSuccess, ProductGridLoadFailure } from "../actions/product-grid.actions";


describe('Product | Product Grid Reducer', () => {

  let productFactory;
  let product: Product;

  beforeEach(() => {
    productFactory = new ProductFactory();

    product = productFactory.create();
  });

  describe('when an unknown action is triggered', () => {

    it('should return the current state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when ProductGridLoadAction is triggered', () => {

    it('sets loading state to true', () => {
      const productGridLoadAction: ProductGridLoad = new ProductGridLoad();
      
      const result = reducer(initialState, productGridLoadAction);

      expect(result.loading).toEqual(true);
    });
  });

  describe('when ProductGridLoadSuccessAction is triggered', () => {

    let products: Product[];
    let result;

    beforeEach(() => {
      initialState.loading = true;
      products = new Array(product);
      let productGridLoadSuccess = new ProductGridLoadSuccess(products);
      
      result = reducer(initialState, productGridLoadSuccess);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });
  });

  describe('when ProductGridLoadFailureAction is triggered', () => {

    let error: string;
    let result;

    beforeEach(() => {
      initialState.loading = true;
      error = 'error';      
      initialState.errors = new Array('firstError');
      let productGridLoadFailure = new ProductGridLoadFailure(error);

      result = reducer(initialState, productGridLoadFailure);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('adds an error to state.errors', () => {
      expect(result.errors.length).toEqual(2);
    });
  });

  describe('getProductGridLoading', () => {
    
    it('returns loading state', () => {
      expect(getProductGridLoading(initialState)).toEqual(initialState.loading);
    });
  });
});
