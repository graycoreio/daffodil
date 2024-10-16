import { Observable } from 'rxjs';

import { createSingletonInjectionToken } from '@daffodil/core';
import { DaffPaymentDriverInterface } from '@daffodil/payment/driver';
import {
  DaffPaypalExpressPaymentRequest,
  DaffPaypalExpressPaymentResponse,
} from '@daffodil/paypal';

export interface DaffPaypalExpressPaymentServiceInterface<
  T extends DaffPaypalExpressPaymentRequest = DaffPaypalExpressPaymentRequest,
  V extends DaffPaypalExpressPaymentResponse = DaffPaypalExpressPaymentResponse
> extends DaffPaymentDriverInterface<V> {
  generateToken(request: T): Observable<V>;
}

export const {
  token: DaffPaypalExpressPaymentDriver,
  /**
   * Provider function for {@link DaffPaypalExpressPaymentDriver}.
   */
  provider: provideDaffPaypalExpressPaymentDriver,
} = createSingletonInjectionToken<DaffPaypalExpressPaymentServiceInterface>('DaffPaypalExpressPaymentDriver');
