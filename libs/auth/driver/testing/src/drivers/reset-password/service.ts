import { Injectable } from '@angular/core';
import {
  Observable,
  of,
} from 'rxjs';

import { DaffAuthResetPasswordInfo } from '@daffodil/auth';
import { DaffResetPasswordServiceInterface } from '@daffodil/auth/driver';
import { DaffAuthTokenFactory } from '@daffodil/auth/testing';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffTestingResetPasswordService implements DaffResetPasswordServiceInterface {
  constructor(
    private authTokenFactory: DaffAuthTokenFactory,
  ) {}

  resetPassword(): Observable<string> {
    return of(this.authTokenFactory.create().token);
  }

  resetPasswordOnly(info: DaffAuthResetPasswordInfo): Observable<void> {
    return of(undefined);
  }

  sendResetEmail(): Observable<void> {
    return of(undefined);
  }
}
