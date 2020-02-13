import { Observable } from 'rxjs';
import { DaffLoginInfo } from '../../models/login-info';
import { DaffAuthToken } from '../../models/auth-token';

export interface DaffLoginServiceInterface<
  TRequest extends DaffLoginInfo,
  TResponse extends DaffAuthToken
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
  logout(): Observable<boolean>;
}
