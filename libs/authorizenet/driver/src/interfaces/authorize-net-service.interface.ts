import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffAuthorizeNetTokenRequest } from '@daffodil/authorizenet';

export const DaffAuthorizeNetDriver = new InjectionToken<DaffAuthorizeNetService>('DaffAuthorizeNetDriver');

export interface DaffAuthorizeNetService<T extends DaffAuthorizeNetTokenRequest = DaffAuthorizeNetTokenRequest> {
	generateToken(paymentTokenRequest: T): Observable<any>;
}
