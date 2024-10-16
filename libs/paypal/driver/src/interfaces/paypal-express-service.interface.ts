import { Observable } from 'rxjs';

import { createSingletonInjectionToken } from '@daffodil/core';
import {
  DaffPaypalExpressTokenRequest,
  DaffPaypalExpressTokenResponse,
} from '@daffodil/paypal';

export interface DaffPaypalExpressServiceInterface<
  T extends DaffPaypalExpressTokenRequest = DaffPaypalExpressTokenRequest,
  V extends DaffPaypalExpressTokenResponse = DaffPaypalExpressTokenResponse
> {
  generateToken(cartId: string, generateTokenRequest: T): Observable<V>;
}

export const {
  token: DaffPaypalExpressDriver,
  /**
   * Provider function for {@link DaffPaypalExpressDriver}.
   */
  provider: provideDaffPaypalExpressDriver,
} = createSingletonInjectionToken<DaffPaypalExpressServiceInterface>('DaffPaypalExpressDriver');
