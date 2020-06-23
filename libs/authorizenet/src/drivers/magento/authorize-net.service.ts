import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';

import { transformMagentoAuthorizeNetRequest, transformMagentoAuthorizeNetResponse } from './transformers/authorize-net-transformer';
import { MagentoAuthorizeNetPayment } from './models/authorize-net-payment';
import { AcceptType } from '../../models/acceptJs/accept';
import { DaffAuthorizeNetService } from '../interfaces/authorize-net-service.interface';
import { DaffAuthorizeNetConfig } from '../interfaces/authorize-net-config.interface';
import { DaffAuthorizeNetTokenRequest } from '../../models/request/authorize-net-token-request';
import { AuthorizeNetResponse } from '../../models/response/authorize-net-response';
import { DaffAuthorizeNetConfigToken } from '../injection-tokens/authorize-net-config.token';

declare var Accept: AcceptType;

@Injectable({
  providedIn: 'root'
})
export class DaffMagentoAuthorizeNetService implements DaffAuthorizeNetService {

	constructor(
		@Inject(DaffAuthorizeNetConfigToken) public config: DaffAuthorizeNetConfig
	) {}

	generateToken(paymentTokenRequest: DaffAuthorizeNetTokenRequest): Observable<MagentoAuthorizeNetPayment> {
		return new Observable(observer =>
			Accept.dispatchData(transformMagentoAuthorizeNetRequest(paymentTokenRequest, this.config), (response: AuthorizeNetResponse) => {
				if (response.messages.resultCode === 'Error') {
					throw new Error(response.messages[0].code + ':' + response.messages.message[0].text);
				} else {
					observer.next(transformMagentoAuthorizeNetResponse(response, paymentTokenRequest.creditCard.cardnumber));
				}
			})
		);
	}
}
