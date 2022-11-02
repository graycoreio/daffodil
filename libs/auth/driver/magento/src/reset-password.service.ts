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

import { DaffAuthResetPasswordInfo } from '@daffodil/auth';
import { DaffResetPasswordServiceInterface } from '@daffodil/auth/driver';
import { DaffQueuedApollo } from '@daffodil/core/graphql';

import { transformMagentoAuthError } from './errors/transform';
import { DaffMagentoLoginService } from './login.service';
import {
  MagentoResetPasswordResponse,
  MagentoSendResetEmailResponse,
} from './models/public_api';
import {
  resetPasswordMutation,
  sendPasswordResetEmailMutation,
} from './queries/public_api';
import {
  validateResetPasswordResponse,
  validateSendResetEmailResponse,
} from './validators/public_api';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffMagentoResetPasswordService implements DaffResetPasswordServiceInterface {
  constructor(
    private apollo: DaffQueuedApollo,
    private loginService: DaffMagentoLoginService,
  ) {}

  resetPassword(info: DaffAuthResetPasswordInfo): Observable<string> {
    return this.resetPasswordOnly(info).pipe(
      switchMap(() => this.loginService.login({ email: info.email, password: info.password })),
      map(({ token }) => token),
    );
  }

  resetPasswordOnly({ email, password, token }: DaffAuthResetPasswordInfo): Observable<void> {
    return this.apollo.mutate<MagentoResetPasswordResponse>({
      mutation: resetPasswordMutation,
      variables: {
        email,
        password,
        token,
      },
    }).pipe(
      map(validateResetPasswordResponse),
      map(() => undefined),
      catchError(err => throwError(() => transformMagentoAuthError(err))),
    );
  }

  sendResetEmail(email: string): Observable<void> {
    return this.apollo.mutate<MagentoSendResetEmailResponse>({
      mutation: sendPasswordResetEmailMutation,
      variables: {
        email,
      },
    }).pipe(
      map(validateSendResetEmailResponse),
      map(() => undefined),
      catchError(err => throwError(() => transformMagentoAuthError(err))),
    );
  }
}
