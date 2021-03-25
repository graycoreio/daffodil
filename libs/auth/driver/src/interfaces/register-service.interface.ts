import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import {
  DaffAccountRegistration,
  DaffLoginInfo,
} from '@daffodil/auth';

export interface DaffRegisterServiceInterface<
  TRequest extends DaffAccountRegistration = DaffAccountRegistration,
  TResponse extends DaffLoginInfo = DaffLoginInfo
> {

  /**
   * Registers an account for the specified customer.
   *
   * @param registration The account registration info.
   * @returns Login info.
   */
  register(registration: TRequest): Observable<TResponse>;
}

export const DaffRegisterDriver = new InjectionToken<DaffRegisterServiceInterface>('DaffRegisterDriver');
