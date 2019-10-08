import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select, Action } from '@ngrx/store';

import { DaffNavigationModule } from '../navigation.module';
import { selectNavigationTree, selectNavigationLoading, selectNavigationErrors } from '../selectors/navigation.selector';
import { NavigationReducersState } from '../reducers/navigation-reducers.interface';
import { DaffNavigationTreeUnion } from '../models/navigation-tree-union';
import { DaffNavigationFacadeInterface } from '../interfaces/navigation-facade.interface';

@Injectable({
  providedIn: DaffNavigationModule
})
export class DaffNavigationFacade implements DaffNavigationFacadeInterface {
  /**
   * The navigation retrieved in a single navigation call.
   */
  tree$: Observable<DaffNavigationTreeUnion>;
  /**
   * The loading state for retrieving a single navigation.
   */
  loading$: Observable<boolean>;
  /**
   * Errors associated with retrieving a single navigation.
   */
  errors$: Observable<string[]>;

  constructor(private store: Store<NavigationReducersState>) {
    this.tree$ = this.store.pipe(select(selectNavigationTree));
    this.loading$ = this.store.pipe(select(selectNavigationLoading));
    this.errors$ = this.store.pipe(select(selectNavigationErrors));
  }

  /**
   * Dispatches the given action.
   * @param action action to dispatch.
   */
  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
