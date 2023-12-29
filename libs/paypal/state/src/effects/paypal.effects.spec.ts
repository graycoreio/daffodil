import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  hot,
  cold,
} from 'jasmine-marbles';
import {
  Observable,
  of,
} from 'rxjs';

import { DaffStateError } from '@daffodil/core/state';
import {
  DaffPaypalExpressTokenRequest,
  DaffPaypalExpressTokenResponse,
} from '@daffodil/paypal';
import {
  DaffPaypalExpressServiceInterface,
  DaffPaypalExpressDriver,
} from '@daffodil/paypal/driver';
import { DaffPaypalTestingDriverModule } from '@daffodil/paypal/driver/testing';
import {
  DaffGeneratePaypalExpressToken,
  DaffGeneratePaypalExpressTokenSuccess,
  DaffGeneratePaypalExpressTokenFailure,
} from '@daffodil/paypal/state';
import {
  DaffPaypalExpressTokenRequestFactory,
  DaffPaypalExpressTokenResponseFactory,
} from '@daffodil/paypal/testing';

import { DaffPaypalEffects } from './paypal.effects';

describe('DaffPaypalEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffPaypalEffects<DaffPaypalExpressTokenRequest, DaffPaypalExpressTokenResponse>;
  let daffPaypalDriver: DaffPaypalExpressServiceInterface;

  let paypalTokenResponseFactory: DaffPaypalExpressTokenResponseFactory;
  let paypalTokenRequestFactory: DaffPaypalExpressTokenRequestFactory;
  let paypalTokenResponse: DaffPaypalExpressTokenResponse;
  let paypalRequest: DaffPaypalExpressTokenRequest;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffPaypalTestingDriverModule.forRoot(),
      ],
      providers: [
        DaffPaypalEffects,
        provideMockActions(() => actions$),
      ],
    });

    effects = TestBed.inject(DaffPaypalEffects);
    paypalTokenResponseFactory = TestBed.inject(DaffPaypalExpressTokenResponseFactory);
    paypalTokenRequestFactory = TestBed.inject(DaffPaypalExpressTokenRequestFactory);
    daffPaypalDriver = TestBed.inject(DaffPaypalExpressDriver);

    paypalTokenResponse = paypalTokenResponseFactory.create();
    paypalRequest = paypalTokenRequestFactory.create();
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when DaffGeneratePaypalExpressToken is triggered', () => {

    let expected;
    const paypalLoadAction = new DaffGeneratePaypalExpressToken(paypalRequest);

    describe('and the call to PaypalService is successful', () => {

      beforeEach(() => {
        spyOn(daffPaypalDriver, 'generateToken').and.returnValue(of(paypalTokenResponse));
        const paypalLoadSuccessAction = new DaffGeneratePaypalExpressTokenSuccess(paypalTokenResponse);
        actions$ = hot('--a', { a: paypalLoadAction });
        expected = cold('--b', { b: paypalLoadSuccessAction });
      });

      it('should dispatch a PaypalLoadSuccess action', () => {
        expect(effects.generatePaypalExpressToken$).toBeObservable(expected);
      });
    });

    describe('and the call to PaypalService fails', () => {

      beforeEach(() => {
        const error: DaffStateError = { code: 'code', recoverable: false, message: 'Failed to retrieve token' };
        const response = cold('#', {}, error);
        spyOn(daffPaypalDriver, 'generateToken').and.returnValue(response);
        const paypalLoadFailureAction = new DaffGeneratePaypalExpressTokenFailure(error);
        actions$ = hot('--a', { a: paypalLoadAction });
        expected = cold('--b', { b: paypalLoadFailureAction });
      });

      it('should dispatch a PaypalLoadFailure action', () => {
        expect(effects.generatePaypalExpressToken$).toBeObservable(expected);
      });
    });
  });
});
