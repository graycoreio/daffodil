import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffAuthToken } from '../../models/auth-token';
import { DaffLoginInfo } from '../../models/login-info';

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
