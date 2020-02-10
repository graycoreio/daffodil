import { Injectable, Inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import {
  DaffLoginServiceInterface,
  DaffLoginInfo,
  DaffAuthToken
} from '@daffodil/auth';

import { DaffAuthTokenFactory } from '../../../factories/auth-token.factory';

@Injectable({
  providedIn: 'root'
})
export class DaffTestingLoginService implements DaffLoginServiceInterface<DaffLoginInfo, DaffAuthToken> {
  constructor (private factory: DaffAuthTokenFactory) {}

  login(loginInfo: DaffLoginInfo): Observable<DaffAuthToken> {
    return of(this.factory.create());
  }
}
