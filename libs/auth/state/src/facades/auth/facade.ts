import { Injectable } from '@angular/core';
import {
  Action,
  Store,
  select,
} from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffAuthToken } from '@daffodil/auth';
import { DaffStateError } from '@daffodil/core/state';

import { DaffAuthFeatureState } from '../../reducers/public_api';
import { getDaffAuthSelectors } from '../../selectors/public_api';
import { DaffAuthFacadeInterface } from './facade.interface';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffAuthFacade<T extends DaffAuthToken = DaffAuthToken> implements DaffAuthFacadeInterface {
  loading$: Observable<boolean>;
  errors$: Observable<DaffStateError[]>;

  constructor(private store: Store<DaffAuthFeatureState>) {
    const {
      selectAuthLoading,
      selectAuthErrors,
    } = getDaffAuthSelectors();

    this.loading$ = this.store.pipe(select(selectAuthLoading));
    this.errors$ = this.store.pipe(select(selectAuthErrors));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
