import { Observable } from 'rxjs';

import {
  DaffAuthorizenetPaymentRequest,
  DaffAuthorizenetPaymentResponse,
} from '@daffodil/authorizenet';
import { createSingletonInjectionToken } from '@daffodil/core';
import { DaffPaymentDriverInterface } from '@daffodil/payment/driver';

export const {
  /**
   * An injection token for the authorize.net payment driver.
   */
  token: DaffAuthorizeNetPaymentDriver,
  provider: provideDaffAuthorizeNetPaymentDriver,
} = createSingletonInjectionToken<DaffAuthorizeNetPaymentDriverInterface>('DaffAuthorizeNetPaymentDriver');

/**
 * @inheritdoc
 */
export interface DaffAuthorizeNetPaymentDriverInterface<
  T extends DaffAuthorizenetPaymentResponse = DaffAuthorizenetPaymentResponse,
> extends DaffPaymentDriverInterface<T> {
  generateToken(request: DaffAuthorizenetPaymentRequest): Observable<T>;
}
