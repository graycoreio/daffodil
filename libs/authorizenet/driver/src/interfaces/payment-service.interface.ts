import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import {
  DaffAuthorizenetPaymentRequest,
  DaffAuthorizenetPaymentResponse,
} from '@daffodil/authorizenet';
import { DaffPaymentDriverInterface } from '@daffodil/payment/driver';

/**
 * An injection token for the authorize.net payment driver.
 */
export const DaffAuthorizeNetPaymentDriver = new InjectionToken<DaffAuthorizeNetPaymentDriverInterface>('DaffAuthorizeNetPaymentDriver');

/**
 * @inheritdoc
 */
export interface DaffAuthorizeNetPaymentDriverInterface<
  T extends DaffAuthorizenetPaymentResponse = DaffAuthorizenetPaymentResponse,
> extends DaffPaymentDriverInterface<T> {
  generateToken(request: DaffAuthorizenetPaymentRequest): Observable<T>;
}
