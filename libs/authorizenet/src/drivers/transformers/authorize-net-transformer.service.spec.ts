import { TestBed } from '@angular/core/testing';

import { DaffAuthorizeNetDefaultTransformerService } from './authorize-net-transformer.service';
import { AuthorizeNetResponse } from '../../models/response/authorize-net-response';
import { DaffAuthorizeNetTokenRequest } from '../../models/request/authorize-net-token-request';
import { DaffAuthorizeNetConfig } from '../interfaces/authorize-net-config.interface';
import { DaffCreditCard } from '../../models/request/credit-card';

describe('AuthorizeNet | Drivers | Transformers | DaffAuthorizeNetDefaultTransformerService', () => {
	let service: DaffAuthorizeNetDefaultTransformerService;
	const stubCreditCard: DaffCreditCard = {
		name: 'name',
		cardnumber: 'cardnumber',
		month: 'month',
		year: 'year',
		securitycode: 'securitycode',
	}
	const stubAuthData: DaffAuthorizeNetConfig = {
		apiLoginID: 'apiLoginID',
		clientKey: 'clientKey'
	};

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffAuthorizeNetDefaultTransformerService
      ]
    })
    service = TestBed.get(DaffAuthorizeNetDefaultTransformerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
	});
	
	describe('transformOut', () => {
		
		it('should transform the credit card and auth data into an AuthorizeNet request object', () => {
			const request: DaffAuthorizeNetTokenRequest = {
				creditCard: stubCreditCard
			};
			const config: DaffAuthorizeNetConfig = {
				clientKey: stubAuthData.clientKey,
				apiLoginID: stubAuthData.apiLoginID
			};
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
			};
			expect(service.transformOut(request, config)).toEqual(expectedRequestObject);
		});
	});

	describe('transformIn', () => {
		
		it('should return a DaffAuthorizeNetTokenResponse', () => {
			const authorizeNetResponse: AuthorizeNetResponse = {
				messages: null,
				opaqueData: {
					dataValue: 'paymentNonce',
					dataDescriptor: null
				}
			}
			expect(service.transformIn(authorizeNetResponse)).toEqual({ token: 'paymentNonce' });
		});
	});
});
