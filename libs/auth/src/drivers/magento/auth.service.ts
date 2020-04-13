import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError, mapTo } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';

import { DaffAuthServiceInterface } from '../interfaces/auth-service.interface';
import {
  checkTokenQuery,
  MagentoCheckTokenResponse
} from './queries/public_api';
import { validateCheckTokenResponse } from './validators/public_api';
import { transformMagentoAuthError } from './errors/transform';

@Injectable({
  providedIn: 'root'
})
export class DaffMagentoAuthService implements DaffAuthServiceInterface {
  constructor(private apollo: Apollo) {}

  check(): Observable<void> {
    return this.apollo.query<MagentoCheckTokenResponse>({query: checkTokenQuery}).pipe(
      map(validateCheckTokenResponse),
      mapTo(undefined),
      catchError(err => throwError(transformMagentoAuthError(err)))
    )
  }
}
