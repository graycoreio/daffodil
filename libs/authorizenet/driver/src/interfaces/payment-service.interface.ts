import { Observable } from 'rxjs';

import {
  DaffAuthorizenetPaymentRequest,
  DaffAuthorizenetPaymentResponse,
} from '@daffodil/authorizenet';
import { createSingleInjectionToken } from '@daffodil/core';
import { DaffPaymentDriverInterface } from '@daffodil/payment/driver';

export const {
  /**
   * An injection token for the authorize.net payment driver.
   */
  token: DaffAuthorizeNetPaymentDriver,
  provider: daffProvideAuthorizeNetPaymentDriver,
} = createSingleInjectionToken<DaffAuthorizeNetPaymentDriverInterface>('DaffAuthorizeNetPaymentDriver');

/**
 * @inheritdoc
 */
export interface DaffAuthorizeNetPaymentDriverInterface<
  T extends DaffAuthorizenetPaymentResponse = DaffAuthorizenetPaymentResponse,
> extends DaffPaymentDriverInterface<T> {
  generateToken(request: DaffAuthorizenetPaymentRequest): Observable<T>;
}
