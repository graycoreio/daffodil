import { Injectable } from '@angular/core';
import {
  Store,
  select,
  Action,
} from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffCartWithStoreCredit } from '@daffodil/cart-store-credit';

import { DaffCartStoreCreditPageFacadeInterface } from './interface';
import {
  DaffCartStoreCreditReducerState,
  DaffCartStoreCreditStateRootSlice,
} from '../../reducers/public_api';
import { daffCustomerStoreCreditGetSelectors } from '../../selectors/public_api';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCartStoreCreditPageFacade implements DaffCartStoreCreditPageFacadeInterface {
  loadingState$: Observable<DaffCartStoreCreditReducerState['daffState']>;
  loading$: Observable<boolean>;
  resolving$: Observable<boolean>;
  mutating$: Observable<boolean>;
  errors$: Observable<DaffCartStoreCreditReducerState['daffErrors']>;
  hasErrors$: Observable<boolean>;

  constructor(
    private store: Store<DaffCartStoreCreditStateRootSlice>,
  ) {
    const {
      selectErrors,
      selectHasErrors,
      selectLoading,
      selectLoadingState,
      selectMutating,
      selectResolving,
    } = daffCustomerStoreCreditGetSelectors();

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
