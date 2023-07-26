import { Injectable } from '@angular/core';
import {
  Store,
  select,
  Action,
} from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffCustomerPayment } from '@daffodil/customer-payment';

import { DaffCustomerPaymentEntity } from '../../models/public_api';
import {
  daffCustomerPaymentEntitiesAdapter,
  DaffCustomerPaymentReducerState,
  DaffCustomerPaymentStateRootSlice,
} from '../../reducers/public_api';
import {
  daffCustomerPaymentGetSelectors,
  DaffCustomerPaymentSelectors,
} from '../../selectors/public_api';
import { DaffCustomerPaymentPageFacadeInterface } from './interface';

// TODO: payment entities?

/**
 * @inheritdoc
 *
 * Serves as the base for a customer facade.
 * Extend this class and pass in the selectors for the specific state you wish to target.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCustomerPaymentPageFacade<T extends DaffCustomerPaymentEntity = DaffCustomerPaymentEntity> implements DaffCustomerPaymentPageFacadeInterface<T> {
  private _selectPayment: DaffCustomerPaymentSelectors<T>['selectPayment'];

  payments$: Observable<T[]>;
  loadingState$: Observable<DaffCustomerPaymentReducerState['daffState']>;
  loading$: Observable<boolean>;
  resolving$: Observable<boolean>;
  mutating$: Observable<boolean>;
  errors$: Observable<DaffCustomerPaymentReducerState['daffErrors']>;
  hasErrors$: Observable<boolean>;

  constructor(
    private store: Store<DaffCustomerPaymentStateRootSlice>,
  ) {
    const {
      selectPayment,
      selectPayments,
      selectErrors,
      selectHasErrors,
      selectLoading,
      selectLoadingState,
      selectMutating,
      selectResolving,
    } = daffCustomerPaymentGetSelectors<T>();

    this._selectPayment = selectPayment;

    this.payments$ = this.store.pipe(select(selectPayments));
    this.loadingState$ = this.store.pipe(select(selectLoadingState));
    this.loading$ = this.store.pipe(select(selectLoading));
    this.resolving$ = this.store.pipe(select(selectResolving));
    this.mutating$ = this.store.pipe(select(selectMutating));
    this.errors$ = this.store.pipe(select(selectErrors));
    this.hasErrors$ = this.store.pipe(select(selectHasErrors));
  }

  getPayment(id: T['id']): Observable<T> {
    return this.store.pipe(select(this._selectPayment(id)));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
