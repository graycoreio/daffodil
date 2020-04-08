import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select, Action } from '@ngrx/store';

import { DaffNavigationModule } from '../navigation.module';
import { getDaffNavigationSelectors } from '../selectors/navigation.selector';
import { DaffNavigationReducersState } from '../reducers/navigation-reducers.interface';
import { DaffNavigationFacadeInterface } from '../interfaces/navigation-facade.interface';
import { DaffGenericNavigationTree } from '../models/generic-navigation-tree';

@Injectable({
  providedIn: DaffNavigationModule
})
export class DaffNavigationFacade<T extends DaffGenericNavigationTree<T>> implements DaffNavigationFacadeInterface<T> {
  /**
   * The navigation retrieved in a single navigation call.
   */
  tree$: Observable<T>;
  /**
   * The loading state for retrieving a single navigation.
   */
  loading$: Observable<boolean>;
  /**
   * Errors associated with retrieving a single navigation.
   */
  errors$: Observable<string[]>;

  constructor(private store: Store<DaffNavigationReducersState<T>>) {
		const { 
			selectNavigationTree, 
			selectNavigationLoading, 
			selectNavigationErrors 
		} = getDaffNavigationSelectors<T>();

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
