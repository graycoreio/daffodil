import { Observable, BehaviorSubject } from "rxjs";

import { DaffNavigationTree, DaffNavigationFacadeInterface } from "@daffodil/navigation";

/**
 * A mock of the DaffNavigationFacade used to remove any interaction with the ngrx store.
 * This mock should be imported into tests using the DaffNavigationTestingModule.
 */
export class MockDaffNavigationFacade implements DaffNavigationFacadeInterface {
  loading$: Observable<boolean> = new BehaviorSubject(false);
  tree$: Observable<DaffNavigationTree> = new BehaviorSubject(null);
  errors$: Observable<string[]> = new BehaviorSubject([]);
  dispatch() { }
}
