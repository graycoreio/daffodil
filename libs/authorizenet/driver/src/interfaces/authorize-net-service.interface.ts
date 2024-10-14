import { Observable } from 'rxjs';

import { DaffAuthorizeNetTokenRequest } from '@daffodil/authorizenet';
import { createSingleInjectionToken } from '@daffodil/core';

export const {
  token: DaffAuthorizeNetDriver,
  provider: daffProvideAuthorizeNetDriver,
} = createSingleInjectionToken<DaffAuthorizeNetService>('DaffAuthorizeNetDriver');

export interface DaffAuthorizeNetService<T extends DaffAuthorizeNetTokenRequest = DaffAuthorizeNetTokenRequest> {
  generateToken(paymentTokenRequest: T): Observable<any>;
}
