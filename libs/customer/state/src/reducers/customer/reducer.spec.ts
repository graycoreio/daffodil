import { TestBed } from '@angular/core/testing';

import {
  DaffState,
  DaffStateError,
} from '@daffodil/core/state';
import { DaffCustomer } from '@daffodil/customer';
import {
  DaffCustomerLoad,
  DaffCustomerLoadSuccess,
  DaffCustomerLoadFailure,
  daffCustomerInitialState as initialState,
  DaffCustomerReducerState,
  DaffCustomerUpdate,
  DaffCustomerUpdateFailure,
  DaffCustomerUpdateSuccess,
  DaffCustomerChangeEmail,
  DaffCustomerChangeEmailFailure,
  DaffCustomerChangeEmailSuccess,
  DaffCustomerChangePassword,
  DaffCustomerChangePasswordFailure,
  DaffCustomerChangePasswordSuccess,
  DaffCustomerClearErrors,
} from '@daffodil/customer/state';
import { DaffCustomerFactory } from '@daffodil/customer/testing';

import { daffCustomerReducer as reducer } from './reducer';

describe('@daffodil/customer/state | daffCustomerReducer', () => {
  let customerFactory: DaffCustomerFactory;

  beforeEach(() => {
    customerFactory = TestBed.inject(DaffCustomerFactory);
  });

  describe('when an unknown action is triggered', () => {
    it('should return the current state', () => {
      const action = <any>{};

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when CustomerLoadAction is triggered', () => {
    let result: DaffCustomerReducerState;

    beforeEach(() => {
      const customerLoadAction = new DaffCustomerLoad();

      result = reducer(initialState, customerLoadAction);
    });

    it('sets loading state to resolving', () => {
      expect(result.loading).toEqual(DaffState.Resolving);
    });
  });

  describe('when CustomerLoadSuccessAction is triggered', () => {
    let mockError: DaffStateError;
    let mockCustomer: DaffCustomer;
    let result: DaffCustomerReducerState;
    let state: DaffCustomerReducerState;

    beforeEach(() => {
      mockError = {
        code: 'error code',
        message: 'error message',
      };
      state = {
        ...initialState,
        loading: DaffState.Resolving,
        errors: [mockError],
      };
      mockCustomer = customerFactory.create();

      const customerLoadSuccess = new DaffCustomerLoadSuccess(mockCustomer);

      result = reducer(state, customerLoadSuccess);
    });

    it('sets loading to stable', () => {
      expect(result.loading).toEqual(DaffState.Stable);
    });

    it('should reset errors', () => {
      expect(result.errors).toEqual([]);
    });

    it('should store the customer', () => {
      expect(result.customer).toEqual(mockCustomer);
    });
  });

  describe('when CustomerLoadFailureAction is triggered', () => {
    let result: DaffCustomerReducerState;
    let state: DaffCustomerReducerState;
    let mockError: DaffStateError;

    beforeEach(() => {
      mockError = {
        code: 'error code',
        message: 'error message',
      };
      state = {
        ...initialState,
        loading: DaffState.Resolving,
        errors: [
          { code: 'firstErrorCode', message: 'firstErrorMessage' },
        ],
      };

      const customerLoadFailureAction = new DaffCustomerLoadFailure(mockError);

      result = reducer(state, customerLoadFailureAction);
    });

    it('stores the errors in state', () => {
      expect(result.errors).toContain(mockError);
      expect(result.errors.length).toEqual(1);
    });

    it('sets loading to stable', () => {
      expect(result.loading).toEqual(DaffState.Stable);
    });
  });

  describe('when CustomerUpdateAction is triggered', () => {
    let result: DaffCustomerReducerState;

    beforeEach(() => {
      const customerUpdateAction = new DaffCustomerUpdate(customerFactory.create());

      result = reducer(initialState, customerUpdateAction);
    });

    it('sets loading state to mutating', () => {
      expect(result.loading).toEqual(DaffState.Mutating);
    });
  });

  describe('when CustomerUpdateSuccessAction is triggered', () => {
    let mockError: DaffStateError;
    let mockCustomer: DaffCustomer;
    let result: DaffCustomerReducerState;
    let state: DaffCustomerReducerState;

    beforeEach(() => {
      mockError = {
        code: 'error code',
        message: 'error message',
      };
      state = {
        ...initialState,
        loading: DaffState.Resolving,
        errors: [mockError],
      };
      mockCustomer = customerFactory.create();

      const customerUpdateSuccess = new DaffCustomerUpdateSuccess(mockCustomer);

      result = reducer(state, customerUpdateSuccess);
    });

    it('sets loading to stable', () => {
      expect(result.loading).toEqual(DaffState.Stable);
    });

    it('should reset errors', () => {
      expect(result.errors).toEqual([]);
    });

    it('should store the customer', () => {
      expect(result.customer).toEqual(mockCustomer);
    });
  });

  describe('when CustomerUpdateFailureAction is triggered', () => {
    let result: DaffCustomerReducerState;
    let state: DaffCustomerReducerState;
    let mockError: DaffStateError;

    beforeEach(() => {
      mockError = {
        code: 'error code',
        message: 'error message',
      };
      state = {
        ...initialState,
        loading: DaffState.Resolving,
        errors: [
          { code: 'firstErrorCode', message: 'firstErrorMessage' },
        ],
      };

      const customerUpdateFailureAction = new DaffCustomerUpdateFailure(mockError);

      result = reducer(state, customerUpdateFailureAction);
    });

    it('stores the errors in state', () => {
      expect(result.errors).toContain(mockError);
      expect(result.errors.length).toEqual(1);
    });

    it('sets loading to stable', () => {
      expect(result.loading).toEqual(DaffState.Stable);
    });
  });

  describe('when CustomerChangeEmailAction is triggered', () => {
    let result: DaffCustomerReducerState;

    beforeEach(() => {
      const customerChangeEmailAction = new DaffCustomerChangeEmail('email', 'password');

      result = reducer(initialState, customerChangeEmailAction);
    });

    it('sets loading state to mutating', () => {
      expect(result.loading).toEqual(DaffState.Mutating);
    });
  });

  describe('when CustomerChangeEmailSuccessAction is triggered', () => {
    let mockError: DaffStateError;
    let mockCustomer: DaffCustomer;
    let result: DaffCustomerReducerState;
    let state: DaffCustomerReducerState;

    beforeEach(() => {
      mockError = {
        code: 'error code',
        message: 'error message',
      };
      state = {
        ...initialState,
        loading: DaffState.Resolving,
        errors: [mockError],
      };
      mockCustomer = customerFactory.create();

      const customerChangeEmailSuccess = new DaffCustomerChangeEmailSuccess(mockCustomer);

      result = reducer(state, customerChangeEmailSuccess);
    });

    it('sets loading to stable', () => {
      expect(result.loading).toEqual(DaffState.Stable);
    });

    it('should reset errors', () => {
      expect(result.errors).toEqual([]);
    });

    it('should store the customer', () => {
      expect(result.customer).toEqual(mockCustomer);
    });
  });

  describe('when CustomerChangeEmailFailureAction is triggered', () => {
    let result: DaffCustomerReducerState;
    let state: DaffCustomerReducerState;
    let mockError: DaffStateError;

    beforeEach(() => {
      mockError = {
        code: 'error code',
        message: 'error message',
      };
      state = {
        ...initialState,
        loading: DaffState.Resolving,
        errors: [
          { code: 'firstErrorCode', message: 'firstErrorMessage' },
        ],
      };

      const customerChangeEmailFailureAction = new DaffCustomerChangeEmailFailure(mockError);

      result = reducer(state, customerChangeEmailFailureAction);
    });

    it('stores the errors in state', () => {
      expect(result.errors).toContain(mockError);
      expect(result.errors.length).toEqual(1);
    });

    it('sets loading to stable', () => {
      expect(result.loading).toEqual(DaffState.Stable);
    });
  });

  describe('when CustomerChangePasswordAction is triggered', () => {
    let result: DaffCustomerReducerState;

    beforeEach(() => {
      const customerChangePasswordAction = new DaffCustomerChangePassword('email', 'password');

      result = reducer(initialState, customerChangePasswordAction);
    });

    it('sets loading state to mutating', () => {
      expect(result.loading).toEqual(DaffState.Mutating);
    });
  });

  describe('when CustomerChangePasswordSuccessAction is triggered', () => {
    let mockError: DaffStateError;
    let result: DaffCustomerReducerState;
    let state: DaffCustomerReducerState;

    beforeEach(() => {
      mockError = {
        code: 'error code',
        message: 'error message',
      };
      state = {
        ...initialState,
        loading: DaffState.Resolving,
        errors: [mockError],
      };

      const customerChangePasswordSuccess = new DaffCustomerChangePasswordSuccess();

      result = reducer(state, customerChangePasswordSuccess);
    });

    it('sets loading to stable', () => {
      expect(result.loading).toEqual(DaffState.Stable);
    });

    it('should reset errors', () => {
      expect(result.errors).toEqual([]);
    });
  });

  describe('when CustomerChangePasswordFailureAction is triggered', () => {
    let result: DaffCustomerReducerState;
    let state: DaffCustomerReducerState;
    let mockError: DaffStateError;

    beforeEach(() => {
      mockError = {
        code: 'error code',
        message: 'error message',
      };
      state = {
        ...initialState,
        loading: DaffState.Resolving,
        errors: [
          { code: 'firstErrorCode', message: 'firstErrorMessage' },
        ],
      };

      const customerChangePasswordFailureAction = new DaffCustomerChangePasswordFailure(mockError);

      result = reducer(state, customerChangePasswordFailureAction);
    });

    it('stores the errors in state', () => {
      expect(result.errors).toContain(mockError);
      expect(result.errors.length).toEqual(1);
    });

    it('sets loading to stable', () => {
      expect(result.loading).toEqual(DaffState.Stable);
    });
  });

  describe('when CustomerClearErrorsAction is triggered', () => {
    let mockError: DaffStateError;
    let result: DaffCustomerReducerState;
    let state: DaffCustomerReducerState;

    beforeEach(() => {
      mockError = {
        code: 'error code',
        message: 'error message',
      };
      state = {
        ...initialState,
        errors: [mockError],
      };

      const customerLoadSuccess = new DaffCustomerClearErrors();

      result = reducer(state, customerLoadSuccess);
    });

    it('should reset errors', () => {
      expect(result.errors).toEqual([]);
    });
  });
});
