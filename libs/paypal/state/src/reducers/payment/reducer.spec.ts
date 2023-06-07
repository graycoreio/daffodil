import { TestBed } from '@angular/core/testing';

import { DaffStateError } from '@daffodil/core/state';
import {
  DaffPaymentReducerState,
  daffPaymentInitialState,
} from '@daffodil/payment/state';
import {
  DaffPaypalExpressTokenResponse,
  DaffPaypalExpressTokenRequest,
} from '@daffodil/paypal';
import {
  DaffGeneratePaypalExpressToken,
  DaffGeneratePaypalExpressTokenSuccess,
  DaffGeneratePaypalExpressTokenFailure,
} from '@daffodil/paypal/state';
import {
  DaffPaypalExpressTokenRequestFactory,
  DaffPaypalExpressTokenResponseFactory,
} from '@daffodil/paypal/testing';

import { daffPaypalPaymentReducer } from './reducer';

describe('@daffodil/paypal/state | daffPaypalPaymentReducer', () => {
  let paypalTokenResponseFactory: DaffPaypalExpressTokenResponseFactory;
  let paypalTokenRequestFactory: DaffPaypalExpressTokenRequestFactory;
  let paypalTokenResponse: DaffPaypalExpressTokenResponse;
  let paypalRequest: DaffPaypalExpressTokenRequest;

  beforeEach(() => {
    paypalTokenResponseFactory = TestBed.inject(DaffPaypalExpressTokenResponseFactory);
    paypalTokenRequestFactory = TestBed.inject(DaffPaypalExpressTokenRequestFactory);

    paypalTokenResponse = paypalTokenResponseFactory.create();
    paypalRequest = paypalTokenRequestFactory.create();
  });

  describe('when an unknown action is triggered', () => {

    it('should return the current state', () => {
      const action = <any>{};

      const result = daffPaypalPaymentReducer(daffPaymentInitialState, action);

      expect(result).toBe(daffPaymentInitialState);
    });
  });

  describe('when a GeneratePaypalExpressTokenAction is triggered', () => {
    let result: DaffPaymentReducerState;

    beforeEach(() => {
      const generatePaypalExpressTokenAction = new DaffGeneratePaypalExpressToken(paypalRequest);

      result = daffPaypalPaymentReducer(daffPaymentInitialState, generatePaypalExpressTokenAction);
    });

    it('sets loading state to true', () => {
      expect(result.loading).toEqual(true);
    });
  });

  describe('when a GeneratePaypalExpressTokenSuccessAction is triggered', () => {
    let result: DaffPaymentReducerState;
    let state: DaffPaymentReducerState;

    beforeEach(() => {
      state = {
        ...daffPaymentInitialState,
        loading: true,
      };

      const generatePaypalExpressTokenSuccessAction = new DaffGeneratePaypalExpressTokenSuccess(paypalTokenResponse);
      result = daffPaypalPaymentReducer(state, generatePaypalExpressTokenSuccessAction);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('resets errors', () => {
      expect(result.errors).toEqual([]);
    });
  });

  describe('when GeneratePaypalExpressTokenFailureAction is triggered', () => {
    const error: DaffStateError = { code: 'code', recoverable: false, message: 'error message' };
    let result: DaffPaymentReducerState;
    let state: DaffPaymentReducerState;

    beforeEach(() => {
      state = {
        ...daffPaymentInitialState,
        loading: true,
        errors: [{ code: 'firstErrorCode', message: 'firstErrorMessage' }],
      };

      const generatePaypalExpressTokenFailureAction = new DaffGeneratePaypalExpressTokenFailure(error);

      result = daffPaypalPaymentReducer(state, generatePaypalExpressTokenFailureAction);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('sets the error', () => {
      expect(result.errors).toEqual([error]);
    });
  });
});
