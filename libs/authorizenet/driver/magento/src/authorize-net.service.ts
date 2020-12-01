import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';

import { AcceptType, DaffAuthorizeNetTokenRequest, AuthorizeNetResponse } from '@daffodil/authorizenet';
import { DaffAuthorizeNetService, DaffAuthorizeNetConfigToken, DaffAuthorizeNetConfig, DAFF_AUTHORIZE_NET_ERROR_CODE_MAP } from '@daffodil/authorizenet/driver';

import { transformMagentoAuthorizeNetRequest, transformMagentoAuthorizeNetResponse } from './transformers/authorize-net-transformer';
import { MagentoAuthorizeNetPayment } from './models/authorize-net-payment';

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
          const MappedError = DAFF_AUTHORIZE_NET_ERROR_CODE_MAP[response.messages.message[0].code];
          const message = response.messages.message[0].code + ': ' + response.messages.message[0].text;

					throw MappedError ? new MappedError(message) : new Error(message);
				} else {
					observer.next(transformMagentoAuthorizeNetResponse(response, paymentTokenRequest.creditCard.cardnumber));
				}
			})
		);
	}
}
