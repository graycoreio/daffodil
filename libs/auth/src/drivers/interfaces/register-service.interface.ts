import { Observable } from 'rxjs';
import { DaffCustomerRegistration } from '../../models/customer-registration';
import { DaffAccountRegistration } from '../../models/account-registration';
import { DaffAuthToken } from '../../models/auth-token';

export interface DaffRegisterServiceInterface<
TRequest extends DaffAccountRegistration<TRequestT>,
TRequestT extends DaffCustomerRegistration,
TResponse extends DaffAuthToken
> {

  /**
   * Registers an account for the specified customer.
   *
   * @param {T} registration
   * @returns {Observable<string>} An access token.
   * @memberof DaffRegisterServiceInterface
   */
  register(registration: TRequest): Observable<TResponse>;
}
