import { DAFF_AUTHORIZENET_PAYMENT_KIND } from '@daffodil/authorizenet';
import {
  DaffAuthorizeNetUpdatePaymentSuccess,
  DaffAuthorizeNetUpdatePaymentFailure,
  DaffAuthorizeNetUpdatePayment,
  DaffLoadAcceptJsSuccess,
  DaffLoadAcceptJsFailure,
  DaffAuthorizeNetReducerState,
  DaffAuthorizenetApplyPayment,
} from '@daffodil/authorizenet/state';
import { DaffCartAddress } from '@daffodil/cart';
import { DaffCartAddressFactory } from '@daffodil/cart/testing';
import { DaffStateError } from '@daffodil/core/state';
import {
  DaffPaymentGenerateTokenFailure,
  DaffPaymentGenerateTokenSuccess,
} from '@daffodil/payment/state';

import { daffAuthorizeNetReducer } from './authorize-net.reducer';
import { daffAuthorizeNetReducerInitialState } from './initial-state';

describe('@daffodil/authorizenet/state | daffAuthorizeNetReducer', () => {
  let stubPaymentNonce;
  let stubAddress: DaffCartAddress;

  beforeEach(() => {
    stubAddress = new DaffCartAddressFactory().create();
    stubPaymentNonce = 'tokenResponse';
  });

  describe('when an unknown action is triggered', () => {

    it('should return the current state', () => {
      const action = <any>{};

      const result = daffAuthorizeNetReducer(daffAuthorizeNetReducerInitialState, action);

      expect(result).toBe(daffAuthorizeNetReducerInitialState);
    });
  });

  describe('when DaffAuthorizenetApplyPayment is triggered', () => {
    let result: DaffAuthorizeNetReducerState;

    beforeEach(() => {
      const tokenLoad = new DaffAuthorizenetApplyPayment({
        kind: DAFF_AUTHORIZENET_PAYMENT_KIND,
      }, stubAddress);

      result = daffAuthorizeNetReducer(daffAuthorizeNetReducerInitialState, tokenLoad);
    });

    it('indicates that the request is loading', () => {
      expect(result.loading).toBeTruthy();
    });
  });

  describe('when DaffAuthorizeNetUpdatePayment is triggered', () => {
    let result: DaffAuthorizeNetReducerState;

    beforeEach(() => {
      const tokenLoad: DaffAuthorizeNetUpdatePayment = new DaffAuthorizeNetUpdatePayment({
        creditCard: {
          cardnumber: '1234123412341234',
          month: 'month',
          year: 'year',
          securitycode: '123',
        },
      }, stubAddress);

      result = daffAuthorizeNetReducer(daffAuthorizeNetReducerInitialState, tokenLoad);
    });

    it('indicates that the request is loading', () => {
      expect(result.loading).toBeTruthy();
    });
  });

  describe('when DaffAuthorizeNetUpdatePaymentSuccess is triggered', () => {
    let result: DaffAuthorizeNetReducerState;

    beforeEach(() => {
      const tokenLoadSuccess: DaffAuthorizeNetUpdatePaymentSuccess = new DaffAuthorizeNetUpdatePaymentSuccess();

      result = daffAuthorizeNetReducer(daffAuthorizeNetReducerInitialState, tokenLoadSuccess);
    });

    it('indicates that the request has finished loading', () => {
      expect(result.loading).toBeFalsy();
    });

    it('clears the payment error message', () => {
      expect(result.paymentError).toBeNull();
    });
  });

  describe('when DaffPaymentGenerateTokenSuccess is triggered', () => {
    let result: DaffAuthorizeNetReducerState;

    beforeEach(() => {
      const tokenLoadSuccess = new DaffPaymentGenerateTokenSuccess({
        method: 'method',
      });

      result = daffAuthorizeNetReducer(daffAuthorizeNetReducerInitialState, tokenLoadSuccess);
    });

    it('indicates that the request has finished loading', () => {
      expect(result.loading).toBeFalsy();
    });

    it('clears the payment error message', () => {
      expect(result.paymentError).toBeNull();
    });
  });

  describe('when DaffAuthorizeNetUpdatePaymentFailure is triggered', () => {
    let result: DaffAuthorizeNetReducerState;
    let mockError: DaffStateError;

    beforeEach(() => {
      mockError = {
        code: 'error code',
        message: 'error message',
      };
      const tokenResponseLoadFailure: DaffAuthorizeNetUpdatePaymentFailure = new DaffAuthorizeNetUpdatePaymentFailure(mockError);

      result = daffAuthorizeNetReducer(daffAuthorizeNetReducerInitialState, tokenResponseLoadFailure);
    });

    it('indicates that the request has finished loading', () => {
      expect(result.loading).toBeFalsy();
    });

    it('sets payment error state to the action payload', () => {
      expect(result.paymentError).toEqual(mockError);
    });
  });

  describe('when DaffPaymentGenerateTokenFailure is triggered', () => {
    let result: DaffAuthorizeNetReducerState;
    let mockError: DaffStateError;

    beforeEach(() => {
      mockError = {
        code: 'error code',
        message: 'error message',
      };
      const tokenResponseLoadFailure = new DaffPaymentGenerateTokenFailure(mockError);

      result = daffAuthorizeNetReducer(daffAuthorizeNetReducerInitialState, tokenResponseLoadFailure);
    });

    it('indicates that the request has finished loading', () => {
      expect(result.loading).toBeFalsy();
    });

    it('sets payment error state to the action payload', () => {
      expect(result.paymentError).toEqual(mockError);
    });
  });

  describe('when DaffLoadAcceptJsSuccess is triggered', () => {

    let result;

    beforeEach(() => {
      const acceptJsLoaded: DaffLoadAcceptJsSuccess = new DaffLoadAcceptJsSuccess();
      result = daffAuthorizeNetReducer(daffAuthorizeNetReducerInitialState, acceptJsLoaded);
    });

    it('should indicate that accept js has loaded', () => {
      expect(result.isAcceptLoaded).toEqual(true);
    });

    it('clears the acceptJsLoad error state', () => {
      expect(result.acceptJsLoadError).toEqual(null);
    });
  });

  describe('when DaffLoadAcceptJsFailure is triggered', () => {
    let result: DaffAuthorizeNetReducerState;
    let mockError: DaffStateError;

    beforeEach(() => {
      mockError = {
        code: 'error code',
        message: 'error message',
      };
      const loadAcceptJsFailure: DaffLoadAcceptJsFailure = new DaffLoadAcceptJsFailure(mockError);

      result = daffAuthorizeNetReducer(daffAuthorizeNetReducerInitialState, loadAcceptJsFailure);
    });

    it('indicates that nothing is loading', () => {
      expect(result.loading).toBeFalsy();
    });

    it('sets acceptJsLoad error state to the action payload', () => {
      expect(result.acceptJsLoadError).toEqual(mockError);
    });
  });
});
