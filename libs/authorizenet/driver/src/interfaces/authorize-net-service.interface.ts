import { Observable } from 'rxjs';

import { DaffAuthorizeNetTokenRequest } from '@daffodil/authorizenet';
import { createSingletonInjectionToken } from '@daffodil/core';

export const {
  token: DaffAuthorizeNetDriver,
  /**
   * Provider function for {@link DaffAuthorizeNetDriver}.
   */
  provider: provideDaffAuthorizeNetDriver,
} = createSingletonInjectionToken<DaffAuthorizeNetService>('DaffAuthorizeNetDriver');

export interface DaffAuthorizeNetService<T extends DaffAuthorizeNetTokenRequest = DaffAuthorizeNetTokenRequest> {
  generateToken(paymentTokenRequest: T): Observable<any>;
}
