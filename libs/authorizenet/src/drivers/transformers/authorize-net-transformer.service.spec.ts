import { TestBed } from '@angular/core/testing';

import { DaffCreditCard } from '@daffodil/checkout';
import { DaffCreditCardFactory } from '@daffodil/checkout/testing';

import { DaffAuthorizeNetTransformerService } from './authorize-net-transformer.service';
import { AuthorizeNetAuthData } from '../../models/request/authorize-net-auth-data';
import { AuthorizeNetResponse } from '../../models/response/authorize-net-response';
import { DaffAuthorizeNetTokenRequest } from '../../models/request/authorize-net-token-request';

describe('AuthorizeNet | Drivers | Transformers | DaffAuthorizeNetTransformerService', () => {
	let service: DaffAuthorizeNetTransformerService;
	const creditCardFactory: DaffCreditCardFactory = new DaffCreditCardFactory();
	const stubCreditCard: DaffCreditCard = creditCardFactory.create();
	const stubAuthData: AuthorizeNetAuthData = {
		apiLoginID: 'apiLoginID',
		clientKey: 'clientKey'
	};

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffAuthorizeNetTransformerService
      ]
    })
    service = TestBed.get(DaffAuthorizeNetTransformerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
	});
	
	describe('transformOut', () => {
		
		it('should transform the credit card and auth data into an AuthorizeNet request object', () => {
			const request: DaffAuthorizeNetTokenRequest = {
				creditCard: stubCreditCard,
				authData: stubAuthData
			}
			const expectedRequestObject = {
				cardData: {
					cardNumber: stubCreditCard.cardnumber,
					cardCode: stubCreditCard.securitycode,
					month: stubCreditCard.month,
					year: stubCreditCard.year
				},
				authData: {
					clientKey: stubAuthData.clientKey,
					apiLoginID: stubAuthData.apiLoginID
				}
			}
			expect(service.transformOut(request)).toEqual(expectedRequestObject);
		});
	});

	describe('transformIn', () => {
		
		it('should return the payment nonce off of an AuthorizeNet response', () => {
			const authorizeNetResponse: AuthorizeNetResponse = {
				messages: null,
				opaqueData: {
					dataValue: 'paymentNonce',
					dataDescriptor: null
				}
			}
			expect(service.transformIn(authorizeNetResponse)).toEqual('paymentNonce');
		});
	});
});
