import { Injectable } from '@angular/core';
import {
  Store,
  select,
  Action,
} from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffCustomerAddress } from '@daffodil/customer';

import { DaffCustomerAddressEntity } from '../../models/public_api';
import {
  daffCustomerAddressEntitiesAdapter,
  DaffCustomerAddressReducerState,
  DaffCustomerStateRootSlice,
} from '../../reducers/public_api';
import {
  daffCustomerAddressGetSelectors,
  DaffCustomerAddressSelectors,
} from '../../selectors/public_api';
import { DaffCustomerAddressPageFacadeInterface } from './interface';

// TODO: address entities?

/**
 * @inheritdoc
 *
 * Serves as the base for a customer facade.
 * Extend this class and pass in the selectors for the specific state you wish to target.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCustomerAddressPageFacade<T extends DaffCustomerAddressEntity = DaffCustomerAddressEntity> implements DaffCustomerAddressPageFacadeInterface<T> {
  private _selectAddress: DaffCustomerAddressSelectors<T>['selectAddress'];

  addresses$: Observable<T[]>;
  loadingState$: Observable<DaffCustomerAddressReducerState['loading']>;
  loading$: Observable<boolean>;
  resolving$: Observable<boolean>;
  mutating$: Observable<boolean>;
  errors$: Observable<DaffCustomerAddressReducerState['errors']>;
  hasErrors$: Observable<boolean>;

  constructor(
    private store: Store<DaffCustomerStateRootSlice>,
  ) {
    const {
      selectAddress,
      selectAddresses,
      selectErrors,
      selectHasErrors,
      selectLoading,
      selectLoadingState,
      selectMutating,
      selectResolving,
    } = daffCustomerAddressGetSelectors<T>();

    this._selectAddress = selectAddress;

    this.addresses$ = this.store.pipe(select(selectAddresses));
    this.loadingState$ = this.store.pipe(select(selectLoadingState));
    this.loading$ = this.store.pipe(select(selectLoading));
    this.resolving$ = this.store.pipe(select(selectResolving));
    this.mutating$ = this.store.pipe(select(selectMutating));
    this.errors$ = this.store.pipe(select(selectErrors));
    this.hasErrors$ = this.store.pipe(select(selectHasErrors));
  }

  getAddress(id: T['id']): Observable<T> {
    return this.store.pipe(select(this._selectAddress(id)));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
