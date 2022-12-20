import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import {
  Observable,
  throwError,
} from 'rxjs';
import {
  catchError,
  map,
} from 'rxjs/operators';

import { DaffAuthServiceInterface } from '@daffodil/auth/driver';

import { transformMagentoAuthError } from './errors/transform';
import {
  checkTokenQuery,
  MagentoCheckTokenResponse,
} from './queries/public_api';
import { validateCheckTokenResponse } from './validators/public_api';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffMagentoAuthService implements DaffAuthServiceInterface {
  constructor(private apollo: Apollo) {}

  check(): Observable<void> {
    return this.apollo.query<MagentoCheckTokenResponse>({
      query: checkTokenQuery,
      fetchPolicy: 'cache-first',
    }).pipe(
      map(validateCheckTokenResponse),
      map(() => undefined),
      catchError(err => throwError(() => transformMagentoAuthError(err))),
    );
  }
}
