import { Injectable } from '@angular/core';
import {
  Store,
  select,
  Action,
} from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffStateError } from '@daffodil/core/state';
import { DaffGenericNavigationTree } from '@daffodil/navigation';

import { DaffNavigationStateRootSlice } from '../reducers/navigation-reducers.interface';
import { getDaffNavigationSelectors } from '../selectors/navigation.selector';
import { DaffNavigationFacadeInterface } from './navigation-facade.interface';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
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
  errors$: Observable<DaffStateError[]>;

  constructor(private store: Store<DaffNavigationStateRootSlice<T>>) {
    const {
      selectNavigationTree,
      selectNavigationLoading,
      selectNavigationErrors,
    } = getDaffNavigationSelectors<T>();

    this.tree$ = this.store.pipe(select(selectNavigationTree));
    this.loading$ = this.store.pipe(select(selectNavigationLoading));
    this.errors$ = this.store.pipe(select(selectNavigationErrors));
  }

  /**
   * Dispatches the given action.
   *
   * @param action action to dispatch.
   */
  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
