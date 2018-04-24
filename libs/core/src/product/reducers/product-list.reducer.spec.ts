import { createSelector } from "@ngrx/store";

import { Product } from "../model/product";
import { ProductFactory } from "../testing/factories/product.factory";
import { initialState, reducer, getProductListLoading } from "../reducers/product-list.reducer";
import { ProductListLoad, ProductListLoadSuccess, ProductListLoadFailure } from "../actions/product-list.actions";


describe('Product | Product List Reducer', () => {

  let productFactory;
  let product: Product;

  beforeEach(() => {
    productFactory = new ProductFactory();

    product = productFactory.create('cost');
  });

  describe('when an unknown action is triggered', () => {

    it('should return the current state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when ProductListLoadAction is triggered', () => {

    it('sets loading state to true', () => {
      const productListLoadAction: ProductListLoad = new ProductListLoad();
      
      const result = reducer(initialState, productListLoadAction);

      expect(result.loading).toEqual(true);
    });
  });

  describe('when ProductListLoadSuccessAction is triggered', () => {

    let products: Product[];
    let result;

    beforeEach(() => {
      initialState.loading = true;
      products = new Array(product);
      let productListLoadSuccess = new ProductListLoadSuccess(products);
      
      result = reducer(initialState, productListLoadSuccess);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });
  });

  describe('when ProductListLoadFailureAction is triggered', () => {

    let error: string;
    let result;

    beforeEach(() => {
      initialState.loading = true;
      error = 'error';      
      initialState.errors = new Array('firstError');
      let productListLoadFailure = new ProductListLoadFailure(error);

      result = reducer(initialState, productListLoadFailure);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('adds an error to state.errors', () => {
      expect(result.errors.length).toEqual(2);
    });
  });

  describe('getProductListLoading', () => {
    
    it('returns loading state', () => {
      expect(getProductListLoading(initialState)).toEqual(initialState.loading);
    });
  });
});
