import { Injectable } from '@angular/core';
import {
  Action,
  Store,
  select,
} from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffStateError } from '@daffodil/core/state';
import { DaffCustomer } from '@daffodil/customer';

import { DaffCustomerStateRootSlice } from '../../reducers/public_api';
import { daffCustomerGetSelectors } from '../../selectors/public_api';
import { DaffCustomerPageFacadeInterface } from './interface';

/**
 * @inheritdoc
 *
 * Serves as the base for a customer facade.
 * Extend this class and pass in the selectors for the specific state you wish to target.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCustomerPageFacade<T extends DaffCustomer = DaffCustomer> implements DaffCustomerPageFacadeInterface<T> {
  customer$: Observable<T>;
  loading$: Observable<boolean>;
  errors$: Observable<DaffStateError[]>;

  constructor(
    private store: Store<DaffCustomerStateRootSlice>,
  ) {
    const {
      selectCustomer,
      selectCustomerLoading,
      selectCustomerErrors,
    } = daffCustomerGetSelectors<T>();

    this.customer$ = this.store.pipe(select(selectCustomer));
    this.loading$ = this.store.pipe(select(selectCustomerLoading));
    this.errors$ = this.store.pipe(select(selectCustomerErrors));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
