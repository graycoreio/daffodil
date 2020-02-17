import { Observable } from 'rxjs';
import { DaffAuthToken } from '../../models/auth-token';

export interface DaffAuthServiceInterface<
  TRequest extends DaffAuthToken,
> {
  /**
   * Checks the validity of an auth token.
   *
   * @returns Whether the auth token is valid.
   */
  check(auth: TRequest): Observable<boolean>;
}
