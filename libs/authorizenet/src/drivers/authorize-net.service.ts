import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';

import { 
	DaffPaymentServiceInterface,
	DaffPaymentTransformer
} from '@daffodil/checkout';

import { DaffAuthorizeNetTokenRequest } from '../models/request/authorize-net-token-request';
import { DaffAuthorizeNetTransformerService } from './transformers/authorize-net-transformer.service';
import { AcceptType } from '../models/acceptJs/accept';

declare var Accept: AcceptType;

@Injectable({
  providedIn: 'root'
})
export class DaffAuthorizeNetPaymentService implements DaffPaymentServiceInterface<DaffAuthorizeNetTokenRequest> {

	constructor(
		@Inject(DaffPaymentTransformer) public paymentTransformer: DaffAuthorizeNetTransformerService
	) {}

	generateToken(paymentTokenRequest: DaffAuthorizeNetTokenRequest): Observable<string> {
		return new Observable(observer =>
			Accept.dispatchData(this.paymentTransformer.transformOut(paymentTokenRequest), (response) => {
				if (response.messages.resultCode === 'Error') {
					throw new Error(response.messages[0].code + ':' + response.messages.message[0].text);
				} else {
					observer.next(this.paymentTransformer.transformIn(response));
				}
			})
		);
	}
}
