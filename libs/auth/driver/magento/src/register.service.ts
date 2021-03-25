import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import {
  Observable,
  throwError,
} from 'rxjs';
import {
  mapTo,
  catchError,
} from 'rxjs/operators';

import {
  DaffAccountRegistration,
  DaffLoginInfo,
} from '@daffodil/auth';
import { DaffRegisterServiceInterface } from '@daffodil/auth/driver';

import { transformMagentoAuthError } from './errors/transform';
import { createCustomerMutation } from './queries/public_api';
import { DaffMagentoLoginInfoTransformerService } from './transforms/login-info-transformer.service';

@Injectable({
  providedIn: 'root',
})
export class DaffMagentoRegisterService implements DaffRegisterServiceInterface<DaffAccountRegistration, DaffLoginInfo> {
  constructor(
    private apollo: Apollo,
    private loginInfoTransformer: DaffMagentoLoginInfoTransformerService,
  ) {}

  register(registration: DaffAccountRegistration): Observable<DaffLoginInfo> {
    return this.apollo.mutate({
      mutation: createCustomerMutation,
      variables: {
        email: registration.customer.email,
        password: registration.password,
        firstname: registration.customer.firstName,
        lastname: registration.customer.lastName,
      },
    }).pipe(
      mapTo(this.loginInfoTransformer.transform(registration)),
      catchError(err => throwError(transformMagentoAuthError(err))),
    );
  }
}
