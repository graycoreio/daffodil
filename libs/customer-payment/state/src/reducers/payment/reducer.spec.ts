import { TestBed } from '@angular/core/testing';

import {
  DaffState,
  DaffStateError,
} from '@daffodil/core/state';
import { DaffCustomerPayment } from '@daffodil/customer-payment';
import {
  DaffCustomerPaymentLoad,
  DaffCustomerPaymentLoadSuccess,
  DaffCustomerPaymentLoadFailure,
  daffCustomerPaymentInitialState as initialState,
  DaffCustomerPaymentReducerState,
  DaffCustomerPaymentUpdate,
  DaffCustomerPaymentUpdateFailure,
  DaffCustomerPaymentUpdateSuccess,
  DaffCustomerPaymentDelete,
  DaffCustomerPaymentDeleteFailure,
  DaffCustomerPaymentDeleteSuccess,
  DaffCustomerPaymentAdd,
  DaffCustomerPaymentAddFailure,
  DaffCustomerPaymentAddSuccess,
  DaffCustomerPaymentList,
  DaffCustomerPaymentListFailure,
  DaffCustomerPaymentListSuccess,
} from '@daffodil/customer-payment/state';
import {
  DaffCustomerPaymentFactory,
  DaffCustomerPaymentRequestFactory,
} from '@daffodil/customer-payment/testing';

import { daffCustomerPaymentReducer as reducer } from './reducer';

