import { Injectable } from '@angular/core';
import {
  Store,
  select,
  Action,
} from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffCustomerStoreCredit } from '@daffodil/customer-store-credit';

import {
  DaffCustomerStoreCreditReducerState,
  DaffCustomerStoreCreditStateRootSlice,
} from '../../reducers/public_api';
import { daffCustomerStoreCreditGetSelectors } from '../../selectors/public_api';
import { DaffCustomerStoreCreditPageFacadeInterface } from './interface';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCustomerStoreCreditPageFacade<T extends DaffCustomerStoreCredit = DaffCustomerStoreCredit> implements DaffCustomerStoreCreditPageFacadeInterface<T> {
  storeCredit$: Observable<T>;
  loadingState$: Observable<DaffCustomerStoreCreditReducerState['daffState']>;
  loading$: Observable<boolean>;
  resolving$: Observable<boolean>;
  mutating$: Observable<boolean>;
  errors$: Observable<DaffCustomerStoreCreditReducerState['daffErrors']>;
  hasErrors$: Observable<boolean>;

  constructor(
    private store: Store<DaffCustomerStoreCreditStateRootSlice>,
  ) {
    const {
      selectStoreCredit,
      selectErrors,
      selectHasErrors,
      selectLoading,
      selectLoadingState,
      selectMutating,
      selectResolving,
    } = daffCustomerStoreCreditGetSelectors<T>();

    this.storeCredit$ = this.store.pipe(select(selectStoreCredit));
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
