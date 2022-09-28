import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import {
  DaffPaymentRequest,
  DaffPaymentResponse,
} from '@daffodil/payment';

/**
 * An injection token for the payment driver.
 */
export const DaffPaymentDriver = new InjectionToken<DaffPaymentDriverInterface>('DaffPaymentDriver');

/**
 * The payment driver is responsible for taking user payment input and generating a token for use with the platform.
 */
export interface DaffPaymentDriverInterface<
  T extends DaffPaymentResponse = DaffPaymentResponse,
> {
  /**
   * Generate a payment token.
   */
  generateToken(request: DaffPaymentRequest): Observable<T>;
}
