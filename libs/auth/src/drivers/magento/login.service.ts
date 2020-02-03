import { Injectable, Inject } from '@angular/core';
import { Observable, combineLatest, pipe } from 'rxjs';
import { map, mapTo, mergeMapTo } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';

import { DaffLoginServiceInterface } from '../interfaces/login-service.interface';
import { DaffAuthQueryManager } from '../injection-tokens/auth-query-manager.token';
import { DaffAuthQueryManagerInterface } from '../interfaces/auth-query-manager.interface';
import { DaffAccountRegistration } from '../../models/account-registration';
import { GenerateTokenResponse } from './models/outputs/generate-token-response';
import { DaffLoginRequest } from '../../models/login-request';
import { DaffLoginResponse } from '../../models/login-response';
import { DaffAuthTransformer } from '../injection-tokens/auth-transformer.token';
import { DaffAuthTransformerInterface } from '../interfaces/auth-transformer.interface';
import { DaffAuth } from '../../models/auth';

/**
 * Util pipe to get the data from an apollo result
 */
const unwrapResult = pipe(
  map(({data}) =>
    data
  )
);

@Injectable({
  providedIn: 'root'
})
export class DaffMagentoLoginService implements DaffLoginServiceInterface<DaffLoginRequest, DaffLoginResponse> {
  constructor(
    private apollo: Apollo,
    @Inject(DaffAuthQueryManager) public queryManager: DaffAuthQueryManagerInterface,
    @Inject(DaffAuthTransformer) public transformer: DaffAuthTransformerInterface<DaffAuth>
  ) {}

  login(loginInfo: DaffLoginRequest): Observable<DaffLoginResponse> {
    return this.apollo.mutate<GenerateTokenResponse>(
      this.queryManager.generateATokenMutation(
        loginInfo.email,
        loginInfo.password
      )
    ).pipe(
      unwrapResult,
      map(data => this.transformer.transform(data))
    )
  }
}
