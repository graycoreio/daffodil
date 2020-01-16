import { Injectable } from '@angular/core';

import { DaffPaymentTransformerService } from '@daffodil/checkout';

import { AuthorizeNetRequest } from '../../models/request/authorize-net-request';
import { AuthorizeNetResponse } from '../../models/response/authorize-net-response';
import { DaffAuthorizeNetTokenRequest } from '../../models/request/authorize-net-token-request';

@Injectable({
  providedIn: 'root'
})
export class DaffAuthorizeNetTransformerService implements DaffPaymentTransformerService<DaffAuthorizeNetTokenRequest> {
	transformOut(request: DaffAuthorizeNetTokenRequest): AuthorizeNetRequest {
		return {
			cardData: {
				cardNumber: request.creditCard.cardnumber,
				cardCode: request.creditCard.securitycode,
				month: request.creditCard.month,
				year: request.creditCard.year
			},
			authData: {
				clientKey: request.authData.clientKey,
				apiLoginID: request.authData.apiLoginID
			}
		};
	};

	transformIn(response: AuthorizeNetResponse): string {
		return response.opaqueData.dataValue;
	}
}
