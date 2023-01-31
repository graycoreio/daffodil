import { TestBed } from '@angular/core/testing';

import { DaffAuthRevoke } from '@daffodil/auth/state';
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

  describe('when AuthRevokeAction is triggered', () => {

    beforeEach(() => {
      const revokeAction = new DaffAuthRevoke();
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
