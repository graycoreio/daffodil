import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import {
  Observable,
  throwError,
} from 'rxjs';
import {
  map,
  catchError,
  switchMap,
} from 'rxjs/operators';

import { DaffAccountRegistration } from '@daffodil/auth';
import {
  DaffRegisterServiceInterface,
  DaffRegistrationFailedError,
} from '@daffodil/auth/driver';
import { DaffQueuedApollo } from '@daffodil/core/graphql';

import { transformMagentoAuthError } from './errors/transform';
import { DaffMagentoLoginService } from './login.service';
import { MagentoRegisterResponse } from './models/public_api';
import { createCustomerMutation } from './queries/public_api';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffMagentoRegisterService implements DaffRegisterServiceInterface {
  constructor(
    private apollo: DaffQueuedApollo,
    private loginService: DaffMagentoLoginService,
  ) {}

  register(registration: DaffAccountRegistration): Observable<string> {
    return this.registerOnly(registration).pipe(
      switchMap(() => this.loginService.login({ email: registration.email, password: registration.password })),
      map(({ token }) => token),
    );
  }

  registerOnly({ email, password, subscribe, firstName, lastName }: DaffAccountRegistration): Observable<void> {
    return this.apollo.mutate<MagentoRegisterResponse>({
      mutation: createCustomerMutation,
      variables: {
        email,
        password,
        firstname: firstName || 'temp',
        lastname: lastName || 'temp',
        subscribe,
      },
    }).pipe(
      map((resp) => {
        if (!resp.data.createCustomerV2.customer.email) {
          throw new DaffRegistrationFailedError(`The account for email ${email} was not successful.`);
        }

        return;
      }),
      catchError(err => throwError(() => transformMagentoAuthError(err))),
    );
  }
}
