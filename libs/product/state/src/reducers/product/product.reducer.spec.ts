import { daffArrayToDict } from '@daffodil/core';
import { DaffProduct } from '@daffodil/product';
import {
  DaffProductPageLoad,
  DaffProductPageLoadSuccess,
  DaffProductPageLoadFailure,
  DaffProductPageUpdateQty,
  DaffProductReducerState,
} from '@daffodil/product/state';
import { DaffProductFactory } from '@daffodil/product/testing';

import { DaffProductPageLoadByUrl } from '../../actions/public_api';
import {
  initialState,
  daffProductReducer,
} from './product.reducer';

describe('Product | Product Reducer', () => {

  let productFactory: DaffProductFactory;
  let product: DaffProduct;
  let productId: string;

  beforeEach(() => {
    productFactory = new DaffProductFactory();

    product = productFactory.create();
    productId = product.id;
  });

  describe('when an unknown action is triggered', () => {

    it('should return the current state', () => {
      const action = <any>{};

      const result = daffProductReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when ProductLoadByUrlAction is triggered', () => {
    let result;

    beforeEach(() => {
      const productLoadAction = new DaffProductPageLoadByUrl(product.url);

      result = daffProductReducer(initialState, productLoadAction);
    });

    it('sets loading state to true', () => {
      expect(result.loading).toEqual(true);
    });

    it('resets selectedProductId', () => {
      expect(result.selectedProductId).toBeNull();
    });
  });

  describe('when ProductLoadAction is triggered', () => {
    let result;

    beforeEach(() => {
      const productLoadAction: DaffProductPageLoad = new DaffProductPageLoad(productId);

      result = daffProductReducer(initialState, productLoadAction);
    });

    it('sets loading state to true', () => {
      expect(result.loading).toEqual(true);
    });

    it('resets selectedProductId', () => {
      expect(result.selectedProductId).toBeNull();
    });
  });

  describe('when ProductLoadSuccessAction is triggered', () => {

    let result;
    let state: DaffProductReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
      };

      const productLoadSuccess = new DaffProductPageLoadSuccess({
        id: product.id,
        products: daffArrayToDict([product], p => p.id),
      });
      result = daffProductReducer(state, productLoadSuccess);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('sets selectedProductId to the loaded product ID', () => {
      expect(result.selectedProductId).toEqual(product.id);
    });
  });

  describe('when ProductLoadFailureAction is triggered', () => {

    const error = {
      code: 'error code',
      message: 'error message',
    };
    let result;
    let state: DaffProductReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
        errors: [{ code: 'firstErrorCode', message: 'firstErrorMessage' }],
      };

      const productLoadFailure = new DaffProductPageLoadFailure(error);

      result = daffProductReducer(state, productLoadFailure);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('adds an error to state.errors', () => {
      expect(result.errors.length).toEqual(2);
    });
  });

  describe('when UpdateQtyAction is triggered', () => {

    let givenQty: number;
    let result;

    beforeEach(() => {
      givenQty = 3;
      const productLoadFailure = new DaffProductPageUpdateQty(givenQty);

      result = daffProductReducer(initialState, productLoadFailure);
    });

    it('sets qty to payload', () => {
      expect(result.qty).toEqual(givenQty);
    });
  });
});
