import { Observable } from 'rxjs';
import { InjectionToken } from '@angular/core';

import { DaffAuthorizeNetTokenRequest } from '@daffodil/authorizenet';

export const DaffAuthorizeNetDriver = new InjectionToken('DaffAuthorizeNetDriver');

export interface DaffAuthorizeNetService<T extends DaffAuthorizeNetTokenRequest = DaffAuthorizeNetTokenRequest> {
	generateToken(paymentTokenRequest: T): Observable<any>;
}
