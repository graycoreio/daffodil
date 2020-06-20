import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';

import { DaffCartPaymentMethodAdd } from '@daffodil/cart';

import { DaffAuthorizeNetEffects, AUTHORIZE_NET_PAYMENT_ID } from './authorize-net.effects';
import { DaffAuthorizeNetGenerateToken } from '../actions/authorizenet.actions';
import { DaffAuthorizeNetTokenRequest } from '../models/request/authorize-net-token-request';
import { DaffAuthorizeNetGenerateTokenFailure } from '../actions/authorizenet.actions';
import { DaffAuthorizeNetDriver } from '../drivers/injection-tokens/authorize-net-driver.token';

describe('DaffAuthorizeNetEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffAuthorizeNetEffects;
	const paymentTokenRequest: DaffAuthorizeNetTokenRequest = {
		creditCard: null
	};
	const authorizeNetPaymentServiceSpy = jasmine.createSpyObj('DaffAuthorizeNetPaymentService', ['generateToken']);
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffAuthorizeNetEffects,
				provideMockActions(() => actions$),
				{ provide: DaffAuthorizeNetDriver, useValue: authorizeNetPaymentServiceSpy }
      ]
    });

    effects = TestBed.get(DaffAuthorizeNetEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when a DaffAuthorizeNetGenerateToken action is triggered', () => {

    let expected;
		const authorizeNetGenerateToken = new DaffAuthorizeNetGenerateToken(paymentTokenRequest);
    
    describe('when the call to the AuthorizeNetService is successful', () => {

      beforeEach(() => {
        authorizeNetPaymentServiceSpy.generateToken.and.returnValue(of('token'));
        actions$ = hot('--a', { a: authorizeNetGenerateToken });
      });
      
      it('should dispatch a DaffCartPaymentMethodAdd action', () => {
        const cartPaymentMethodAddAction = new DaffCartPaymentMethodAdd({
					method: AUTHORIZE_NET_PAYMENT_ID,
					payment_info: 'token'
				});
        expected = cold('--a', { a: cartPaymentMethodAddAction });
        expect(effects.generateToken$).toBeObservable(expected);
			});
		});

    describe('when the call to the AuthorizeNetService fails', () => {
      
      beforeEach(() => {
        const error = 'Failed to retrieve the token';
        const response = cold('#', {}, error);
        authorizeNetPaymentServiceSpy.generateToken.and.returnValue(response);
        const authorizeNetGenerateTokenFailureAction = new DaffAuthorizeNetGenerateTokenFailure(error);
        actions$ = hot('--a', { a: authorizeNetGenerateToken });
        expected = cold('--b', { b: authorizeNetGenerateTokenFailureAction });
      });
      
      it('should dispatch an AuthorizeNetGenerateTokenFailure action', () => {
        expect(effects.generateToken$).toBeObservable(expected);
      });
		});
	});
});
