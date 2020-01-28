import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffAuthorizeNetTokenRequest } from '../models/request/authorize-net-token-request';
import { AcceptType } from '../models/acceptJs/accept';
import { DaffAuthorizeNetTransformer } from './injection-tokens/authorize-net-transformer.tokens';
import { DaffAuthorizeNetService } from './interfaces/authorize-net-service.interface';
import { DaffAuthorizeNetTokenResponse } from '../models/response/authorize-net-token-response';
import { DaffAuthorizeNetConfigToken } from './injection-tokens/authorize-net-config.token';
import { DaffAuthorizeNetConfig } from './interfaces/authorize-net-config.interface';
import { DaffAuthorizeNetDefaultTransformerService } from './transformers/authorize-net-transformer.service';

declare var Accept: AcceptType;

@Injectable({
  providedIn: 'root'
})
export class DaffAuthorizeNetDefaultService implements DaffAuthorizeNetService<DaffAuthorizeNetTokenRequest, DaffAuthorizeNetTokenResponse> {

	constructor(
		@Inject(DaffAuthorizeNetTransformer) public authorizeNetTransformer: DaffAuthorizeNetDefaultTransformerService,
		@Inject(DaffAuthorizeNetConfigToken) public config: DaffAuthorizeNetConfig
	) {}

	generateToken(paymentTokenRequest: DaffAuthorizeNetTokenRequest): Observable<DaffAuthorizeNetTokenResponse> {
		return new Observable(observer =>
			Accept.dispatchData(this.authorizeNetTransformer.transformOut(paymentTokenRequest, this.config), (response) => {
				if (response.messages.resultCode === 'Error') {
					throw new Error(response.messages[0].code + ':' + response.messages.message[0].text);
				} else {
					observer.next(this.authorizeNetTransformer.transformIn(response));
				}
			})
		);
	}
}
