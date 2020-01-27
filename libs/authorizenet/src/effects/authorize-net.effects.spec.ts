import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';

import { DaffPaymentDriver } from '@daffodil/checkout';

import { DaffAuthorizeNetEffects } from './authorize-net.effects';
import { DaffAuthorizeNetGenerateToken } from '../actions/authorizenet.actions';
import { DaffAuthorizeNetTokenRequest } from '../models/request/authorize-net-token-request';
import { DaffAuthorizeNetGenerateTokenSuccess, DaffAuthorizeNetGenerateTokenFailure } from '../actions/authorizenet.actions';

describe('DaffAuthorizeNetEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffAuthorizeNetEffects;
	const paymentTokenRequest: DaffAuthorizeNetTokenRequest = {
		creditCard: null,
		authData: {
			apiLoginID: 'id',
			clientKey: 'key'
		}
	};
	const paymentServiceSpy = jasmine.createSpyObj('DaffAuthorizeNetPaymentService', ['generateToken']);
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffAuthorizeNetEffects,
				provideMockActions(() => actions$),
				{ provide: DaffPaymentDriver, useValue: paymentServiceSpy }
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
        paymentServiceSpy.generateToken.and.returnValue(of('token'));
        actions$ = hot('--a', { a: authorizeNetGenerateToken });
      });
      
      it('should dispatch a DaffAuthorizeNetGenerateTokenSuccess action', () => {
        const authorizeNetGenerateTokenSuccessAction = new DaffAuthorizeNetGenerateTokenSuccess('token');
        expected = cold('--a', { a: authorizeNetGenerateTokenSuccessAction });
        expect(effects.generateToken$).toBeObservable(expected);
			});
		});

    describe('when the call to the AuthorizeNetService fails', () => {
      
      beforeEach(() => {
        const error = 'Failed to retrieve the token';
        const response = cold('#', {}, error);
        paymentServiceSpy.generateToken.and.returnValue(response);
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
