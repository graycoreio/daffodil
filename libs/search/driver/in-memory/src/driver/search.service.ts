import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Observable,
  map,
} from 'rxjs';

import { DaffSearchResultCollection } from '@daffodil/search';
import {
  DaffSearchDriverInterface,
  DaffSearchDriverOptions,
  DaffSearchDriverResponse,
} from '@daffodil/search/driver';

/**
 * The search inmemory driver to mock the search backend service.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffInMemorySearchDriver implements DaffSearchDriverInterface {
  /**
   * @docs-private
   */
  url = '/api/search';

  constructor(
    private http: HttpClient,
  ) {}

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
