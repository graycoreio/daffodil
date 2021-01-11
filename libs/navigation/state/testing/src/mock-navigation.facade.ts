import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

import { DaffGenericNavigationTree } from '@daffodil/navigation';
import { DaffNavigationFacadeInterface } from '@daffodil/navigation/state';

/**
 * A mock of the DaffNavigationFacade used to remove any interaction with the ngrx store.
 * This mock should be imported into tests using the DaffNavigationTestingModule.
 */
@Injectable({providedIn: 'root'})
export class MockDaffNavigationFacade<T extends DaffGenericNavigationTree<T>> implements DaffNavigationFacadeInterface<T> {
  loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  tree$: BehaviorSubject<T> = new BehaviorSubject(null);
  errors$: BehaviorSubject<string[]> = new BehaviorSubject([]);
  dispatch(action) { }
}
