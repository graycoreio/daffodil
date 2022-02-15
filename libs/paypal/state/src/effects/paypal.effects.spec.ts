import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  hot,
  cold,
} from 'jasmine-marbles';
import {
  Observable ,
  of,
} from 'rxjs';

import { DaffStateError } from '@daffodil/core/state';
import {
  DaffPaypalTokenRequest,
  DaffPaypalTokenResponse,
} from '@daffodil/paypal';
import {
  DaffPaypalServiceInterface,
  DaffPaypalDriver,
} from '@daffodil/paypal/driver';
import { DaffPaypalTestingDriverModule } from '@daffodil/paypal/driver/testing';
import {
  DaffGeneratePaypalExpressToken,
  DaffGeneratePaypalExpressTokenSuccess,
  DaffGeneratePaypalExpressTokenFailure,
} from '@daffodil/paypal/state';
import { DaffPaypalTokenResponseFactory } from '@daffodil/paypal/testing';

import { DaffPaypalEffects } from './paypal.effects';

describe('DaffPaypalEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffPaypalEffects<DaffPaypalTokenRequest, DaffPaypalTokenResponse>;
  let stubPaypalTokenResponse: DaffPaypalTokenResponse;
  let daffPaypalDriver: DaffPaypalServiceInterface;

  let paypalTokenResponseFactory: DaffPaypalTokenResponseFactory;
  let paypalTokenRequest: DaffPaypalTokenRequest;

  beforeEach(() => {
    paypalTokenRequest = {
      cartId: 'cartId',
    };

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
    paypalTokenResponseFactory = TestBed.inject(DaffPaypalTokenResponseFactory);

    daffPaypalDriver = TestBed.inject(DaffPaypalDriver);

    stubPaypalTokenResponse = paypalTokenResponseFactory.create();
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when DaffGeneratePaypalExpressToken is triggered', () => {

    let expected;
    const paypalLoadAction = new DaffGeneratePaypalExpressToken(paypalTokenRequest);

    describe('and the call to PaypalService is successful', () => {

      beforeEach(() => {
        spyOn(daffPaypalDriver, 'generateToken').and.returnValue(of(stubPaypalTokenResponse));
        const paypalLoadSuccessAction = new DaffGeneratePaypalExpressTokenSuccess(stubPaypalTokenResponse);
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
