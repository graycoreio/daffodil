import { Injectable } from '@angular/core';
import {
  Action,
  Store,
  select,
} from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffStateError } from '@daffodil/core/state';

import { DaffAuthFacadeInterface } from './facade.interface';
import { DaffAuthStateRootSlice } from '../../reducers/public_api';
import { daffAuthSelectorFactory } from '../../selectors/auth/auth.selector';

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
    } = daffAuthSelectorFactory();

    this.loading$ = this.store.pipe(select(selectLoading));
    this.errors$ = this.store.pipe(select(selectErrors));
    this.loggedIn$ = this.store.pipe(select(selectAuthLoggedIn));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
