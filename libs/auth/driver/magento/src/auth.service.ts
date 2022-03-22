import { Injectable } from '@angular/core';
import { Apollo } from '@damienwebdev/apollo-angular';
import {
  Observable,
  throwError,
} from 'rxjs';
import {
  map,
  catchError,
  mapTo,
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
    return this.apollo.query<MagentoCheckTokenResponse>({ query: checkTokenQuery }).pipe(
      map(validateCheckTokenResponse),
      mapTo(undefined),
      catchError(err => throwError(transformMagentoAuthError(err))),
    );
  }
}
