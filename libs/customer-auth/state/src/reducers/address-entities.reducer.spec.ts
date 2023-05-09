import { TestBed } from '@angular/core/testing';

import {
  DaffAuthCheckFailure,
  DaffAuthGuardLogout,
  DaffAuthLogoutSuccess,
} from '@daffodil/auth/state';
import { DaffOperationEntityState } from '@daffodil/core/state';
import { DaffCustomerAddress } from '@daffodil/customer';
import { daffCustomerAddressEntitiesAdapter } from '@daffodil/customer/state';
import { DaffCustomerAddressFactory } from '@daffodil/customer/testing';

import { daffCustomerAuthResetAddressEntitiesAfterLogoutReducer as reducer } from './address-entities.reducer';

describe('@daffodil/customer-auth/state | daffCustomerAuthResetAddressEntitiesAfterLogoutReducer', () => {
  let addressFactory: DaffCustomerAddressFactory;
  let initialState: DaffOperationEntityState<DaffCustomerAddress>;
  let state: DaffOperationEntityState<DaffCustomerAddress>;
  let result: DaffOperationEntityState<DaffCustomerAddress>;

  beforeEach(() => {
    initialState = daffCustomerAddressEntitiesAdapter().getInitialState();
    addressFactory = TestBed.inject(DaffCustomerAddressFactory);
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
      state = daffCustomerAddressEntitiesAdapter().list(addressFactory.createMany(5), initialState);

      result = reducer(state, revokeAction);
    });

    it('resets state', () => {
      expect(result).toEqual(initialState);
    });
  });

  describe('when DaffAuthCheckFailure is triggered', () => {
    beforeEach(() => {
      const revokeAction = new DaffAuthCheckFailure(null);
      state = daffCustomerAddressEntitiesAdapter().list(addressFactory.createMany(5), initialState);

      result = reducer(state, revokeAction);
    });

    it('resets state', () => {
      expect(result).toEqual(initialState);
    });
  });

  describe('when DaffAuthGuardLogout is triggered', () => {
    beforeEach(() => {
      const revokeAction = new DaffAuthGuardLogout(null);
      state = daffCustomerAddressEntitiesAdapter().list(addressFactory.createMany(5), initialState);

      result = reducer(state, revokeAction);
    });

    it('resets state', () => {
      expect(result).toEqual(initialState);
    });
  });
});
