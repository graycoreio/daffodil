import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InMemoryBackendConfig } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

import { DaffInMemoryDriverBase } from '@daffodil/driver/in-memory';
import { DaffNavigationTree } from '@daffodil/navigation';
import { DaffNavigationServiceInterface } from '@daffodil/navigation/driver';

import { DAFF_NAVIGATION_IN_MEMORY_COLLECTION_NAME } from './collection-name.const';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryNavigationService extends DaffInMemoryDriverBase implements DaffNavigationServiceInterface<DaffNavigationTree> {
  constructor(
    private http: HttpClient,
    config: InMemoryBackendConfig,
  ) {
    super(config, DAFF_NAVIGATION_IN_MEMORY_COLLECTION_NAME);
  }

  getTree(): Observable<DaffNavigationTree> {
    return this.http.get<DaffNavigationTree>(this.url);
  }

  get(navigationId: DaffNavigationTree['id']): Observable<DaffNavigationTree> {
    return this.http.get<DaffNavigationTree>(`${this.url}/${navigationId}`);
  }
}
