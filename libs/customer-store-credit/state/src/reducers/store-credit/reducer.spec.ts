import { TestBed } from '@angular/core/testing';

import {
  DaffState,
  DaffStateError,
} from '@daffodil/core/state';
import { DaffCustomerStoreCredit } from '@daffodil/customer-store-credit';
import {
  daffCustomerStoreCreditInitialState as initialState,
  DaffCustomerStoreCreditReducerState,
  DaffCustomerStoreCreditLoad,
  DaffCustomerStoreCreditLoadFailure,
  DaffCustomerStoreCreditLoadSuccess,
} from '@daffodil/customer-store-credit/state';
import { DaffCustomerStoreCreditFactory } from '@daffodil/customer-store-credit/testing';

import { daffCustomerStoreCreditReducer as reducer } from './reducer';

describe('@daffodil/customer-store-credit/state | daffCustomerStoreCreditReducer', () => {
  let storeCreditFactory: DaffCustomerStoreCreditFactory;
  let mockStoreCredit: DaffCustomerStoreCredit;

  beforeEach(() => {
    storeCreditFactory = TestBed.inject(DaffCustomerStoreCreditFactory);
    mockStoreCredit = storeCreditFactory.create();
  });

  describe('when an unknown action is triggered', () => {
    it('should return the current state', () => {
      const action = <any>{};

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when CustomerStoreCreditLoadAction is triggered', () => {
    let result: DaffCustomerStoreCreditReducerState;

    beforeEach(() => {
      const listAction = new DaffCustomerStoreCreditLoad();

      result = reducer(initialState, listAction);
    });

    it('sets daffState state to resolving', () => {
      expect(result.daffState).toEqual(DaffState.Resolving);
    });
  });

  describe('when CustomerStoreCreditListSuccessAction is triggered', () => {
    let mockError: DaffStateError;
    let result: DaffCustomerStoreCreditReducerState;
    let state: DaffCustomerStoreCreditReducerState;

    beforeEach(() => {
      mockError = {
        code: 'error code',
        message: 'error message',
      };
      state = {
        ...initialState,
        daffState: DaffState.Resolving,
        daffErrors: [mockError],
      };

      const listSuccess = new DaffCustomerStoreCreditLoadSuccess(mockStoreCredit);

      result = reducer(state, listSuccess);
    });

    it('stores store credit', () => {
      expect(result.storeCredit).toEqual(mockStoreCredit);
    });

    it('sets loading to stable', () => {
      expect(result.daffState).toEqual(DaffState.Stable);
    });

    it('should reset errors', () => {
      expect(result.daffErrors).toEqual([]);
    });
  });

  describe('when CustomerStoreCreditListFailureAction is triggered', () => {
    let result: DaffCustomerStoreCreditReducerState;
    let state: DaffCustomerStoreCreditReducerState;
    let mockError: DaffStateError;

    beforeEach(() => {
      mockError = {
        code: 'error code',
        message: 'error message',
      };
      state = {
        ...initialState,
        daffState: DaffState.Resolving,
        daffErrors: [
          { code: 'firstErrorCode', message: 'firstErrorMessage' },
        ],
      };

      const listFailureAction = new DaffCustomerStoreCreditLoadFailure(mockError);

      result = reducer(state, listFailureAction);
    });

    it('stores the errors in state', () => {
      expect(result.daffErrors).toContain(mockError);
      expect(result.daffErrors.length).toEqual(1);
    });

    it('sets loading to stable', () => {
      expect(result.daffState).toEqual(DaffState.Stable);
    });
  });
});
