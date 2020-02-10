import { Injectable } from '@angular/core';
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
  factory = new DaffAuthTokenFactory();

  register(registration: DaffAccountRegistration<DaffCustomerRegistration>): Observable<DaffAuthToken> {
    return of(this.factory.create());
  }
}
