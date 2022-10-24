import { Injectable } from '@angular/core';
import {
  Action,
  Store,
  select,
} from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffStateError } from '@daffodil/core/state';

import { DaffAuthFeatureState } from '../../reducers/public_api';
import { getDaffAuthSelectors } from '../../selectors/public_api';
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

  constructor(private store: Store<DaffAuthFeatureState>) {
    const {
      selectAuthLoginLoading,
      selectAuthLoginErrors,
    } = getDaffAuthSelectors();

    this.loading$ = this.store.pipe(select(selectAuthLoginLoading));
    this.errors$ = this.store.pipe(select(selectAuthLoginErrors));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
