import { Injectable, Inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import {
  DaffAccountRegistration,
  DaffAuthToken,
  DaffRegisterServiceInterface,
  DaffCustomerRegistration,
} from '@daffodil/auth';

import { DaffAuthTokenFactory } from '../../../factories/auth-token.factory';

@Injectable({
  providedIn: 'root'
})
export class DaffTestingRegisterService implements DaffRegisterServiceInterface<
  DaffAccountRegistration<DaffCustomerRegistration>,
  DaffCustomerRegistration,
  DaffAuthToken
> {
  constructor (private factory: DaffAuthTokenFactory) {}

  register(registration: DaffAccountRegistration<DaffCustomerRegistration>): Observable<DaffAuthToken> {
    return of(this.factory.create());
  }
}
