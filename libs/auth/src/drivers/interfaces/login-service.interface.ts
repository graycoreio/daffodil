import { Observable } from 'rxjs';
import { DaffLoginRequest } from '../../models/login-request';
import { DaffLoginResponse } from '../../models/login-response';

export interface DaffLoginServiceInterface<TRequest extends DaffLoginRequest, TResponse extends DaffLoginResponse> {
  /**
   * Logs the user in.
   *
   * @param {string} username
   * @param {string} password
   * @returns {Observable<string>} An access token.
   * @memberof DaffLoginServiceInterface
   */
  login(loginInfo: TRequest): Observable<TResponse>;
}
