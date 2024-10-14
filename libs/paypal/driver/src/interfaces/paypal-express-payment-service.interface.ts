import { Observable } from 'rxjs';

import { createSingleInjectionToken } from '@daffodil/core';
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
  provider: daffProvidePaypalExpressPaymentDriver,
} = createSingleInjectionToken<DaffPaypalExpressPaymentServiceInterface>('DaffPaypalExpressPaymentDriver');
