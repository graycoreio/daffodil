import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';

import { Dict } from '@daffodil/core';
import {
  DaffSortDirectionEnum,
  DaffSortOption,
} from '@daffodil/core';
import {
  DaffProductCollectionMetadata,
  DaffProductFilter,
} from '@daffodil/product';
import { DaffProductCollectionFacadeInterface } from '@daffodil/product/state';

/**
 * Can be used to mock out the {@link DaffProductCollectionFacade} in testing environments.
 *
 * @inheritdoc
 */
@Injectable({ providedIn: 'root' })
export class MockDaffProductCollectionFacade implements DaffProductCollectionFacadeInterface {
  metadata$: BehaviorSubject<DaffProductCollectionMetadata> = new BehaviorSubject(null);
  currentPage$: BehaviorSubject<number> = new BehaviorSubject(null);
  totalPages$: BehaviorSubject<number> = new BehaviorSubject(null);
  pageSize$: BehaviorSubject<number> = new BehaviorSubject(null);
  filters$: BehaviorSubject<Dict<DaffProductFilter>> = new BehaviorSubject({});
  sortOptions$: BehaviorSubject<DaffSortOption[]> = new BehaviorSubject([]);
  appliedFilters$: BehaviorSubject<Dict<DaffProductFilter>> = new BehaviorSubject({});
  appliedSortOption$: BehaviorSubject<string> = new BehaviorSubject(null);
  appliedSortDirection$: BehaviorSubject<DaffSortDirectionEnum> = new BehaviorSubject(null);

  dispatch(action: Action) {};
}
