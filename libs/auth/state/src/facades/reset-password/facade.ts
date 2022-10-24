import { Injectable } from '@angular/core';
import {
  Action,
  Store,
  select,
} from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffAuthResetPasswordInfo } from '@daffodil/auth';
import { DaffStateError } from '@daffodil/core/state';

import { DaffAuthFeatureState } from '../../reducers/public_api';
import { getDaffAuthSelectors } from '../../selectors/public_api';
import { DaffAuthResetPasswordFacadeInterface } from './facade.interface';

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

  constructor(private store: Store<DaffAuthFeatureState>) {
    const {
      selectAuthResetPasswordLoading,
      selectAuthResetPasswordErrors,
      selectAuthResetPasswordToken,
    } = getDaffAuthSelectors();

    this.token$ = this.store.pipe(select(selectAuthResetPasswordToken));

    this.loading$ = this.store.pipe(select(selectAuthResetPasswordLoading));
    this.errors$ = this.store.pipe(select(selectAuthResetPasswordErrors));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
