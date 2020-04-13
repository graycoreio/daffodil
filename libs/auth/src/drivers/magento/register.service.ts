import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { mapTo, catchError } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';

import { DaffRegisterServiceInterface } from '../interfaces/register-service.interface';
import { DaffLoginInfo } from '../../models/login-info';
import { DaffAccountRegistration } from '../../models/account-registration';
import { DaffMagentoLoginInfoTransformerService } from './transforms/login-info-transformer.service';
import { createCustomerMutation } from './queries/public_api';
import { transformMagentoAuthError } from './errors/transform';

@Injectable({
  providedIn: 'root'
})
export class DaffMagentoRegisterService implements DaffRegisterServiceInterface<DaffAccountRegistration, DaffLoginInfo> {
  constructor(
    private apollo: Apollo,
    private loginInfoTransformer: DaffMagentoLoginInfoTransformerService
  ) {}

  register(registration: DaffAccountRegistration): Observable<DaffLoginInfo> {
    return this.apollo.mutate({
      mutation: createCustomerMutation,
      variables: {
        email: registration.customer.email,
        password: registration.password,
        firstname: registration.customer.firstName,
        lastname: registration.customer.lastName
      }
    }).pipe(
      mapTo(this.loginInfoTransformer.transform(registration)),
      catchError(err => throwError(transformMagentoAuthError(err)))
    )
  }
}
