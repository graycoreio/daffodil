import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InMemoryBackendConfig } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DaffAuthServiceInterface } from '@daffodil/auth/driver';
import { DaffInMemoryDriverBase } from '@daffodil/driver/in-memory';

import { DAFF_AUTH_IN_MEMORY_COLLECTION_NAME } from '../../collection-name.const';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryAuthService extends DaffInMemoryDriverBase implements DaffAuthServiceInterface {
  constructor(
    private http: HttpClient,
    config: InMemoryBackendConfig,
  ) {
    super(config, DAFF_AUTH_IN_MEMORY_COLLECTION_NAME);
  }

  check(): Observable<void> {
    return this.http.post(`${this.url}/check`, {}).pipe(
      map(() => undefined),
    );
  }
}
