import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';

import {
  DaffCollectionMetadata,
  DaffCollectionRequest,
  DaffFilters,
  DaffSortDirectionEnum,
  DaffSortOption,
} from '@daffodil/core';
import { DaffCollectionFacadeInterface } from '@daffodil/core/state';

/**
 * Can be used to mock out the {@link DaffCollectionFacade} in testing environments.
 *
 * @inheritdoc
 */
@Injectable({ providedIn: 'root' })
export class MockDaffCollectionFacade implements DaffCollectionFacadeInterface {
  metadata$: BehaviorSubject<DaffCollectionMetadata> = new BehaviorSubject(null);
  request$: BehaviorSubject<DaffCollectionRequest> = new BehaviorSubject(null);
  count$: BehaviorSubject<number> = new BehaviorSubject(0);
  currentPage$: BehaviorSubject<number> = new BehaviorSubject(0);
  totalPages$: BehaviorSubject<number> = new BehaviorSubject(0);
  pageSize$: BehaviorSubject<number> = new BehaviorSubject(0);
  sortOptions$: BehaviorSubject<DaffSortOption[]> = new BehaviorSubject([]);
  appliedSortOption$: BehaviorSubject<string> = new BehaviorSubject(null);
  appliedSortDirection$: BehaviorSubject<DaffSortDirectionEnum> = new BehaviorSubject(null);
  filters$: BehaviorSubject<DaffFilters> = new BehaviorSubject({});
  appliedFilters$: BehaviorSubject<DaffFilters> = new BehaviorSubject({});

  dispatch(action: Action) {};
}
