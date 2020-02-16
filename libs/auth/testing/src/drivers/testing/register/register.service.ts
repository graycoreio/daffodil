import { Injectable, Inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import {
  DaffAccountRegistration,
  DaffAuthToken,
  DaffRegisterServiceInterface,
} from '@daffodil/auth';

import { DaffAuthTokenFactory } from '../../../factories/auth-token.factory';

@Injectable({
  providedIn: 'root'
})
export class DaffTestingRegisterService implements DaffRegisterServiceInterface<
  DaffAccountRegistration,
  DaffAuthToken
> {
  constructor (private factory: DaffAuthTokenFactory) {}

  register(registration: DaffAccountRegistration): Observable<DaffAuthToken> {
    return of(this.factory.create());
  }
}
