import { TestBed } from '@angular/core/testing';

import {
  DaffAuthCheckFailure,
  DaffAuthGuardLogout,
  DaffAuthLogoutSuccess,
} from '@daffodil/auth/state';
import {
  daffCustomerInitialState as initialState,
  DaffCustomerReducerState,
} from '@daffodil/customer/state';
import { DaffCustomerFactory } from '@daffodil/customer/testing';

import { daffCustomerAuthResetAfterLogoutReducer as reducer } from './customer.reducer';

describe('@daffodil/customer-auth/state | daffCustomerAuthResetAfterLogoutReducer', () => {
  let customerFactory: DaffCustomerFactory;
  let state: DaffCustomerReducerState;
  let result: DaffCustomerReducerState;

  beforeEach(() => {
    customerFactory = TestBed.inject(DaffCustomerFactory);
  });

  describe('when an unknown action is triggered', () => {
    it('should return the current state', () => {
      const action = <any>{};

      result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when DaffAuthLogoutSuccess is triggered', () => {
    beforeEach(() => {
      const revokeAction = new DaffAuthLogoutSuccess();
      state = {
        ...initialState,
        customer: customerFactory.create(),
      };

      result = reducer(state, revokeAction);
    });

    it('resets state', () => {
      expect(result).toEqual(initialState);
    });
  });

  describe('when DaffAuthCheckFailure is triggered', () => {
    beforeEach(() => {
      const revokeAction = new DaffAuthCheckFailure(null);
      state = {
        ...initialState,
        customer: customerFactory.create(),
      };

      result = reducer(state, revokeAction);
    });

    it('resets state', () => {
      expect(result).toEqual(initialState);
    });
  });

  describe('when DaffAuthGuardLogout is triggered', () => {
    beforeEach(() => {
      const revokeAction = new DaffAuthGuardLogout(null);
      state = {
        ...initialState,
        customer: customerFactory.create(),
      };

      result = reducer(state, revokeAction);
    });

    it('resets state', () => {
      expect(result).toEqual(initialState);
    });
  });
});
