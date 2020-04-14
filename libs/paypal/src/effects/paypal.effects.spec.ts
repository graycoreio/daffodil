import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable ,  of } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';

import { DaffPaypalTokenResponseFactory, DaffTestingPaypalService } from '@daffodil/paypal/testing';

import { DaffPaypalEffects } from './paypal.effects';
import { 
	DaffGeneratePaypalExpressToken, 
	DaffGeneratePaypalExpressTokenSuccess, 
	DaffGeneratePaypalExpressTokenFailure 
} from '../actions/paypal.actions';
import { DaffPaypalServiceInterface } from '../drivers/interfaces/paypal-service.interface';
import { DaffPaypalTokenRequest } from '../models/paypal-token-request';
import { DaffPaypalTokenResponse } from '../models/paypal-token-response';
import { DaffPaypalDriver } from '../drivers/injection-tokens/paypal-driver.token';

describe('DaffPaypalEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffPaypalEffects<DaffPaypalTokenRequest, DaffPaypalTokenResponse>;
  let stubPaypalTokenResponse: DaffPaypalTokenResponse;
  let daffPaypalDriver: DaffPaypalServiceInterface;

  let paypalTokenResponseFactory: DaffPaypalTokenResponseFactory;
  let paypalTokenRequest: DaffPaypalTokenRequest;

  beforeEach(() => {
    paypalTokenRequest = {
			cartId: 'cartId'
		};

    TestBed.configureTestingModule({
      providers: [
        DaffPaypalEffects,
        provideMockActions(() => actions$),
        {
          provide: DaffPaypalDriver, 
          useValue: new DaffTestingPaypalService(new DaffPaypalTokenResponseFactory())
        },
      ]
    });

    effects = TestBed.get(DaffPaypalEffects);
    paypalTokenResponseFactory = TestBed.get(DaffPaypalTokenResponseFactory);

    daffPaypalDriver = TestBed.get(DaffPaypalDriver);

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
        const error = 'Failed to retrieve token';
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
