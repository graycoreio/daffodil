import { Injectable } from '@angular/core';
import {
  Observable,
  of,
} from 'rxjs';

import {
  DaffSearchResultCollection,
  daffSearchTransformResultsToCollection,
} from '@daffodil/search';
import {
  DaffSearchDriverInterface,
  DaffSearchDriverOptions,
  DaffSearchDriverResponse,
} from '@daffodil/search/driver';
import { DaffSearchResultKindFactory } from '@daffodil/search/testing';

/**
 * A basic search driver that creates mock search results of different kinds.
 * For testing purposes.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffTestingSearchDriver implements DaffSearchDriverInterface {

  constructor(
    private searchResultFactory: DaffSearchResultKindFactory,
  ) {}

  search(query: string, options: DaffSearchDriverOptions = {}): Observable<DaffSearchDriverResponse> {
    const limit = options.limit || 5;
    return of({
      collection: daffSearchTransformResultsToCollection(this.searchResultFactory.createMany(limit)),
      metadata: {},
    });
  }

  incremental(query: string, options: DaffSearchDriverOptions = {}): Observable<DaffSearchResultCollection> {
    const limit = options.limit || 5;
    return of(daffSearchTransformResultsToCollection(this.searchResultFactory.createMany(limit)));
  }
}
