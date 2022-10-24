import { Injectable } from '@angular/core';
import {
  Observable,
  of,
} from 'rxjs';

import {
  DaffAccountRegistration,
  DaffLoginInfo,
} from '@daffodil/auth';
import { DaffRegisterServiceInterface } from '@daffodil/auth/driver';
import { DaffAuthTokenFactory } from '@daffodil/auth/testing';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffTestingRegisterService implements DaffRegisterServiceInterface {
  constructor(
    private authTokenFactory: DaffAuthTokenFactory,
  ) {}

  register(registration: DaffAccountRegistration): Observable<string> {
    return of(this.authTokenFactory.create().token);
  }

  registerOnly(registration: DaffLoginInfo): Observable<void> {
    return of(undefined);
  }
}
