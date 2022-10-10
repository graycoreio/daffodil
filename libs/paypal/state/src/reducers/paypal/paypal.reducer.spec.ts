import { TestBed } from '@angular/core/testing';

import { DaffStateError } from '@daffodil/core/state';
import {
  DaffPaypalExpressTokenResponse,
  DaffPaypalExpressTokenRequest,
} from '@daffodil/paypal';
import {
  DaffPaypalReducerState,
  DaffGeneratePaypalExpressToken,
  DaffGeneratePaypalExpressTokenSuccess,
  DaffGeneratePaypalExpressTokenFailure,
} from '@daffodil/paypal/state';
import {
  DaffPaypalExpressTokenRequestFactory,
  DaffPaypalExpressTokenResponseFactory,
} from '@daffodil/paypal/testing';

import { daffPaypalReducer } from './paypal.reducer';

describe('@daffodil/paypal/state | daffPaypalReducer', () => {
  let paypalTokenResponseFactory: DaffPaypalExpressTokenResponseFactory;
  let paypalTokenRequestFactory: DaffPaypalExpressTokenRequestFactory;
  let paypalTokenResponse: DaffPaypalExpressTokenResponse;
  let paypalRequest: DaffPaypalExpressTokenRequest;
  const initialState: DaffPaypalReducerState = {
    loading: false,
    error: null,
  };

  beforeEach(() => {
    paypalTokenResponseFactory = TestBed.inject(DaffPaypalExpressTokenResponseFactory);
    paypalTokenRequestFactory = TestBed.inject(DaffPaypalExpressTokenRequestFactory);

    paypalTokenResponse = paypalTokenResponseFactory.create();
    paypalRequest = paypalTokenRequestFactory.create();
  });

  describe('when an unknown action is triggered', () => {

    it('should return the current state', () => {
      const action = <any>{};

      const result = daffPaypalReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when a GeneratePaypalExpressTokenAction is triggered', () => {
    let result: DaffPaypalReducerState;

    beforeEach(() => {
      const generatePaypalExpressTokenAction = new DaffGeneratePaypalExpressToken(paypalRequest);

      result = daffPaypalReducer(initialState, generatePaypalExpressTokenAction);
    });

    it('sets loading state to true', () => {
      expect(result.loading).toEqual(true);
    });
  });

  describe('when a GeneratePaypalExpressTokenSuccessAction is triggered', () => {
    let result: DaffPaypalReducerState;
    let state: DaffPaypalReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
      };

      const generatePaypalExpressTokenSuccessAction = new DaffGeneratePaypalExpressTokenSuccess(paypalTokenResponse);
      result = daffPaypalReducer(state, generatePaypalExpressTokenSuccessAction);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('sets error to null', () => {
      expect(result.error).toBeNull();
    });
  });

  describe('when GeneratePaypalExpressTokenFailureAction is triggered', () => {
    const error: DaffStateError = { code: 'code', recoverable: false, message: 'error message' };
    let result: DaffPaypalReducerState;
    let state: DaffPaypalReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
        error: { code: 'firstErrorCode', message: 'firstErrorMessage' },
      };

      const generatePaypalExpressTokenFailureAction = new DaffGeneratePaypalExpressTokenFailure(error);

      result = daffPaypalReducer(state, generatePaypalExpressTokenFailureAction);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('sets the error', () => {
      expect(result.error).toEqual(error);
    });
  });
});
