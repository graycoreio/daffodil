import { Observable } from 'rxjs';

import { DaffAuthorizeNetTokenRequest } from '@daffodil/authorizenet';
import { createSingletonInjectionToken } from '@daffodil/core';

export const {
  token: DaffAuthorizeNetDriver,
  provider: daffProvideAuthorizeNetDriver,
} = createSingletonInjectionToken<DaffAuthorizeNetService>('DaffAuthorizeNetDriver');

export interface DaffAuthorizeNetService<T extends DaffAuthorizeNetTokenRequest = DaffAuthorizeNetTokenRequest> {
  generateToken(paymentTokenRequest: T): Observable<any>;
}
