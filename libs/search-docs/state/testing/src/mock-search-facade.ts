import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';

import { DaffFilters } from '@daffodil/core';
import { DaffSearchDocsResult } from '@daffodil/search-docs';
import { DaffSearchDocsFacadeInterface } from '@daffodil/search-docs/state';

/**
 * Mocks out facade fields and methods for testing purposes.
 *
 * @inheritdoc
 */
@Injectable({ providedIn: 'root' })
export class MockDaffSearchDocsFacade implements DaffSearchDocsFacadeInterface {
  filters$ = new BehaviorSubject<DaffFilters>({});
  appliedFilters$ = new BehaviorSubject<DaffFilters>({});
  docsResults$ = new BehaviorSubject<Array<DaffSearchDocsResult>>([]);

  dispatch(action: Action) {};
}
