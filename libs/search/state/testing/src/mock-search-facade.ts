import { Injectable } from '@angular/core';
import { Dictionary } from '@ngrx/entity';
import { Action } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';

import { DaffStateError } from '@daffodil/core/state';
import {
  DaffSearchResult,
  DaffSearchResultCollection,
} from '@daffodil/search';
import { DaffSearchFacadeInterface } from '@daffodil/search/state';

/**
 * Mocks out facade fields and methods for testing purposes.
 *
 * @inheritdoc
 */
@Injectable({ providedIn: 'root' })
export class MockDaffSearchFacade implements DaffSearchFacadeInterface {
  loading$: BehaviorSubject<boolean> = new BehaviorSubject(null);
  errors$: BehaviorSubject<DaffStateError[]> = new BehaviorSubject([]);

  searchResults$: BehaviorSubject<DaffSearchResultCollection> = new BehaviorSubject({});
  searchResultIds$: BehaviorSubject<DaffSearchResult['id'][]> = new BehaviorSubject([]);
  searchResultCount$: BehaviorSubject<number> = new BehaviorSubject(null);
  searchResultEntities$: BehaviorSubject<Dictionary<DaffSearchResult>> = new BehaviorSubject({});

  getSearch$(searchResultId: DaffSearchResult['id']): BehaviorSubject<DaffSearchResult> {
    return new BehaviorSubject(null);
  }

  dispatch(action: Action) {};
}
