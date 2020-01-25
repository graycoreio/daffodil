import { DaffPaypalTokenResponseFactory } from '@daffodil/paypal/testing';
import { TestBed } from '@angular/core/testing';

import { DaffMagentoPaypalTransformerService } from './magento-paypal-transformer.service';
import { DaffPaypalTokenRequest } from '../../../models/paypal-token-request';
import { MagentoPaypalTokenRequest } from '../models/request/magento-paypal-token-request';
import { DaffMagentoPaypalConfig } from '../models/config';
import { DaffPaypalTokenResponse } from '../../../models/paypal-token-response';
import { MagentoPaypalExpressToken } from '../models/response/magento-paypal-express-token';

describe('Driver | Magento | Transformers | DaffMagentoPaypalTransformerService', () => {
  const paypalTokenResponseFactory: DaffPaypalTokenResponseFactory = new DaffPaypalTokenResponseFactory();
  let service: DaffMagentoPaypalTransformerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffMagentoPaypalTransformerService
      ]
    })
    service = TestBed.get(DaffMagentoPaypalTransformerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
	});
	
	describe('transformOut', () => {
		
		it('should transform a daffodil paypal token request into a magento request', () => {
			const daffPaypalTokenRequest: DaffPaypalTokenRequest = {
				cartId: 'cartId'
			};
			const daffPaypalConfig: DaffMagentoPaypalConfig = {
				cancel_url: 'cancel_url',
				return_url: 'return_url',
				success_url: 'success_url',
				pending_url: 'pending_url'
			}

			const magentoPaypalTokenRequest: MagentoPaypalTokenRequest = {
				cart_id: daffPaypalTokenRequest.cartId,
				code: 'paypal_express',
				express_button: false,
				use_paypal_credit: false,
				urls: {
					cancel_url: daffPaypalConfig.cancel_url,
					return_url: daffPaypalConfig.return_url,
					success_url: daffPaypalConfig.success_url,
					pending_url: daffPaypalConfig.pending_url
				}
			}

			expect(service.transformOut(daffPaypalTokenRequest, daffPaypalConfig)).toEqual(magentoPaypalTokenRequest);
		});
	});

	describe('transformIn', () => {
		
		it('should transform a magento paypal token response into a daffodil response', () => {
			const daffPaypalTokenResponse: DaffPaypalTokenResponse = paypalTokenResponseFactory.create();
			const magentoPaypalExpressToken: MagentoPaypalExpressToken = {
				token: daffPaypalTokenResponse.token,
				paypal_urls: {
					start: daffPaypalTokenResponse.urls.start,
					edit: daffPaypalTokenResponse.urls.edit
				}
			}

			expect(service.transformIn(magentoPaypalExpressToken)).toEqual(daffPaypalTokenResponse);
		});
	});
});
