import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';
import { StoreModule, combineReducers, Store } from '@ngrx/store';
import { MockStore } from '@ngrx/store/testing';

import { DaffCartPaymentMethodAdd } from '@daffodil/cart';

import { DaffAuthorizeNetEffects } from './authorize-net.effects';
import { DaffAuthorizeNetGenerateToken } from '../actions/authorizenet.actions';
import { DaffAuthorizeNetTokenRequest } from '../models/request/authorize-net-token-request';
import { DaffAuthorizeNetGenerateTokenFailure } from '../actions/authorizenet.actions';
import { DaffAuthorizeNetDriver } from '../drivers/injection-tokens/authorize-net-driver.token';
import { daffAuthorizeNetReducers } from '../reducers/authorize-net.reducers';
import { DaffAuthorizeNetService } from '../drivers/public_api';
import { MAGENTO_AUTHORIZE_NET_PAYMENT_ID } from '../drivers/magento/authorize-net-payment-id';
import { DaffAuthorizeNetPaymentId } from '../models/authorizenet-payment-id.token';

class MockAuthorizeNetDriver implements DaffAuthorizeNetService {
	generateToken(paymentRequest): Observable<any> {
		return null;
	}
}
describe('DaffAuthorizeNetEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffAuthorizeNetEffects;
	const paymentTokenRequest: DaffAuthorizeNetTokenRequest = {
		creditCard: {
			name: 'name',
			cardnumber: '1234123412341234',
			month: 'month',
			year: 'year',
			securitycode: '123'
		}
	};
	let store: MockStore<any>;
	let authorizeNetPaymentService: MockAuthorizeNetDriver;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
			imports: [
				StoreModule.forRoot({
					authorizenet: combineReducers(daffAuthorizeNetReducers)
				}),
			],
      providers: [
        DaffAuthorizeNetEffects,
				provideMockActions(() => actions$),
				{ provide: DaffAuthorizeNetDriver, useClass: MockAuthorizeNetDriver },
				{ provide: DaffAuthorizeNetPaymentId, useValue: MAGENTO_AUTHORIZE_NET_PAYMENT_ID }
      ]
    });

		effects = TestBed.get(DaffAuthorizeNetEffects);
		authorizeNetPaymentService = TestBed.get(DaffAuthorizeNetDriver);
		store = TestBed.get(Store);
		store.dispatch(new DaffAuthorizeNetGenerateToken(paymentTokenRequest));
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when a DaffAuthorizeNetGenerateToken action is triggered', () => {

    let expected;
		const authorizeNetGenerateToken = new DaffAuthorizeNetGenerateToken(paymentTokenRequest);
    
    describe('when the call to the AuthorizeNetService is successful', () => {

      beforeEach(() => {
				spyOn(authorizeNetPaymentService, 'generateToken').and.returnValue(of('token'));
        actions$ = hot('--a', { a: authorizeNetGenerateToken });
      });
      
      it('should dispatch a DaffCartPaymentMethodAdd action', () => {
        const cartPaymentMethodAddAction = new DaffCartPaymentMethodAdd({
					method: MAGENTO_AUTHORIZE_NET_PAYMENT_ID,
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
				spyOn(authorizeNetPaymentService, 'generateToken').and.returnValue(response);
				
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
