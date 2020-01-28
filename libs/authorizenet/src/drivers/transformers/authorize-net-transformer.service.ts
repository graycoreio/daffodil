import { Injectable } from '@angular/core';

import { AuthorizeNetRequest } from '../../models/request/authorize-net-request';
import { AuthorizeNetResponse } from '../../models/response/authorize-net-response';
import { DaffAuthorizeNetTokenRequest } from '../../models/request/authorize-net-token-request';
import { DaffAuthorizeNetConfig } from '../interfaces/authorize-net-config.interface';
import { DaffAuthorizeNetTransformerService } from '../interfaces/authorize-net-transformer.interface';
import { DaffAuthorizeNetTokenResponse } from '../../models/response/authorize-net-token-response';

@Injectable({
  providedIn: 'root'
})
export class DaffAuthorizeNetDefaultTransformerService implements DaffAuthorizeNetTransformerService<DaffAuthorizeNetTokenRequest, DaffAuthorizeNetTokenResponse> {
	transformOut(request: DaffAuthorizeNetTokenRequest, config: DaffAuthorizeNetConfig): AuthorizeNetRequest {
		return {
			cardData: {
				cardNumber: request.creditCard.cardnumber,
				cardCode: request.creditCard.securitycode,
				month: request.creditCard.month,
				year: request.creditCard.year
			},
			authData: {
				clientKey: config.clientKey,
				apiLoginID: config.apiLoginID
			}
		};
	};

	transformIn(response: AuthorizeNetResponse): DaffAuthorizeNetTokenResponse {
		return {
			token: response.opaqueData.dataValue
		}
	}
}
