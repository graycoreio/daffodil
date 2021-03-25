import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import {
  DaffLoginInfo,
  DaffAuthToken,
} from '@daffodil/auth';

export interface DaffLoginServiceInterface<
  TRequest extends DaffLoginInfo = DaffLoginInfo,
  TResponse extends DaffAuthToken = DaffAuthToken
> {
  /**
   * Logs the user in.
   *
   * @returns An access token.
   */
  login(loginInfo: TRequest): Observable<TResponse>;

  /**
   * Logs the user out by revoking their access token.
   */
  logout(): Observable<void>;
}

export const DaffLoginDriver = new InjectionToken<DaffLoginServiceInterface>('DaffLoginDriver');
