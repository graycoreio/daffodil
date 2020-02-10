import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';

import { DaffRegisterServiceInterface } from '../interfaces/register-service.interface';
import { DaffAuthQueryManager } from '../injection-tokens/auth-query-manager.token';
import { DaffAuthQueryManagerInterface } from '../interfaces/auth-query-manager.interface';
import { DaffLoginDriver } from '../injection-tokens/login-driver.token';
import { DaffLoginServiceInterface } from '../interfaces/login-service.interface';
import { DaffLoginInfo } from '../../models/login-info';
import { DaffAuthToken } from '../../models/auth-token';
import { DaffCustomerRegistration } from '../../models/customer-registration';
import { DaffAccountRegistration } from '../../models/account-registration';

@Injectable({
  providedIn: 'root'
})
export class DaffMagentoRegisterService implements DaffRegisterServiceInterface<
  DaffAccountRegistration<DaffCustomerRegistration>,
  DaffCustomerRegistration,
  DaffAuthToken
> {
  constructor(
    private apollo: Apollo,
    @Inject(DaffAuthQueryManager) public queryManager: DaffAuthQueryManagerInterface<
      DaffAccountRegistration<DaffCustomerRegistration>,
      DaffCustomerRegistration,
      DaffLoginInfo
    >,
    @Inject(DaffLoginDriver) private loginDriver: DaffLoginServiceInterface<DaffLoginInfo, DaffAuthToken>
  ) {}

  register(registration: DaffAccountRegistration<DaffCustomerRegistration>): Observable<DaffAuthToken> {
    return this.apollo.mutate(
      this.queryManager.createACustomerMutation(registration)
    ).pipe(
      mergeMap(() =>
        this.loginDriver.login({
          email: registration.customer.email,
          password: registration.password
        })
      )
    )
  }
}
