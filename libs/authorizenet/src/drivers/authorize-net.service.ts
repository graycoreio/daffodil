import { Injectable, Inject } from '@angular/core';
import { Store } from '@ngrx/store';

	import { 
		DaffPaymentServiceInterface,
		DaffPaymentTransformer,
		DaffPaymentTransformerService
	} from '@daffodil/checkout';

import { DaffAuthorizeNetGenerateTokenSuccess, DaffAuthorizeNetGenerateTokenFailure } from '../actions/authorizenet.actions';
import { AuthorizeNetResponse } from '../models/response/authorize-net-response';
import { DaffAuthorizeNetTokenRequest } from '../models/request/authorize-net-token-request';

declare var Accept: any;

@Injectable({
  providedIn: 'root'
})
export class DaffAuthorizeNetPaymentService implements DaffPaymentServiceInterface<DaffAuthorizeNetTokenRequest> {

	constructor(
		@Inject(DaffPaymentTransformer) public paymentTransformer: DaffPaymentTransformerService<DaffAuthorizeNetTokenRequest>,
		private store: Store<any>
	) {}

	generateToken(paymentTokenRequest: DaffAuthorizeNetTokenRequest): string {
		Accept.dispatchData(this.paymentTransformer.transformOut(paymentTokenRequest), this.responseHandler.bind(this));

		return 'this string needs to be returned because authorize.net does not have a normal api';
	}

	private responseHandler(response: AuthorizeNetResponse) {
		if (response.messages.resultCode === 'Error') {
			this.store.dispatch(
				new DaffAuthorizeNetGenerateTokenFailure(response.messages.message[0].code + ':' + response.messages.message[0].text)
			);
		} else {
			this.store.dispatch(
				new DaffAuthorizeNetGenerateTokenSuccess(this.paymentTransformer.transformIn(response))
			);
		}
	}
}
