import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { DaffCreditCard, DaffPaymentDriver } from '@daffodil/checkout';
import { DaffCreditCardFactory } from '@daffodil/checkout/testing';

import { DaffAuthorizeNetEffects } from './authorize-net.effects';
import { DaffAuthorizeNetGenerateToken } from '../actions/authorizenet.actions';
import { DaffAuthorizeNetTokenRequest } from '../models/request/authorize-net-token-request';

describe('DaffAuthorizeNetEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffAuthorizeNetEffects;
  const creditCardFactory: DaffCreditCardFactory = new DaffCreditCardFactory();
	let stubCreditCard: DaffCreditCard;
	let paymentTokenRequest: DaffAuthorizeNetTokenRequest;
	const paymentServiceSpy = jasmine.createSpyObj('DaffAuthorizeNetPaymentService', ['generateToken']);
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffAuthorizeNetEffects,
				provideMockActions(() => actions$),
				{ provide: DaffPaymentDriver, useValue: paymentServiceSpy }
      ]
    });

    stubCreditCard = creditCardFactory.create();
    effects = TestBed.get(DaffAuthorizeNetEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when a DaffAuthorizeNetGenerateToken action is triggered', () => {

		it('should make a generateToken request', () => {
			paymentTokenRequest = {
				creditCard: stubCreditCard,
				authData: {
					clientKey: 'clientKey',
					apiLoginID: 'apiLoginID'
				}
			};
			const authorizeNetGenerateToken = new DaffAuthorizeNetGenerateToken(paymentTokenRequest);
			actions$ = of(authorizeNetGenerateToken);
			effects.generateToken$.subscribe();

			expect(paymentServiceSpy.generateToken).toHaveBeenCalledWith(paymentTokenRequest);
    });
  });
});
