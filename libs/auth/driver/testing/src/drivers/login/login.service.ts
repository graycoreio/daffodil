import { Injectable } from '@angular/core';
import {
  Observable,
  of,
} from 'rxjs';

import {
  DaffLoginInfo,
  DaffAuthToken,
} from '@daffodil/auth';
import { DaffLoginServiceInterface } from '@daffodil/auth/driver';
import { DaffAuthTokenFactory } from '@daffodil/auth/testing';

@Injectable({
  providedIn: 'root',
})
export class DaffTestingLoginService implements DaffLoginServiceInterface<DaffLoginInfo, DaffAuthToken> {
  constructor(private factory: DaffAuthTokenFactory) {}

  login(loginInfo: DaffLoginInfo): Observable<DaffAuthToken> {
    return of(this.factory.create());
  }

  logout(): Observable<void> {
    return of(undefined);
  }
}
