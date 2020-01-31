import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffAuthorizeNetTokenRequest } from '../models/request/authorize-net-token-request';
import { AcceptType } from '../models/acceptJs/accept';
import { DaffAuthorizeNetTransformer } from './injection-tokens/authorize-net-transformer.token';
import { DaffAuthorizeNetService } from './interfaces/authorize-net-service.interface';
import { DaffAuthorizeNetTokenResponse } from '../models/response/authorize-net-token-response';
import { DaffAuthorizeNetConfigToken } from './injection-tokens/authorize-net-config.token';
import { DaffAuthorizeNetConfig } from './interfaces/authorize-net-config.interface';
import { AuthorizeNetResponse } from '../models/response/authorize-net-response';
import { DaffAuthorizeNetTransformerService } from './interfaces/authorize-net-transformer.interface';

declare var Accept: AcceptType;

@Injectable({
  providedIn: 'root'
})
export class DaffAuthorizeNetDefaultService<T extends DaffAuthorizeNetTokenRequest, V extends DaffAuthorizeNetTokenResponse> 
	implements DaffAuthorizeNetService<T, V> {

	constructor(
		@Inject(DaffAuthorizeNetTransformer) public authorizeNetTransformer: DaffAuthorizeNetTransformerService<T, V>,
		@Inject(DaffAuthorizeNetConfigToken) public config: DaffAuthorizeNetConfig
	) {}

	generateToken(paymentTokenRequest: T): Observable<V> {
		return new Observable(observer =>
			Accept.dispatchData(this.authorizeNetTransformer.transformOut(paymentTokenRequest, this.config), (response: AuthorizeNetResponse) => {
				if (response.messages.resultCode === 'Error') {
					throw new Error(response.messages[0].code + ':' + response.messages.message[0].text);
				} else {
					observer.next(this.authorizeNetTransformer.transformIn(response));
				}
			})
		);
	}
}
