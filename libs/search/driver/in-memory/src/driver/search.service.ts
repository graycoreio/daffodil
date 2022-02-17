import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  DaffSearchResult,
  DaffSearchResultCollection,
  daffSearchTransformResultsToCollection,
} from '@daffodil/search';
import { DaffSearchDriverInterface } from '@daffodil/search/driver';

/**
 * The search inmemory driver to mock the search backend service.
 *
 * @inheritdoc
 * @Param HttpClient
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

  search(query: string): Observable<DaffSearchResultCollection> {
    return this.http.get<DaffSearchResult[]>(`${this.url}?query=${query}`).pipe(
      map(daffSearchTransformResultsToCollection),
    );
  }
}
