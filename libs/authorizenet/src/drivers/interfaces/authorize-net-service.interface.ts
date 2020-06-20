import { Observable } from 'rxjs';

import { DaffAuthorizeNetTokenRequest } from '../../models/request/authorize-net-token-request';

export interface DaffAuthorizeNetService<T extends DaffAuthorizeNetTokenRequest = DaffAuthorizeNetTokenRequest> {
	generateToken(paymentTokenRequest: T): Observable<any>;
}
