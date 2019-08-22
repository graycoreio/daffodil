import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select, Action } from '@ngrx/store';

import { DaffStoreFacade } from '@daffodil/core';

import { DaffNavigationTree } from '../models/navigation-tree';
import { DaffNavigationModule } from '../navigation.module';
import { selectNavigation, selectNavigationLoading, selectNavigationErrors } from '../selectors/navigation.selector';
import { NavigationReducersState } from '../reducers/navigation-reducers.interface';

@Injectable({
  providedIn: DaffNavigationModule
})
export class DaffNavigationFacade implements DaffStoreFacade<Action> {
  /**
   * The navigation retrieved in a single navigation call.
   */
  navigation$: Observable<DaffNavigationTree>;
  /**
   * The loading state for retrieving a single navigation.
   */
  loading$: Observable<boolean>;
  /**
   * Errors associated with retrieving a single navigation.
   */
  errors$: Observable<string[]>;

  constructor(private store: Store<NavigationReducersState>) {
    this.navigation$ = this.store.pipe(select(selectNavigation));
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
