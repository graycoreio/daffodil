import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InMemoryBackendConfig } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

import { DaffContactUnion } from '@daffodil/contact';
import { DaffContactServiceInterface } from '@daffodil/contact/driver';
import { DaffInMemoryDriverBase } from '@daffodil/driver/in-memory';

import { DAFF_CONTACT_IN_MEMORY_COLLECTION_NAME } from './collection-name.const';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryContactService extends DaffInMemoryDriverBase implements DaffContactServiceInterface<DaffContactUnion, DaffContactUnion>{
  constructor(
    private http: HttpClient,
    config: InMemoryBackendConfig,
  ) {
    super(config, DAFF_CONTACT_IN_MEMORY_COLLECTION_NAME);
  }

  send(payload: DaffContactUnion): Observable<DaffContactUnion> {
    return this.http.post<DaffContactUnion>(this.url, payload);
  }
}
