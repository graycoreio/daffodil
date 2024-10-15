import { Observable } from 'rxjs';

import { createSingletonInjectionToken } from '@daffodil/core';
import {
  DaffPaymentRequest,
  DaffPaymentResponse,
} from '@daffodil/payment';

export const {
  /**
   * An injection token for the payment driver.
   */
  token: DaffPaymentDriver,
  provider: daffProvidePaymentDriver,
} = createSingletonInjectionToken<DaffPaymentDriverInterface>('DaffPaymentDriver');

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
