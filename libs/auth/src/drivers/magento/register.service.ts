import { Injectable, Inject } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { map, mapTo, mergeMapTo } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';

import { DaffRegisterServiceInterface } from '../interfaces/register-service.interface';
import { DaffAuthQueryManager } from '../injection-tokens/auth-query-manager.token';
import { DaffAuthQueryManagerInterface } from '../interfaces/auth-query-manager.interface';
import { DaffLoginDriver } from '../injection-tokens/login-driver.token';
import { DaffLoginServiceInterface } from '../interfaces/login-service.interface';
import { DaffLoginRequest } from '../../models/login-request';
import { DaffLoginResponse } from '../../models/login-response';
import { DaffRegisterRequest } from '../../models/register-request';
import { DaffRegisterResponse } from '../../models/register-response';

@Injectable({
  providedIn: 'root'
})
export class DaffMagentoRegisterService implements DaffRegisterServiceInterface<DaffRegisterRequest, DaffRegisterResponse> {
  constructor(
    private apollo: Apollo,
    @Inject(DaffAuthQueryManager) public queryManager: DaffAuthQueryManagerInterface,
    @Inject(DaffLoginDriver) private loginDriver: DaffLoginServiceInterface<DaffLoginRequest, DaffLoginResponse>
  ) {}

  register(registration: DaffRegisterRequest): Observable<DaffRegisterResponse> {
    return this.apollo.mutate(
      this.queryManager.createACustomerMutation(registration)
    ).pipe(
      mergeMapTo(
        this.loginDriver.login({
          email: registration.customer.email,
          password: registration.password
        })
      )
    )
  }
}
