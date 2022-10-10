import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

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

export const DaffPaypalExpressPaymentDriver = new InjectionToken<DaffPaypalExpressPaymentServiceInterface>('DaffPaypalExpressPaymentDriver');
