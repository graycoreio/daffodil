import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

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

export const DaffPaypalExpressDriver = new InjectionToken<DaffPaypalExpressServiceInterface>('DaffPaypalExpressDriver');
