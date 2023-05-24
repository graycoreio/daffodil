import { Injectable } from '@angular/core';
import {
  Action,
  Store,
  select,
} from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffStateError } from '@daffodil/core/state';

import { DaffAuthStateRootSlice } from '../../reducers/public_api';
import { getDaffAuthLoginSelectors } from '../../selectors/login/login.selector';
import { DaffAuthLoginFacadeInterface } from './facade.interface';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffAuthLoginFacade implements DaffAuthLoginFacadeInterface {
  loading$: Observable<boolean>;
  errors$: Observable<DaffStateError[]>;

  constructor(private store: Store<DaffAuthStateRootSlice>) {
    const {
      selectLoading,
      selectErrors,
    } = getDaffAuthLoginSelectors();

    this.loading$ = this.store.pipe(select(selectLoading));
    this.errors$ = this.store.pipe(select(selectErrors));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
