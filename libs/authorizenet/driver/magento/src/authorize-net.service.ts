import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffAuthorizeNetTokenRequest, AuthorizeNetResponse, DaffAcceptJsLoadingService } from '@daffodil/authorizenet';
import { DaffAuthorizeNetService, DaffAuthorizeNetConfigToken, DaffAuthorizeNetConfig, DAFF_AUTHORIZE_NET_ERROR_CODE_MAP } from '@daffodil/authorizenet/driver';

import { transformMagentoAuthorizeNetRequest, transformMagentoAuthorizeNetResponse } from './transformers/authorize-net-transformer';
import { MagentoAuthorizeNetPayment } from './models/authorize-net-payment';

@Injectable({
  providedIn: 'root'
})
export class DaffMagentoAuthorizeNetService implements DaffAuthorizeNetService {

	constructor(
    @Inject(DaffAuthorizeNetConfigToken) public config: DaffAuthorizeNetConfig,
    private acceptJsLoader: DaffAcceptJsLoadingService
	) {}

	generateToken(paymentTokenRequest: DaffAuthorizeNetTokenRequest): Observable<MagentoAuthorizeNetPayment> {
		return new Observable(observer =>
			this.acceptJsLoader.getAccept().dispatchData(transformMagentoAuthorizeNetRequest(paymentTokenRequest, this.config), (response: AuthorizeNetResponse) => {
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
