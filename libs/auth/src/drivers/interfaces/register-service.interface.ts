import { Observable } from 'rxjs';
import { DaffAccountRegistration } from '../../models/account-registration';
import { DaffLoginInfo } from '../../models/login-info';

export interface DaffRegisterServiceInterface<
  TRequest extends DaffAccountRegistration,
  TResponse extends DaffLoginInfo
> {

  /**
   * Registers an account for the specified customer.
   *
   * @param registration The account registration info.
   * @returns Login info.
   */
  register(registration: TRequest): Observable<TResponse>;
}
