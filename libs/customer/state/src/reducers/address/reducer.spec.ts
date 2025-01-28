import { TestBed } from '@angular/core/testing';

import {
  DaffState,
  DaffStateError,
} from '@daffodil/core/state';
import {
  DaffCustomer,
  DaffCustomerAddress,
} from '@daffodil/customer';
import {
  DaffCustomerAddressLoad,
  DaffCustomerAddressLoadSuccess,
  DaffCustomerAddressLoadFailure,
  daffCustomerAddressInitialState as initialState,
  DaffCustomerAddressReducerState,
  DaffCustomerAddressUpdate,
  DaffCustomerAddressUpdateFailure,
  DaffCustomerAddressUpdateSuccess,
  DaffCustomerAddressDelete,
  DaffCustomerAddressDeleteFailure,
  DaffCustomerAddressDeleteSuccess,
  DaffCustomerAddressAdd,
  DaffCustomerAddressAddFailure,
  DaffCustomerAddressAddSuccess,
  DaffCustomerAddressList,
  DaffCustomerAddressListFailure,
  DaffCustomerAddressListSuccess,
} from '@daffodil/customer/state';
import { DaffCustomerAddressFactory } from '@daffodil/customer/testing';

import { daffCustomerAddressReducer as reducer } from './reducer';

