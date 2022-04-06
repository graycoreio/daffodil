import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import {
  DaffPaypalTokenRequest,
  DaffPaypalTokenResponse,
} from '@daffodil/paypal';

export interface DaffPaypalServiceInterface<
  T extends DaffPaypalTokenRequest = DaffPaypalTokenRequest,
  V extends DaffPaypalTokenResponse = DaffPaypalTokenResponse
> {
  generateToken(generateTokenRequest: T): Observable<V>;
}

export const DaffPaypalDriver = new InjectionToken<DaffPaypalServiceInterface>('DaffPaypalDriver');
