import { Observable } from 'rxjs';

import { DaffPaypalTokenRequest } from '../../models/paypal-token-request';
import { DaffPaypalTokenResponse } from '../../models/paypal-token-response';

export interface DaffPaypalServiceInterface<T extends DaffPaypalTokenRequest, V extends DaffPaypalTokenResponse> {
	generateToken(generateTokenRequest: T): Observable<V>;
}
