import { Observable } from 'rxjs';
import { DaffAccountRegistration } from '../../models/account-registration';
import { DaffAuthToken } from '../../models/auth-token';

export interface DaffRegisterServiceInterface<
TRequest extends DaffAccountRegistration,
TResponse extends DaffAuthToken
> {

  /**
   * Registers an account for the specified customer.
   *
   * @param {T} registration
   * @returns {Observable<string>} An access token.
   */
  register(registration: TRequest): Observable<TResponse>;
}
