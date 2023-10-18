import { Injectable } from '@angular/core';
import {
  Action,
  Store,
  select,
} from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffStateError } from '@daffodil/core/state';

import { DaffAuthRegisterFacadeInterface } from './facade.interface';
import { DaffAuthStateRootSlice } from '../../reducers/public_api';
import { daffAuthRegisterSelectorFactory } from '../../selectors/register/register.selector';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffAuthRegisterFacade implements DaffAuthRegisterFacadeInterface {
  loading$: Observable<boolean>;
  errors$: Observable<DaffStateError[]>;

  constructor(private store: Store<DaffAuthStateRootSlice>) {
    const {
      selectLoading,
      selectErrors,
    } = daffAuthRegisterSelectorFactory();

    this.loading$ = this.store.pipe(select(selectLoading));
    this.errors$ = this.store.pipe(select(selectErrors));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
