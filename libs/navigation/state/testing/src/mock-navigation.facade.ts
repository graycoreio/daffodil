import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { DaffStateError } from '@daffodil/core/state';
import { DaffGenericNavigationTree } from '@daffodil/navigation';
import { DaffNavigationFacadeInterface } from '@daffodil/navigation/state';

/**
 * A mock of the DaffNavigationFacade used to remove any interaction with the ngrx store.
 * This mock should be imported into tests using the DaffNavigationStateTestingModule.
 *
 * @inheritdoc
 */
@Injectable({ providedIn: 'root' })
export class MockDaffNavigationFacade<T extends DaffGenericNavigationTree<T>> implements DaffNavigationFacadeInterface<T> {
  loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  tree$: BehaviorSubject<T> = new BehaviorSubject(null);
  errors$: BehaviorSubject<DaffStateError[]> = new BehaviorSubject([]);
  dispatch(action) { }
}
