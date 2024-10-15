import { Observable } from 'rxjs';

import { DaffAuthResetPasswordInfo } from '@daffodil/auth';
import { createSingletonInjectionToken } from '@daffodil/core';

export interface DaffResetPasswordServiceInterface<
  T extends DaffAuthResetPasswordInfo = DaffAuthResetPasswordInfo,
> {

  /**
   * Resets password for the specified customer and logs in.
   */
  resetPassword(info: T): Observable<string>;

  /**
   * Resets password for the specified customer.
   */
  resetPasswordOnly(info: T): Observable<void>;

  /**
   * Send a password reset email to the specified email address.
   */
  sendResetEmail(email: string): Observable<void>;
}

export const {
  token: DaffResetPasswordDriver,
  provider: daffProvideResetPasswordDriver,
} = createSingletonInjectionToken<DaffResetPasswordServiceInterface>('DaffResetPasswordDriver');