describe('@daffodil/customer/state | daffCustomerAddressReducer', () => {
  let addressFactory: DaffCustomerAddressFactory;
  let mockAddress: DaffCustomerAddress;

  beforeEach(() => {
    addressFactory = TestBed.inject(DaffCustomerAddressFactory);
    mockAddress = addressFactory.create();
  });

  describe('when an unknown action is triggered', () => {
    it('should return the current state', () => {
      const action = <any>{};

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when CustomerAddressListAction is triggered', () => {
    let result: DaffCustomerAddressReducerState;

    beforeEach(() => {
      const customerListAction = new DaffCustomerAddressList();

      result = reducer(initialState, customerListAction);
    });

    it('sets loading state to resolving', () => {
      expect(result.daffState).toEqual(DaffState.Resolving);
    });
  });

  describe('when CustomerAddressListSuccessAction is triggered', () => {
    let mockError: DaffStateError;
    let result: DaffCustomerAddressReducerState;
    let state: DaffCustomerAddressReducerState;

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

      const customerListSuccess = new DaffCustomerAddressListSuccess([mockAddress]);

      result = reducer(state, customerListSuccess);
    });

    it('sets loading to stable', () => {
      expect(result.daffState).toEqual(DaffState.Stable);
    });

    it('should reset errors', () => {
      expect(result.daffErrors).toEqual([]);
    });
  });

  describe('when CustomerAddressListFailureAction is triggered', () => {
    let result: DaffCustomerAddressReducerState;
    let state: DaffCustomerAddressReducerState;
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

      const customerListFailureAction = new DaffCustomerAddressListFailure(mockError);

      result = reducer(state, customerListFailureAction);
    });

    it('stores the errors in state', () => {
      expect(result.daffErrors).toContain(mockError);
      expect(result.daffErrors.length).toEqual(1);
    });

    it('sets loading to error', () => {
      expect(result.daffState).toEqual(DaffState.Error);
    });
  });

  describe('when CustomerAddressLoadAction is triggered', () => {
    let result: DaffCustomerAddressReducerState;

    beforeEach(() => {
      const customerLoadAction = new DaffCustomerAddressLoad('id');

      result = reducer(initialState, customerLoadAction);
    });

    it('sets loading state to resolving', () => {
      expect(result.daffState).toEqual(DaffState.Resolving);
    });
  });

  describe('when CustomerAddressLoadSuccessAction is triggered', () => {
    let mockError: DaffStateError;
    let result: DaffCustomerAddressReducerState;
    let state: DaffCustomerAddressReducerState;

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

      const customerLoadSuccess = new DaffCustomerAddressLoadSuccess(mockAddress);

      result = reducer(state, customerLoadSuccess);
    });

    it('sets loading to stable', () => {
      expect(result.daffState).toEqual(DaffState.Stable);
    });

    it('should reset errors', () => {
      expect(result.daffErrors).toEqual([]);
    });
  });

  describe('when CustomerAddressLoadFailureAction is triggered', () => {
    let result: DaffCustomerAddressReducerState;
    let state: DaffCustomerAddressReducerState;
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

      const customerLoadFailureAction = new DaffCustomerAddressLoadFailure(mockError, 'id');

      result = reducer(state, customerLoadFailureAction);
    });

    it('stores the errors in state', () => {
      expect(result.daffErrors).toContain(mockError);
      expect(result.daffErrors.length).toEqual(1);
    });

    it('sets loading to error', () => {
      expect(result.daffState).toEqual(DaffState.Error);
    });
  });

  describe('when CustomerAddressUpdateAction is triggered', () => {
    let result: DaffCustomerAddressReducerState;

    beforeEach(() => {
      const customerUpdateAction = new DaffCustomerAddressUpdate(mockAddress);

      result = reducer(initialState, customerUpdateAction);
    });

    it('sets loading state to mutating', () => {
      expect(result.daffState).toEqual(DaffState.Updating);
    });
  });

  describe('when CustomerAddressUpdateSuccessAction is triggered', () => {
    let mockError: DaffStateError;
    let result: DaffCustomerAddressReducerState;
    let state: DaffCustomerAddressReducerState;

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

      const customerUpdateSuccess = new DaffCustomerAddressUpdateSuccess([mockAddress]);

      result = reducer(state, customerUpdateSuccess);
    });

    it('sets loading to stable', () => {
      expect(result.daffState).toEqual(DaffState.Stable);
    });

    it('should reset errors', () => {
      expect(result.daffErrors).toEqual([]);
    });
  });

  describe('when CustomerAddressUpdateFailureAction is triggered', () => {
    let result: DaffCustomerAddressReducerState;
    let state: DaffCustomerAddressReducerState;
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

      const customerUpdateFailureAction = new DaffCustomerAddressUpdateFailure(mockError, 'id');

      result = reducer(state, customerUpdateFailureAction);
    });

    it('sets loading to stable', () => {
      expect(result.daffState).toEqual(DaffState.Stable);
    });
  });

  describe('when CustomerAddressDeleteAction is triggered', () => {
    let result: DaffCustomerAddressReducerState;

    beforeEach(() => {
      const customerDeleteAction = new DaffCustomerAddressDelete('id');

      result = reducer(initialState, customerDeleteAction);
    });

    it('sets loading state to mutating', () => {
      expect(result.daffState).toEqual(DaffState.Updating);
    });
  });

  describe('when CustomerAddressDeleteSuccessAction is triggered', () => {
    let mockError: DaffStateError;
    let result: DaffCustomerAddressReducerState;
    let state: DaffCustomerAddressReducerState;

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

      const customerDeleteSuccess = new DaffCustomerAddressDeleteSuccess([]);

      result = reducer(state, customerDeleteSuccess);
    });

    it('sets loading to stable', () => {
      expect(result.daffState).toEqual(DaffState.Stable);
    });

    it('should reset errors', () => {
      expect(result.daffErrors).toEqual([]);
    });
  });

  describe('when CustomerAddressDeleteFailureAction is triggered', () => {
    let result: DaffCustomerAddressReducerState;
    let state: DaffCustomerAddressReducerState;
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

      const customerDeleteFailureAction = new DaffCustomerAddressDeleteFailure(mockError, 'id');

      result = reducer(state, customerDeleteFailureAction);
    });

    it('sets loading to stable', () => {
      expect(result.daffState).toEqual(DaffState.Stable);
    });
  });

  describe('when CustomerAddressAddAction is triggered', () => {
    let result: DaffCustomerAddressReducerState;

    beforeEach(() => {
      const customerAddAction = new DaffCustomerAddressAdd(mockAddress);

      result = reducer(initialState, customerAddAction);
    });

    it('sets loading state to mutating', () => {
      expect(result.daffState).toEqual(DaffState.Updating);
    });
  });

  describe('when CustomerAddressAddSuccessAction is triggered', () => {
    let mockError: DaffStateError;
    let result: DaffCustomerAddressReducerState;
    let state: DaffCustomerAddressReducerState;

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

      const customerAddSuccess = new DaffCustomerAddressAddSuccess([mockAddress]);

      result = reducer(state, customerAddSuccess);
    });

    it('sets loading to stable', () => {
      expect(result.daffState).toEqual(DaffState.Stable);
    });

    it('should reset errors', () => {
      expect(result.daffErrors).toEqual([]);
    });
  });

  describe('when CustomerAddressAddFailureAction is triggered', () => {
    let result: DaffCustomerAddressReducerState;
    let state: DaffCustomerAddressReducerState;
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

      const customerAddFailureAction = new DaffCustomerAddressAddFailure(mockError, 'id');

      result = reducer(state, customerAddFailureAction);
    });

    it('sets loading to stable', () => {
      expect(result.daffState).toEqual(DaffState.Stable);
    });
  });
});
