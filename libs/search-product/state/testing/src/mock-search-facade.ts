import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';

import {
  DaffProduct,
  DaffProductFilter,
} from '@daffodil/product';
import { DaffSearchProductFacadeInterface } from '@daffodil/search-product/state';

/**
 * Mocks out facade fields and methods for testing purposes.
 *
 * @inheritdoc
 */
@Injectable({ providedIn: 'root' })
export class MockDaffSearchProductFacade implements DaffSearchProductFacadeInterface {
  filters$ = new BehaviorSubject<Record<DaffProductFilter['name'], DaffProductFilter>>({});
  appliedFilters$ = new BehaviorSubject<Record<DaffProductFilter['name'], DaffProductFilter>>({});
  productResults$ = new BehaviorSubject<DaffProduct[]>([]);

  dispatch(action: Action) {};
}