describe('@daffodil/customer-payment/state | daffCustomerPaymentReducer', () => {
  let paymentFactory: DaffCustomerPaymentFactory;
  let paymentRequestFactory: DaffCustomerPaymentRequestFactory;
  let mockPayment: DaffCustomerPayment;

  beforeEach(() => {
    paymentFactory = TestBed.inject(DaffCustomerPaymentFactory);
    paymentRequestFactory = TestBed.inject(DaffCustomerPaymentRequestFactory);
    mockPayment = paymentFactory.create();
  });

  describe('when an unknown action is triggered', () => {
    it('should return the current state', () => {
      const action = <any>{};

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when CustomerPaymentListAction is triggered', () => {
    let result: DaffCustomerPaymentReducerState;

    beforeEach(() => {
      const listAction = new DaffCustomerPaymentList();

      result = reducer(initialState, listAction);
    });

    it('sets loading state to resolving', () => {
      expect(result.daffState).toEqual(DaffState.Resolving);
    });
  });

  describe('when CustomerPaymentListSuccessAction is triggered', () => {
    let mockError: DaffStateError;
    let result: DaffCustomerPaymentReducerState;
    let state: DaffCustomerPaymentReducerState;

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

      const listSuccess = new DaffCustomerPaymentListSuccess([mockPayment]);

      result = reducer(state, listSuccess);
    });

    it('sets loading to stable', () => {
      expect(result.daffState).toEqual(DaffState.Stable);
    });

    it('should reset errors', () => {
      expect(result.daffErrors).toEqual([]);
    });
  });

  describe('when CustomerPaymentListFailureAction is triggered', () => {
    let result: DaffCustomerPaymentReducerState;
    let state: DaffCustomerPaymentReducerState;
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

      const listFailureAction = new DaffCustomerPaymentListFailure(mockError);

      result = reducer(state, listFailureAction);
    });

    it('stores the errors in state', () => {
      expect(result.daffErrors).toContain(mockError);
      expect(result.daffErrors.length).toEqual(1);
    });

    it('sets loading to error', () => {
      expect(result.daffState).toEqual(DaffState.Error);
    });
  });

  describe('when CustomerPaymentLoadAction is triggered', () => {
    let result: DaffCustomerPaymentReducerState;

    beforeEach(() => {
      const loadAction = new DaffCustomerPaymentLoad('id');

      result = reducer(initialState, loadAction);
    });

    it('sets loading state to resolving', () => {
      expect(result.daffState).toEqual(DaffState.Resolving);
    });
  });

  describe('when CustomerPaymentLoadSuccessAction is triggered', () => {
    let mockError: DaffStateError;
    let result: DaffCustomerPaymentReducerState;
    let state: DaffCustomerPaymentReducerState;

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

      const loadSuccess = new DaffCustomerPaymentLoadSuccess(mockPayment);

      result = reducer(state, loadSuccess);
    });

    it('sets loading to stable', () => {
      expect(result.daffState).toEqual(DaffState.Stable);
    });

    it('should reset errors', () => {
      expect(result.daffErrors).toEqual([]);
    });
  });

  describe('when CustomerPaymentLoadFailureAction is triggered', () => {
    let result: DaffCustomerPaymentReducerState;
    let state: DaffCustomerPaymentReducerState;
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

      const loadFailureAction = new DaffCustomerPaymentLoadFailure(mockError, 'id');

      result = reducer(state, loadFailureAction);
    });

    it('stores the errors in state', () => {
      expect(result.daffErrors).toContain(mockError);
      expect(result.daffErrors.length).toEqual(1);
    });

    it('sets loading to error', () => {
      expect(result.daffState).toEqual(DaffState.Error);
    });
  });

  describe('when CustomerPaymentUpdateAction is triggered', () => {
    let result: DaffCustomerPaymentReducerState;

    beforeEach(() => {
      const updateAction = new DaffCustomerPaymentUpdate(mockPayment);

      result = reducer(initialState, updateAction);
    });

    it('sets loading state to mutating', () => {
      expect(result.daffState).toEqual(DaffState.Updating);
    });
  });

  describe('when CustomerPaymentUpdateSuccessAction is triggered', () => {
    let mockError: DaffStateError;
    let result: DaffCustomerPaymentReducerState;
    let state: DaffCustomerPaymentReducerState;

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

      const updateSuccess = new DaffCustomerPaymentUpdateSuccess([mockPayment]);

      result = reducer(state, updateSuccess);
    });

    it('sets loading to stable', () => {
      expect(result.daffState).toEqual(DaffState.Stable);
    });

    it('should reset errors', () => {
      expect(result.daffErrors).toEqual([]);
    });
  });

  describe('when CustomerPaymentUpdateFailureAction is triggered', () => {
    let result: DaffCustomerPaymentReducerState;
    let state: DaffCustomerPaymentReducerState;
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

      const updateFailureAction = new DaffCustomerPaymentUpdateFailure(mockError, 'id');

      result = reducer(state, updateFailureAction);
    });

    it('sets loading to stable', () => {
      expect(result.daffState).toEqual(DaffState.Stable);
    });
  });

  describe('when CustomerPaymentDeleteAction is triggered', () => {
    let result: DaffCustomerPaymentReducerState;

    beforeEach(() => {
      const deleteAction = new DaffCustomerPaymentDelete('id');

      result = reducer(initialState, deleteAction);
    });

    it('sets loading state to mutating', () => {
      expect(result.daffState).toEqual(DaffState.Updating);
    });
  });

  describe('when CustomerPaymentDeleteSuccessAction is triggered', () => {
    let mockError: DaffStateError;
    let result: DaffCustomerPaymentReducerState;
    let state: DaffCustomerPaymentReducerState;

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

      const deleteSuccess = new DaffCustomerPaymentDeleteSuccess([]);

      result = reducer(state, deleteSuccess);
    });

    it('sets loading to stable', () => {
      expect(result.daffState).toEqual(DaffState.Stable);
    });

    it('should reset errors', () => {
      expect(result.daffErrors).toEqual([]);
    });
  });

  describe('when CustomerPaymentDeleteFailureAction is triggered', () => {
    let result: DaffCustomerPaymentReducerState;
    let state: DaffCustomerPaymentReducerState;
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

      const deleteFailureAction = new DaffCustomerPaymentDeleteFailure(mockError, 'id');

      result = reducer(state, deleteFailureAction);
    });

    it('sets loading to stable', () => {
      expect(result.daffState).toEqual(DaffState.Stable);
    });
  });

  describe('when CustomerPaymentAddAction is triggered', () => {
    let result: DaffCustomerPaymentReducerState;

    beforeEach(() => {
      const addAction = new DaffCustomerPaymentAdd(paymentRequestFactory.create(), 'addressId');

      result = reducer(initialState, addAction);
    });

    it('sets loading state to mutating', () => {
      expect(result.daffState).toEqual(DaffState.Updating);
    });
  });

  describe('when CustomerPaymentAddSuccessAction is triggered', () => {
    let mockError: DaffStateError;
    let result: DaffCustomerPaymentReducerState;
    let state: DaffCustomerPaymentReducerState;

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

      const addSuccess = new DaffCustomerPaymentAddSuccess([mockPayment]);

      result = reducer(state, addSuccess);
    });

    it('sets loading to stable', () => {
      expect(result.daffState).toEqual(DaffState.Stable);
    });

    it('should reset errors', () => {
      expect(result.daffErrors).toEqual([]);
    });
  });

  describe('when CustomerPaymentAddFailureAction is triggered', () => {
    let result: DaffCustomerPaymentReducerState;
    let state: DaffCustomerPaymentReducerState;
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

      const addFailureAction = new DaffCustomerPaymentAddFailure(mockError, 'id');

      result = reducer(state, addFailureAction);
    });

    it('stores the errors in state', () => {
      expect(result.daffErrors).toContain(mockError);
      expect(result.daffErrors.length).toEqual(1);
    });

    it('sets loading to error', () => {
      expect(result.daffState).toEqual(DaffState.Error);
    });
  });
});
