import { createSelector } from "@ngrx/store";

import { Product } from "../model/product";
import { ProductFactory } from "../testing/factories/product.factory";
import { initialState, reducer, getProductLoading, getSelectedProductId } from "../reducers/product.reducer";
import { ProductLoad, ProductLoadSuccess, ProductLoadFailure } from "../actions/product.actions";


describe('Product | Product Reducer', () => {

  let productFactory;
  let product: Product;
  let productId: string;

  beforeEach(() => {
    productFactory = new ProductFactory();

    product = productFactory.create();
    productId = product.id;
  });

  describe('when an unknown action is triggered', () => {

    it('should return the current state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when ProductLoadAction is triggered', () => {
    let result;

    beforeEach(() => {
      const productLoadAction: ProductLoad = new ProductLoad(productId);

      result = reducer(initialState, productLoadAction);
    });

    it('sets loading state to true', () => {
      expect(result.loading).toEqual(true);
    });

    it('sets selectedProductId to the product id', () => {
      expect(result.selectedProductId).toEqual(productId);
    });
  });

  describe('when ProductLoadSuccessAction is triggered', () => {

    let result;

    beforeEach(() => {
      initialState.loading = true;
      let productLoadSuccess = new ProductLoadSuccess(product);
      
      result = reducer(initialState, productLoadSuccess);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });
  });

  describe('when ProductLoadFailureAction is triggered', () => {

    let error: string;
    let result;

    beforeEach(() => {
      initialState.loading = true;
      error = 'error';      
      initialState.errors = new Array('firstError');
      let productLoadFailure = new ProductLoadFailure(error);

      result = reducer(initialState, productLoadFailure);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('adds an error to state.errors', () => {
      expect(result.errors.length).toEqual(2);
    });
  });

  describe('getProductLoading', () => {
    
    it('returns loading state', () => {
      expect(getProductLoading(initialState)).toEqual(initialState.loading);
    });
  });

  describe('getSelectedProductId', () => {
    
    it('returns selectedProductId', () => {
      expect(getSelectedProductId(initialState)).toEqual(initialState.selectedProductId);
    });
  });
});
