import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';

import { DaffStateError } from '@daffodil/core/state';
import { DaffSearchResult } from '@daffodil/search';
import { DaffSearchFacadeInterface } from '@daffodil/search/state';

/**
 * Mocks out facade fields and methods for testing purposes.
 *
 * @inheritdoc
 */
@Injectable({ providedIn: 'root' })
export class MockDaffSearchFacade implements DaffSearchFacadeInterface {
  loading$ = new BehaviorSubject<boolean>(null);
  errors$ = new BehaviorSubject<DaffStateError[]>([]);

  recent$ = new BehaviorSubject<string[]>([]);
  searchResultIds$ = new BehaviorSubject<Record<DaffSearchResult['kind'], DaffSearchResult['id'][]>>({});
  resultCount$ = new BehaviorSubject<number>(0);

  dispatch(action: Action) {};
}
