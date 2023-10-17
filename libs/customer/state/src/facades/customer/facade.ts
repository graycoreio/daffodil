import { Injectable } from '@angular/core';
import {
  Store,
  select,
  Action,
} from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffCustomer } from '@daffodil/customer';

import { DaffCustomerPageFacadeInterface } from './interface';
import {
  DaffCustomerReducerState,
  DaffCustomerStateRootSlice,
} from '../../reducers/public_api';
import { daffCustomerGetSelectors } from '../../selectors/public_api';

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
  loadingState$: Observable<DaffCustomerReducerState<T>['daffState']>;
  loading$: Observable<boolean>;
  resolving$: Observable<boolean>;
  mutating$: Observable<boolean>;
  errors$: Observable<DaffCustomerReducerState<T>['daffErrors']>;
  hasErrors$: Observable<boolean>;

  constructor(
    private store: Store<DaffCustomerStateRootSlice>,
  ) {
    const {
      selectCustomer,
      selectErrors,
      selectHasErrors,
      selectLoading,
      selectLoadingState,
      selectMutating,
      selectResolving,
    } = daffCustomerGetSelectors<T>();

    this.customer$ = this.store.pipe(select(selectCustomer));
    this.loadingState$ = this.store.pipe(select(selectLoadingState));
    this.loading$ = this.store.pipe(select(selectLoading));
    this.resolving$ = this.store.pipe(select(selectResolving));
    this.mutating$ = this.store.pipe(select(selectMutating));
    this.errors$ = this.store.pipe(select(selectErrors));
    this.hasErrors$ = this.store.pipe(select(selectHasErrors));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
