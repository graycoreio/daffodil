import { Observable } from 'rxjs';

import {
  DaffLoginInfo,
  DaffAuthToken,
} from '@daffodil/auth';
import { createSingletonInjectionToken } from '@daffodil/core';

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

export const {
  token: DaffLoginDriver,
  /**
   * Provider function for {@link DaffLoginDriver}.
   */
  provider: provideDaffLoginDriver,
} = createSingletonInjectionToken<DaffLoginServiceInterface>('DaffLoginDriver');
