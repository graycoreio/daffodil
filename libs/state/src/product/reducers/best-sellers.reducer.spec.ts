import { Product } from "@daffodil/core";
import { DaffProductFactory } from "@daffodil/core/testing";

import { BestSellersLoad, BestSellersLoadSuccess, BestSellersLoadFailure, BestSellersReset } from "../actions/best-sellers.actions";
import { initialState, reducer, getBestSellersLoading, getBestSellersIds, State } from "../reducers/best-sellers.reducer";


describe('Product | Best Sellers Reducer', () => {

  let productFactory: DaffProductFactory;
  let product: Product;

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

  describe('when BestSellersLoadAction is triggered', () => {

    it('sets loading state to true', () => {
      const productsLoadAction: BestSellersLoad = new BestSellersLoad();
      
      const result = reducer(initialState, productsLoadAction);

      expect(result.loading).toEqual(true);
    });
  });

  describe('when BestSellersLoadSuccessAction is triggered', () => {

    let products: Product[];
    let result;
    let state: State;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true
      }
  
      products = new Array(product);
      let productsLoadSuccess = new BestSellersLoadSuccess(products);
      
      result = reducer(state, productsLoadSuccess);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('should set productIds to ids of payload products', () => {
      expect(result.productIds).toEqual([product.id]);
    });
  });

  describe('when BestSellersLoadFailureAction is triggered', () => {

    let error: string;
    let result;
    let state: State;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
        errors: new Array('firstError'),
      }
      error = 'error';      
      let productsLoadFailure = new BestSellersLoadFailure(error);

      result = reducer(state, productsLoadFailure);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('adds an error to state.errors', () => {
      expect(result.errors.length).toEqual(2);
    });
  });

  describe('BestSellersReset', () => {
    
    it('resets state to initialState', () => {
      let expectedState = {
        loading: false,
        productIds: [],
        errors: []
      }
      let bestSellersReset = new BestSellersReset();
      let result = reducer(initialState, bestSellersReset);
      
      expect(result).toEqual(expectedState);
    });
  });

  describe('getBestSellersLoading', () => {
    
    it('returns loading state', () => {
      expect(getBestSellersLoading(initialState)).toEqual(initialState.loading);
    });
  });

  describe('getBestSellersIds', () => {
    
    it('returns productIds state', () => {
      expect(getBestSellersIds(initialState)).toEqual(initialState.productIds);
    });
  });
});
