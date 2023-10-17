import { TestBed } from '@angular/core/testing';

import { daffArrayToDict } from '@daffodil/core';
import { DaffState } from '@daffodil/core/state';
import { DaffProduct } from '@daffodil/product';
import {
  DaffProductPageLoad,
  DaffProductPageLoadSuccess,
  DaffProductPageLoadFailure,
  DaffProductPageUpdateQty,
  DaffProductReducerState,
} from '@daffodil/product/state';
import { DaffProductFactory } from '@daffodil/product/testing';

import {
  daffProductReducerInitialState,
  daffProductReducer,
} from './product.reducer';
import { DaffProductPageLoadByUrl } from '../../actions/public_api';

describe('@daffodil/product/state | daffProductReducer', () => {

  let productFactory: DaffProductFactory;
  let product: DaffProduct;
  let productId: string;

  beforeEach(() => {
    productFactory = TestBed.inject(DaffProductFactory);

    product = productFactory.create();
    productId = product.id;
  });

  describe('when an unknown action is triggered', () => {

    it('should return the current state', () => {
      const action = <any>{};

      const result = daffProductReducer(daffProductReducerInitialState, action);

      expect(result).toBe(daffProductReducerInitialState);
    });
  });

  describe('when ProductLoadByUrlAction is triggered', () => {
    let result: DaffProductReducerState;

    beforeEach(() => {
      const productLoadAction = new DaffProductPageLoadByUrl(product.url);

      result = daffProductReducer(daffProductReducerInitialState, productLoadAction);
    });

    it('sets loading state to resolving', () => {
      expect(result.daffState).toEqual(DaffState.Resolving);
    });

    it('resets currentProductId', () => {
      expect(result.currentProductId).toBeNull();
    });
  });

  describe('when ProductLoadAction is triggered', () => {
    let result: DaffProductReducerState;

    beforeEach(() => {
      const productLoadAction: DaffProductPageLoad = new DaffProductPageLoad(productId);

      result = daffProductReducer(daffProductReducerInitialState, productLoadAction);
    });

    it('sets loading state to resolving', () => {
      expect(result.daffState).toEqual(DaffState.Resolving);
    });

    it('resets currentProductId', () => {
      expect(result.currentProductId).toBeNull();
    });
  });

  describe('when ProductLoadSuccessAction is triggered', () => {

    let result: DaffProductReducerState;
    let state: DaffProductReducerState;

    beforeEach(() => {
      state = {
        ...daffProductReducerInitialState,
        daffState: DaffState.Resolving,
      };

      const productLoadSuccess = new DaffProductPageLoadSuccess({
        id: product.id,
        products: [product],
      });
      result = daffProductReducer(state, productLoadSuccess);
    });

    it('sets loading to stable', () => {
      expect(result.daffState).toEqual(DaffState.Stable);
    });

    it('sets currentProductId to the loaded product ID', () => {
      expect(result.currentProductId).toEqual(product.id);
    });
  });

  describe('when ProductLoadFailureAction is triggered', () => {

    const error = {
      code: 'error code',
      message: 'error message',
    };
    let result: DaffProductReducerState;
    let state: DaffProductReducerState;

    beforeEach(() => {
      state = {
        ...daffProductReducerInitialState,
        daffState: DaffState.Resolving,
        daffErrors: [{ code: 'firstErrorCode', message: 'firstErrorMessage' }],
      };

      const productLoadFailure = new DaffProductPageLoadFailure(error);

      result = daffProductReducer(state, productLoadFailure);
    });

    it('sets loading to stable', () => {
      expect(result.daffState).toEqual(DaffState.Stable);
    });

    it('stores the error', () => {
      expect(result.daffErrors.length).toEqual(1);
    });
  });

  describe('when UpdateQtyAction is triggered', () => {

    let givenQty: number;
    let result: DaffProductReducerState;

    beforeEach(() => {
      givenQty = 3;
      const productLoadFailure = new DaffProductPageUpdateQty(givenQty);

      result = daffProductReducer(daffProductReducerInitialState, productLoadFailure);
    });

    it('sets qty to payload', () => {
      expect(result.qty).toEqual(givenQty);
    });
  });
});
