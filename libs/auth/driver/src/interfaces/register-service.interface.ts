import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffAccountRegistration } from '@daffodil/auth';

export interface DaffRegisterServiceInterface<
  TRequest extends DaffAccountRegistration = DaffAccountRegistration,
> {

  /**
   * Registers an account for the specified customer and logs the customer in.
   *
   * @param registration The account registration info.
   * @return The authentication token.
   */
  register(registration: TRequest): Observable<string>;

  /**
   * Registers an account for the specified customer but does not log the customer in.
   *
   * @param registration The account registration info.
   */
  registerOnly(registration: TRequest): Observable<void>;
}

export const DaffRegisterDriver = new InjectionToken<DaffRegisterServiceInterface>('DaffRegisterDriver');
