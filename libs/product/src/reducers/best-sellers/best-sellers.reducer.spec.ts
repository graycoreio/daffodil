import { DaffBestSellersLoad, DaffBestSellersLoadSuccess, DaffBestSellersLoadFailure, DaffBestSellersReset } from '../../actions/best-sellers.actions';
import { initialState, reducer, getBestSellersLoading, getBestSellersIds } from './best-sellers.reducer';
import { DaffProduct } from '../../models/product';

import { DaffProductFactory } from '@daffodil/product/testing';
import { DaffBestSellersReducerState } from './best-sellers-reducer-state.interface';

describe('Product | Best Sellers Reducer', () => {

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

  describe('when BestSellersLoadAction is triggered', () => {

    it('sets loading state to true', () => {
      const productsLoadAction: DaffBestSellersLoad = new DaffBestSellersLoad();

      const result = reducer(initialState, productsLoadAction);

      expect(result.loading).toEqual(true);
    });
  });

  describe('when BestSellersLoadSuccessAction is triggered', () => {

    let products: DaffProduct[];
    let result;
    let state: DaffBestSellersReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true
      }

      products = new Array(product);
      const productsLoadSuccess = new DaffBestSellersLoadSuccess(products);

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
    let state: DaffBestSellersReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
        errors: new Array('firstError'),
      }
      error = 'error';
      const productsLoadFailure = new DaffBestSellersLoadFailure(error);

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
      const expectedState = {
        loading: false,
        productIds: [],
        errors: []
      }
      const bestSellersReset = new DaffBestSellersReset();
      const result = reducer(initialState, bestSellersReset);

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
