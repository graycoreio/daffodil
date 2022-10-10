import { TestBed } from '@angular/core/testing';

import {
  DaffPaypalExpressTokenResponse,
  DaffPaypalExpressTokenRequest,
} from '@daffodil/paypal';
import {
  DaffPaypalExpressReducerState,
  DaffGeneratePaypalExpressToken,
  DaffGeneratePaypalExpressTokenSuccess,
  daffPaypalExpressInitialState,
} from '@daffodil/paypal/state';
import {
  DaffPaypalExpressTokenRequestFactory,
  DaffPaypalExpressTokenResponseFactory,
} from '@daffodil/paypal/testing';

import { daffPaypalExpressReducer } from './reducer';

describe('@daffodil/paypal/state | daffPaypalExpressReducer', () => {

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

      const result = daffPaypalExpressReducer(daffPaypalExpressInitialState, action);

      expect(result).toBe(daffPaypalExpressInitialState);
    });
  });

  describe('when a GeneratePaypalExpressTokenAction is triggered', () => {
    let result: DaffPaypalExpressReducerState;
    let state: DaffPaypalExpressReducerState;

    beforeEach(() => {
      const generatePaypalExpressTokenAction = new DaffGeneratePaypalExpressToken(paypalRequest);
      state = {
        ...daffPaypalExpressInitialState,
        startUrl: 'startUrl',
        editUrl: 'editUrl',
      };

      result = daffPaypalExpressReducer(state, generatePaypalExpressTokenAction);
    });

    it('resets to initial state', () => {
      expect(result).toEqual(daffPaypalExpressInitialState);
    });
  });

  describe('when a GeneratePaypalExpressTokenSuccessAction is triggered', () => {
    let result: DaffPaypalExpressReducerState;

    beforeEach(() => {
      const generatePaypalExpressTokenSuccessAction = new DaffGeneratePaypalExpressTokenSuccess(paypalTokenResponse);

      result = daffPaypalExpressReducer(daffPaypalExpressInitialState, generatePaypalExpressTokenSuccessAction);
    });

    it('sets startUrl from the response', () => {
      expect(result.startUrl).toEqual(paypalTokenResponse.urls.start);
    });

    it('sets editUrl from the response', () => {
      expect(result.editUrl).toEqual(paypalTokenResponse.urls.edit);
    });
  });
});
