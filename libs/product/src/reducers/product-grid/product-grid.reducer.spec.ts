import { DaffProductFactory } from '@daffodil/product/testing';

import { DaffProductGridLoad, DaffProductGridLoadSuccess, DaffProductGridLoadFailure } from '../../actions/product-grid.actions';
import { initialState, daffProductGridReducer } from './product-grid.reducer';
import { DaffProduct } from '../../models/product';
import { DaffProductGridReducerState } from './product-grid-reducer-state.interface';

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

      const result = daffProductGridReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when ProductGridLoadAction is triggered', () => {

    it('sets loading state to true', () => {
      const productGridLoadAction: DaffProductGridLoad = new DaffProductGridLoad();
      
      const result = daffProductGridReducer(initialState, productGridLoadAction);

      expect(result.loading).toEqual(true);
    });
  });

  describe('when ProductGridLoadSuccessAction is triggered', () => {

    let products: DaffProduct[];
    let result;
    let state: DaffProductGridReducerState<DaffProduct>;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
      }
      products = new Array(product);
      const productGridLoadSuccess = new DaffProductGridLoadSuccess(products);
      
      result = daffProductGridReducer(state, productGridLoadSuccess);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });
  });

  describe('when ProductGridLoadFailureAction is triggered', () => {

    let error: string;
    let result;
    let state: DaffProductGridReducerState<DaffProduct>;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
        errors: new Array('firstError')
      }
      
      error = 'error';      
      const productGridLoadFailure = new DaffProductGridLoadFailure(error);
      result = daffProductGridReducer(state, productGridLoadFailure);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('adds an error to state.errors', () => {
      expect(result.errors.length).toEqual(2);
    });
  });
});
