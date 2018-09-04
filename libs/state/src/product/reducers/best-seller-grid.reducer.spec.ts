import { Product, ProductFactory } from "@daffodil/core";

import { BestSellerGridLoad, BestSellerGridLoadSuccess, BestSellerGridLoadFailure } from "../actions/best-seller-grid.actions";
import { initialState, reducer, getBestSellerGridLoading } from "../reducers/best-seller-grid.reducer";


describe('Product | Best Sellers Reducer', () => {

  let productFactory: ProductFactory;
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

  describe('when BestSellerGridLoadAction is triggered', () => {

    it('sets loading state to true', () => {
      const productGridLoadAction: BestSellerGridLoad = new BestSellerGridLoad();
      
      const result = reducer(initialState, productGridLoadAction);

      expect(result.loading).toEqual(true);
    });
  });

  describe('when BestSellerGridLoadSuccessAction is triggered', () => {

    let products: Product[];
    let result;

    beforeEach(() => {
      initialState.loading = true;
      products = new Array(product);
      let productGridLoadSuccess = new BestSellerGridLoadSuccess(products);
      
      result = reducer(initialState, productGridLoadSuccess);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });
  });

  describe('when BestSellerGridLoadFailureAction is triggered', () => {

    let error: string;
    let result;

    beforeEach(() => {
      initialState.loading = true;
      error = 'error';      
      initialState.errors = new Array('firstError');
      let productGridLoadFailure = new BestSellerGridLoadFailure(error);

      result = reducer(initialState, productGridLoadFailure);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('adds an error to state.errors', () => {
      expect(result.errors.length).toEqual(2);
    });
  });

  describe('getBestSellerGridLoading', () => {
    
    it('returns loading state', () => {
      expect(getBestSellerGridLoading(initialState)).toEqual(initialState.loading);
    });
  });
});
