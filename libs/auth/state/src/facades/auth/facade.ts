import { Injectable } from '@angular/core';
import {
  Action,
  Store,
  select,
} from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffStateError } from '@daffodil/core/state';

import { DaffAuthStateRootSlice } from '../../reducers/public_api';
import { getDaffAuthSelectors } from '../../selectors/public_api';
import { DaffAuthFacadeInterface } from './facade.interface';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffAuthFacade implements DaffAuthFacadeInterface {
  loading$: Observable<boolean>;
  errors$: Observable<DaffStateError[]>;
  loggedIn$: Observable<boolean>;

  constructor(private store: Store<DaffAuthStateRootSlice>) {
    const {
      selectLoading,
      selectErrors,
      selectAuthLoggedIn,
    } = getDaffAuthSelectors();

    this.loading$ = this.store.pipe(select(selectLoading));
    this.errors$ = this.store.pipe(select(selectErrors));
    this.loggedIn$ = this.store.pipe(select(selectAuthLoggedIn));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
