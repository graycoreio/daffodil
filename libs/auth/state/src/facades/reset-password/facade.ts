import { Injectable } from '@angular/core';
import {
  Action,
  Store,
  select,
} from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffAuthResetPasswordInfo } from '@daffodil/auth';
import { DaffStateError } from '@daffodil/core/state';

import { DaffAuthResetPasswordFacadeInterface } from './facade.interface';
import { DaffAuthStateRootSlice } from '../../reducers/public_api';
import { daffAuthResetPasswordSelectorFactory } from '../../selectors/reset-password/selector';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffAuthResetPasswordFacade implements DaffAuthResetPasswordFacadeInterface {
  token$: Observable<DaffAuthResetPasswordInfo['token']>;

  loading$: Observable<boolean>;
  errors$: Observable<DaffStateError[]>;

  constructor(private store: Store<DaffAuthStateRootSlice>) {
    const {
      selectLoading,
      selectErrors,
      selectAuthResetPasswordToken,
    } = daffAuthResetPasswordSelectorFactory();

    this.token$ = this.store.pipe(select(selectAuthResetPasswordToken));

    this.loading$ = this.store.pipe(select(selectLoading));
    this.errors$ = this.store.pipe(select(selectErrors));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
