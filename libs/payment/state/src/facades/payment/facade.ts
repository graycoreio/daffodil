import { Injectable } from '@angular/core';
import {
  Action,
  Store,
  select,
} from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffStateError } from '@daffodil/core/state';

import { DaffPaymentPageFacadeInterface } from './interface';
import { DaffPaymentStateRootSlice } from '../../reducers/public_api';
import { daffPaymentGetSelectors } from '../../selectors/public_api';

/**
 * @inheritdoc
 *
 * Serves as the base for a payment facade.
 * Extend this class and pass in the selectors for the specific state you wish to target.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffPaymentPageFacade implements DaffPaymentPageFacadeInterface {
  loading$: Observable<boolean>;
  errors$: Observable<DaffStateError[]>;

  constructor(
    private store: Store<DaffPaymentStateRootSlice>,
  ) {
    const {
      selectPaymentLoading,
      selectPaymentErrors,
    } = daffPaymentGetSelectors();

    this.loading$ = this.store.pipe(select(selectPaymentLoading));
    this.errors$ = this.store.pipe(select(selectPaymentErrors));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
