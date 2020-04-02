import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
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
      map(res => this.authTransformer.transform(res.data.generateCustomerToken))
    )
  }

  logout() {
    return this.apollo.mutate<MagentoRevokeCustomerTokenResponse>({mutation: revokeCustomerTokenMutation}).pipe(
      switchMap(resp => {
        if (resp.data.revokeCustomerToken.result) {
          return of(undefined);
        } else {
          return throwError(new Error('Token revocation failed'));
        }
      })
    )
  }
}
