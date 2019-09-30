import { DaffProductFactory } from '@daffodil/product/testing';

import { DaffProductGridLoad, DaffProductGridLoadSuccess, DaffProductGridLoadFailure } from '../actions/product-grid.actions';
import { initialState, reducer, getProductGridLoading, State } from '../reducers/product-grid.reducer';
import { DaffProduct } from '../models/product';

describe('Product | Product Grid Reducer', () => {

  let productFactory: DaffProductFactory;
  let product: DaffProduct;

  beforeEach(() => {
    productFactory = new DaffProductFactory();

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
      const productGridLoadAction: DaffProductGridLoad = new DaffProductGridLoad();
      
      const result = reducer(initialState, productGridLoadAction);

      expect(result.loading).toEqual(true);
    });
  });

  describe('when ProductGridLoadSuccessAction is triggered', () => {

    let products: DaffProduct[];
    let result;
    let state: State;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
      }
      products = new Array(product);
      const productGridLoadSuccess = new DaffProductGridLoadSuccess(products);
      
      result = reducer(state, productGridLoadSuccess);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });
  });

  describe('when ProductGridLoadFailureAction is triggered', () => {

    let error: string;
    let result;
    let state: State;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
        errors: new Array('firstError')
      }
      
      error = 'error';      
      const productGridLoadFailure = new DaffProductGridLoadFailure(error);
      result = reducer(state, productGridLoadFailure);
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
