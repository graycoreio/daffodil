import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InMemoryBackendConfig } from 'angular-in-memory-web-api';
import {
  Observable,
  of,
  throwError,
} from 'rxjs';
import { switchMap } from 'rxjs/operators';

import {
  DaffLoginInfo,
  DaffAuthToken,
} from '@daffodil/auth';
import { DaffLoginServiceInterface } from '@daffodil/auth/driver';
import { DaffInMemoryDriverBase } from '@daffodil/driver/in-memory';

import { DAFF_AUTH_IN_MEMORY_COLLECTION_NAME } from '../../collection-name.const';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryLoginService extends DaffInMemoryDriverBase implements DaffLoginServiceInterface {
  constructor(
    private http: HttpClient,
    config: InMemoryBackendConfig,
  ) {
    super(config, DAFF_AUTH_IN_MEMORY_COLLECTION_NAME);
  }

  login(request: DaffLoginInfo): Observable<DaffAuthToken> {
    return this.http.post<DaffAuthToken>(`${this.url}/login`, request);
  }

  logout(): Observable<void> {
    return this.http.post<{success: boolean}>(`${this.url}/logout`, {}).pipe(
      switchMap(({ success }) => success ? of(undefined) : throwError(() => new Error('Logout failed'))),
    );
  }
}
