import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';

import { MockDaffCollectionFacade } from '@daffodil/core/state/testing';
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
export class MockDaffProductCollectionFacade extends MockDaffCollectionFacade implements DaffProductCollectionFacadeInterface {
  metadata$: BehaviorSubject<DaffProductCollectionMetadata> = new BehaviorSubject(null);
  filters$: BehaviorSubject<Record<DaffProductFilter['name'], DaffProductFilter>> = new BehaviorSubject({});
  appliedFilters$: BehaviorSubject<Record<DaffProductFilter['name'], DaffProductFilter>> = new BehaviorSubject({});

  dispatch(action: Action) {};
}
