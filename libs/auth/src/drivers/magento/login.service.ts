import { Injectable, Inject } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';

import { DaffLoginServiceInterface } from '../interfaces/login-service.interface';
import { DaffAuthQueryManager } from '../injection-tokens/auth-query-manager.token';
import { DaffAuthQueryManagerInterface } from '../interfaces/auth-query-manager.interface';
import { GenerateTokenResponse } from './models/outputs/generate-token-response';
import { DaffLoginInfo } from '../../models/login-info';
import { DaffAuthTransformer } from '../injection-tokens/auth-transformer.token';
import { DaffAuthTransformerInterface } from '../interfaces/auth-transformer.interface';
import { DaffAuthToken } from '../../models/auth-token';
import { DaffAccountRegistration } from '../../models/account-registration';
import { DaffCustomerRegistration } from '../../models/customer-registration';

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
export class DaffMagentoLoginService implements DaffLoginServiceInterface<DaffLoginInfo, DaffAuthToken> {
  constructor(
    private apollo: Apollo,
    @Inject(DaffAuthQueryManager) public queryManager: DaffAuthQueryManagerInterface<
      DaffAccountRegistration<DaffCustomerRegistration>,
      DaffCustomerRegistration,
      DaffLoginInfo
    >,
    @Inject(DaffAuthTransformer) public transformer: DaffAuthTransformerInterface<DaffAuthToken>
  ) {}

  login(loginInfo: DaffLoginInfo): Observable<DaffAuthToken> {
    return this.apollo.mutate<GenerateTokenResponse>(
      this.queryManager.generateATokenMutation(loginInfo)
    ).pipe(
      unwrapResult,
      map(data => this.transformer.transform(data))
    )
  }
}
