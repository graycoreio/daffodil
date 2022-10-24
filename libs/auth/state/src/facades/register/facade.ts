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
import { DaffAuthRegisterFacadeInterface } from './facade.interface';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffAuthRegisterFacade implements DaffAuthRegisterFacadeInterface {
  loading$: Observable<boolean>;
  errors$: Observable<DaffStateError[]>;

  constructor(private store: Store<DaffAuthFeatureState>) {
    const {
      selectAuthRegisterLoading,
      selectAuthRegisterErrors,
    } = getDaffAuthSelectors();

    this.loading$ = this.store.pipe(select(selectAuthRegisterLoading));
    this.errors$ = this.store.pipe(select(selectAuthRegisterErrors));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
