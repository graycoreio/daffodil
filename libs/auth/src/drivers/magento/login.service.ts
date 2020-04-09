import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError, mapTo } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';

import { DaffLoginServiceInterface } from '../interfaces/login-service.interface';
import { DaffLoginInfo } from '../../models/login-info';
import { DaffAuthToken } from '../../models/auth-token';
import {
  MagentoRevokeCustomerTokenResponse,
  MagentoGenerateTokenResponse,
  generateTokenMutation,
  revokeCustomerTokenMutation
} from './queries/public_api';
import { DaffMagentoAuthTransformerService } from './transforms/auth-transformer.service';
import { transformError } from './errors/transform';
import { validateRevokeTokenResponse, validateGenerateTokenResponse } from './validators/public_api';

@Injectable({
  providedIn: 'root'
})
export class DaffMagentoLoginService implements DaffLoginServiceInterface<DaffLoginInfo, DaffAuthToken> {
  constructor(
    private apollo: Apollo,
    public authTransformer: DaffMagentoAuthTransformerService,
  ) {}

  login({email, password}: DaffLoginInfo): Observable<DaffAuthToken> {
    return this.apollo.mutate<MagentoGenerateTokenResponse>({
      mutation: generateTokenMutation,
      variables: {
        email,
        password
      }
    }).pipe(
      map(validateGenerateTokenResponse),
      map(res => this.authTransformer.transform(res.data.generateCustomerToken)),
      catchError(err => throwError(transformError(err)))
    )
  }

  logout() {
    return this.apollo.mutate<MagentoRevokeCustomerTokenResponse>({mutation: revokeCustomerTokenMutation}).pipe(
      map(validateRevokeTokenResponse),
      mapTo(undefined),
      catchError(err => throwError(transformError(err)))
    )
  }
}
