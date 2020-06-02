import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, mapTo } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';

import { DaffAuthServiceInterface } from '../interfaces/auth-service.interface';
import {
  checkTokenQuery,
  MagentoCheckTokenResponse
} from './queries/public_api';
import {
  validateCheckTokenResponse,
  validateResetPasswordResponse
} from './validators/public_api';
import { transformMagentoAuthError } from './errors/transform';
import { RestApiUrlConfig } from '../../config/rest-api-url.token';

export enum DaffAuthResetPasswordEmailTemplate {
  REMINDER = 'email_reminder',
  RESET = 'email_reset'
};

@Injectable({
  providedIn: 'root'
})
export class DaffMagentoAuthService implements DaffAuthServiceInterface {
  constructor(
    private apollo: Apollo,
    private httpClient: HttpClient,
    @Inject(RestApiUrlConfig) private restApiUrl: string
  ) {}

  check(): Observable<void> {
    return this.apollo.query<MagentoCheckTokenResponse>({query: checkTokenQuery}).pipe(
      map(validateCheckTokenResponse),
      mapTo(undefined),
      catchError(err => throwError(transformMagentoAuthError(err)))
    )
  }

  resetPassword(email: string) {
    return this.httpClient.put(`${this.restApiUrl}/V1/customers/password`, {
      email,
      template: DaffAuthResetPasswordEmailTemplate.RESET
    }).pipe(
      map(validateResetPasswordResponse),
      mapTo(undefined),
      catchError(err => throwError(transformMagentoAuthError(err)))
    )
  }
}
