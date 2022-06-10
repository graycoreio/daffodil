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
  DaffProductCollectionRequest,
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
  request$: BehaviorSubject<DaffProductCollectionRequest> = new BehaviorSubject(null);
  totalProducts$: BehaviorSubject<number> = new BehaviorSubject(0);
  currentPage$: BehaviorSubject<number> = new BehaviorSubject(0);
  totalPages$: BehaviorSubject<number> = new BehaviorSubject(0);
  pageSize$: BehaviorSubject<number> = new BehaviorSubject(0);
  filters$: BehaviorSubject<Dict<DaffProductFilter>> = new BehaviorSubject({});
  sortOptions$: BehaviorSubject<DaffSortOption[]> = new BehaviorSubject([]);
  appliedFilters$: BehaviorSubject<Dict<DaffProductFilter>> = new BehaviorSubject({});
  appliedSortOption$: BehaviorSubject<string> = new BehaviorSubject(null);
  appliedSortDirection$: BehaviorSubject<DaffSortDirectionEnum> = new BehaviorSubject(null);

  dispatch(action: Action) {};
}
