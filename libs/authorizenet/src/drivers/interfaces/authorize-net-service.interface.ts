import { Observable } from 'rxjs';

import { DaffAuthorizeNetTokenResponse } from '../../models/response/authorize-net-token-response';
import { DaffAuthorizeNetTokenRequest } from '../../models/request/authorize-net-token-request';

export interface DaffAuthorizeNetService<T extends DaffAuthorizeNetTokenRequest, V extends DaffAuthorizeNetTokenResponse> {
	generateToken(paymentTokenRequest: T): Observable<V>;
}
