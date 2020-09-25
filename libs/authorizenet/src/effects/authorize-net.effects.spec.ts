import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';
import { StoreModule, combineReducers, Store } from '@ngrx/store';
import { MockStore } from '@ngrx/store/testing';

import { DaffCartAddress, DaffCartPaymentUpdateWithBilling, DaffCartPaymentUpdateWithBillingSuccess, DaffCartPaymentUpdateWithBillingFailure } from '@daffodil/cart';
import { DaffCartAddressFactory, DaffCartFactory } from '@daffodil/cart/testing';

import { DaffAuthorizeNetEffects } from './authorize-net.effects';
import {
	DaffAuthorizeNetUpdatePayment,
	DaffAuthorizeNetUpdatePaymentSuccess,
	DaffLoadAcceptJs,
	DaffLoadAcceptJsSuccess,
	DaffLoadAcceptJsFailure
} from '../actions/authorizenet.actions';
import { DaffAuthorizeNetTokenRequest } from '../models/request/authorize-net-token-request';
import { DaffAuthorizeNetUpdatePaymentFailure } from '../actions/authorizenet.actions';
import { daffAuthorizeNetReducers } from '../reducers/authorize-net.reducers';
import { DaffAuthorizeNetService, DaffAuthorizeNetConfig } from '../drivers/public_api';
import { MAGENTO_AUTHORIZE_NET_PAYMENT_ID } from '../drivers/magento/authorize-net-payment-id';
import { DaffAuthorizeNetDriver } from '../drivers/interfaces/authorize-net-service.interface';
import { DaffAuthorizeNetPaymentId } from '../drivers/interfaces/authorize-net-payment-id.token';
import { DaffAcceptJsLoadingService } from '../services/accept-js-loading.service';

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
	const stubConfig: DaffAuthorizeNetConfig = {
		clientKey: 'clientKey',
		apiLoginID: 'apiLoginID',
		production: false
	}
	let stubAddress: DaffCartAddress;
	const acceptJsLoadingServiceSpy = jasmine.createSpyObj('DaffAcceptJsLoadingService', ['load', 'getAccept']);

  beforeEach(() => {
    TestBed.configureTestingModule({
			imports: [
				StoreModule.forRoot({
					authorizenet: combineReducers(daffAuthorizeNetReducers)
				}),
			],
      providers: [
				provideMockActions(() => actions$),
				{ provide: DaffAcceptJsLoadingService, useValue: acceptJsLoadingServiceSpy },
				{ provide: DaffAuthorizeNetDriver, useClass: MockAuthorizeNetDriver },
				{ provide: DaffAuthorizeNetPaymentId, useValue: MAGENTO_AUTHORIZE_NET_PAYMENT_ID },
        DaffAuthorizeNetEffects,
      ]
    });

		stubAddress = new DaffCartAddressFactory().create();
		effects = TestBed.get(DaffAuthorizeNetEffects);
		authorizeNetPaymentService = TestBed.get(DaffAuthorizeNetDriver);
		store = TestBed.get(Store);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('updatePayment$', () => {

		let expected;

    describe('when the call to the AuthorizeNetService is successful', () => {

			beforeEach(() => {
				const authorizeNetUpdatePayment = new DaffAuthorizeNetUpdatePayment(paymentTokenRequest, stubAddress);
				spyOn(authorizeNetPaymentService, 'generateToken').and.returnValue(of('token'));
        actions$ = hot('--a', { a: authorizeNetUpdatePayment });
      });

      it('should dispatch a DaffCartPaymentUpdateWithBilling action', () => {
        const cartPaymentUpdateWithBillingAction = new DaffCartPaymentUpdateWithBilling({
					method: MAGENTO_AUTHORIZE_NET_PAYMENT_ID,
					payment_info: 'token'
				}, stubAddress);
        expected = cold('--a', { a: cartPaymentUpdateWithBillingAction });
        expect(effects.updatePayment$).toBeObservable(expected);
			});
		});

    describe('when the call to the AuthorizeNetService fails', () => {

      beforeEach(() => {
				const authorizeNetUpdatePayment = new DaffAuthorizeNetUpdatePayment(paymentTokenRequest, stubAddress);
        const error = new Error('Failed to retrieve the token');
				const response = cold('#', {}, error);
				spyOn(authorizeNetPaymentService, 'generateToken').and.returnValue(response);

        const authorizeNetUpdatePaymentFailureAction = new DaffAuthorizeNetUpdatePaymentFailure(error.message);
        actions$ = hot('--a', { a: authorizeNetUpdatePayment });
        expected = cold('--b', { b: authorizeNetUpdatePaymentFailureAction });
      });

      it('should dispatch an AuthorizeNetUpdatePaymentFailure action', () => {
        expect(effects.updatePayment$).toBeObservable(expected);
      });
		});
	});

	describe('updatePaymentSuccessSubstream$', () => {

		it('should dispatch DaffAuthorizeNetUpdatePaymentSuccess when the cart payment method has been successfully updated', () => {
			const stubCart = new DaffCartFactory().create();
			const authorizeNetUpdatePayment = new DaffAuthorizeNetUpdatePayment(paymentTokenRequest, stubAddress);
			const cartPaymentUpdateWithBillingSuccess = new DaffCartPaymentUpdateWithBillingSuccess(stubCart);
			const authorizeNetPaymentUpdateSuccess = new DaffAuthorizeNetUpdatePaymentSuccess();
			actions$ = hot('--a--b', { a: authorizeNetUpdatePayment, b: cartPaymentUpdateWithBillingSuccess });

			const expected = cold('-----c', { c: authorizeNetPaymentUpdateSuccess });
			expect(effects.updatePaymentSuccessSubstream$).toBeObservable(expected);
		});
	});

	describe('updatePaymentFailureSubstream$', () => {

		it('should dispatch DaffAuthorizeNetUpdatePaymentFailure when the cart payment method has failed to update', () => {
			const authorizeNetUpdatePayment = new DaffAuthorizeNetUpdatePayment(paymentTokenRequest, stubAddress);
			const cartPaymentUpdateWithBillingFailure = new DaffCartPaymentUpdateWithBillingFailure('error');
			const authorizeNetPaymentUpdateFailure = new DaffAuthorizeNetUpdatePaymentFailure('The payment method has failed to update the cart.');
			actions$ = hot('--ab', { a: authorizeNetUpdatePayment, b: cartPaymentUpdateWithBillingFailure });

			const expected = cold('---c', { c: authorizeNetPaymentUpdateFailure });
			expect(effects.updatePaymentFailureSubstream$).toBeObservable(expected);
		});
	});

	describe('loadAcceptJs$', () => {

		it('should load the acceptJs library', () => {
			const loadAcceptJsAction = new DaffLoadAcceptJs();
			actions$ = hot('--a', { a: loadAcceptJsAction });
			effects.loadAcceptJs$().subscribe();

			setTimeout(() => {
				expect(acceptJsLoadingServiceSpy.load).toHaveBeenCalled();
			});
			expect(true).toBeTruthy();
		});

		it('should trigger a DaffLoadAcceptJsSuccess action if acceptJs loads', () => {
			acceptJsLoadingServiceSpy.getAccept.and.returnValue(true);
			const loadAcceptJsAction = new DaffLoadAcceptJs();
			actions$ = hot('--a', { a: loadAcceptJsAction });
			const expected = cold('--b', { b: new DaffLoadAcceptJsSuccess() });

			expect(effects.loadAcceptJs$()).toBeObservable(expected);
		});

		it('should trigger a DaffLoadAcceptJsFailure action if acceptJs fails to load', () => {
			acceptJsLoadingServiceSpy.getAccept.and.throwError('error')
			const loadAcceptJsAction = new DaffLoadAcceptJs();
			actions$ = hot('--a', { a: loadAcceptJsAction });
			const expected = cold('--b', { b: new DaffLoadAcceptJsFailure('Accept Js has failed to load.') });

			expect(effects.loadAcceptJs$(0, 0)).toBeObservable(expected);
		});
	});
});
