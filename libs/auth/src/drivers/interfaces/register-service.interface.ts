import { Observable } from 'rxjs';
import { DaffRegisterRequest } from '../../models/register-request';
import { DaffRegisterResponse } from '../../models/register-response';

export interface DaffRegisterServiceInterface<TRequest extends DaffRegisterRequest, TResponse extends DaffRegisterResponse> {

  /**
   * Registers an account for the specified customer.
   *
   * @param {T} registration
   * @returns {Observable<string>} An access token.
   * @memberof DaffRegisterServiceInterface
   */
  register(registration: TRequest): Observable<TResponse>;
}
