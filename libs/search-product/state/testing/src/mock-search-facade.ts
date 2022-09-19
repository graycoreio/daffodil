import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';

import { DaffFilters } from '@daffodil/core';
import { DaffProduct } from '@daffodil/product';
import { DaffSearchProductFacadeInterface } from '@daffodil/search-product/state';

/**
 * Mocks out facade fields and methods for testing purposes.
 *
 * @inheritdoc
 */
@Injectable({ providedIn: 'root' })
export class MockDaffSearchProductFacade implements DaffSearchProductFacadeInterface {
  filters$ = new BehaviorSubject<DaffFilters>({});
  appliedFilters$ = new BehaviorSubject<DaffFilters>({});
  productResults$ = new BehaviorSubject<DaffProduct[]>([]);

  dispatch(action: Action) {};
}
