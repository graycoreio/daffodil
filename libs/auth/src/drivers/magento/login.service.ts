import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import {
  Observable,
  throwError,
} from 'rxjs';
import {
  map,
  catchError,
  mapTo,
} from 'rxjs/operators';

import { DaffAuthToken } from '../../models/auth-token';
import { DaffLoginInfo } from '../../models/login-info';
import { DaffLoginServiceInterface } from '../interfaces/login-service.interface';
import { transformMagentoAuthError } from './errors/transform';
import {
  MagentoRevokeCustomerTokenResponse,
  MagentoGenerateTokenResponse,
  generateTokenMutation,
  revokeCustomerTokenMutation,
} from './queries/public_api';
import { DaffMagentoAuthTransformerService } from './transforms/auth-transformer.service';
import {
  validateRevokeTokenResponse,
  validateGenerateTokenResponse,
} from './validators/public_api';

@Injectable({
  providedIn: 'root',
})
export class DaffMagentoLoginService implements DaffLoginServiceInterface<DaffLoginInfo, DaffAuthToken> {
  constructor(
    private apollo: Apollo,
    public authTransformer: DaffMagentoAuthTransformerService,
  ) {}

  login({ email, password }: DaffLoginInfo): Observable<DaffAuthToken> {
    return this.apollo.mutate<MagentoGenerateTokenResponse>({
      mutation: generateTokenMutation,
      variables: {
        email,
        password,
      },
    }).pipe(
      map(validateGenerateTokenResponse),
      map(res => this.authTransformer.transform(res.data.generateCustomerToken)),
      catchError(err => throwError(transformMagentoAuthError(err))),
    );
  }

  logout() {
    return this.apollo.mutate<MagentoRevokeCustomerTokenResponse>({ mutation: revokeCustomerTokenMutation }).pipe(
      map(validateRevokeTokenResponse),
      mapTo(undefined),
      catchError(err => throwError(transformMagentoAuthError(err))),
    );
  }
}
