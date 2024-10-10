import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InMemoryBackendConfig } from 'angular-in-memory-web-api';
import {
  Observable,
  map,
} from 'rxjs';

import { DaffInMemoryDriverBase } from '@daffodil/driver/in-memory';
import { DaffSearchResultCollection } from '@daffodil/search';
import {
  DaffSearchDriverInterface,
  DaffSearchDriverOptions,
  DaffSearchDriverResponse,
} from '@daffodil/search/driver';

import { DAFF_SEARCH_IN_MEMORY_COLLECTION_NAME } from '../collection-name.const';

/**
 * The search inmemory driver to mock the search backend service.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffInMemorySearchDriver extends DaffInMemoryDriverBase implements DaffSearchDriverInterface {
  constructor(
    private http: HttpClient,
    config: InMemoryBackendConfig,
  ) {
    super(config, DAFF_SEARCH_IN_MEMORY_COLLECTION_NAME);
  }

  search(query: string, options: DaffSearchDriverOptions = {}): Observable<DaffSearchDriverResponse> {
    // TODO: handle options
    return this.http.get<DaffSearchDriverResponse>(`${this.url}?query=${query}`);
  }

  incremental(query: string, options: DaffSearchDriverOptions = {}): Observable<DaffSearchResultCollection> {
    // TODO: handle options
    return this.http.get<DaffSearchDriverResponse>(`${this.url}?query=${query}`).pipe(
      map(({ collection }) => collection),
    );
  }
}
