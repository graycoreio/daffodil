import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import {
  DaffSearchResult,
  daffSearchTransformResultsToCollection,
} from '@daffodil/search';
import { DaffSearchDriverInterface } from '@daffodil/search/driver';
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

  search(query: string) {
    return of(daffSearchTransformResultsToCollection(this.searchResultFactory.createMany(5)));
  }
}
