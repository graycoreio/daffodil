import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { switchMap, mapTo } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';

import { DaffAuthServiceInterface } from '../interfaces/auth-service.interface';
import {
  checkTokenQuery,
  MagentoCheckTokenResponse
} from './queries/public_api';

@Injectable({
  providedIn: 'root'
})
export class DaffMagentoAuthService implements DaffAuthServiceInterface {
  constructor(private apollo: Apollo) {}

  check(): Observable<void> {
    return this.apollo.query<MagentoCheckTokenResponse>({query: checkTokenQuery}).pipe(
      mapTo(undefined)
    )
  }
}
