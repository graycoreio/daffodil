import { Observable } from 'rxjs';

import { DaffAccountRegistration } from '@daffodil/auth';
import { createSingleInjectionToken } from '@daffodil/core';

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

export const {
  token: DaffRegisterDriver,
  provider: daffProvideRegisterDriver,
} = createSingleInjectionToken<DaffRegisterServiceInterface>('DaffRegisterDriver');
