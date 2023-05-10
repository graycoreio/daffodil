import { DaffStateError } from '@daffodil/core/state';
import {
  daffPaymentInitialState,
  daffPaymentInitialState as initialState,
  DaffPaymentReducerState,
} from '@daffodil/payment/state';
import { DaffPaymentResponseFactory } from '@daffodil/payment/testing';

import { DaffPaymentStateReducerAdapter } from './adapter';

describe('@daffodil/payment/state | DaffPaymentStateReducerAdapter', () => {
  let adapter: DaffPaymentStateReducerAdapter;

  beforeEach(() => {
    adapter = new DaffPaymentStateReducerAdapter();
  });

  describe('generateToken', () => {
    let result: DaffPaymentReducerState;

    beforeEach(() => {
      result = adapter.generateToken(daffPaymentInitialState);
    });

    it('sets loading state to true', () => {
      expect(result.loading).toEqual(true);
    });
  });

  describe('tokenGenerated', () => {
    let mockError: DaffStateError;
    let result: DaffPaymentReducerState;
    let state: DaffPaymentReducerState;

    beforeEach(() => {
      mockError = {
        code: 'error code',
        message: 'error message',
      };
      state = {
        ...initialState,
        loading: true,
        errors: [mockError],
      };

      result = adapter.tokenGenerated(state);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('should reset errors', () => {
      expect(result.errors).toEqual([]);
    });
  });

  describe('storeError', () => {
    let result;
    let state: DaffPaymentReducerState;
    let mockError: DaffStateError;

    beforeEach(() => {
      mockError = {
        code: 'error code',
        message: 'error message',
      };
      state = {
        ...initialState,
        loading: true,
        errors: [
          { code: 'firstErrorCode', message: 'firstErrorMessage' },
        ],
      };


      result = adapter.storeError([mockError], state);
    });

    it('sets the error in action.payload to state.errors', () => {
      expect(result.errors).toContain(mockError);
      expect(result.errors.length).toEqual(1);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });
  });
});
