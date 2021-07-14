import { Injectable } from '@angular/core';
import {
  Action,
  Store,
  select,
} from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffOrder } from '@daffodil/order';

import { DaffCheckoutStateRootSlice } from '../../reducers/public_api';
import { getDaffCheckoutSelectors } from '../../selectors/public_api';
import { DaffCheckoutPlacedOrderFacadeInterface } from './placed-order-facade.interface';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCheckoutPlacedOrderFacade<T extends DaffOrder = DaffOrder> implements DaffCheckoutPlacedOrderFacadeInterface<T> {
  placedOrder$: Observable<T>;
  hasPlacedOrder$: Observable<boolean>;

  constructor(private store: Store<DaffCheckoutStateRootSlice<T>>) {
    const {
      selectPlacedOrder,
      selectHasPlacedOrder,
    } = getDaffCheckoutSelectors<T>();

    this.placedOrder$ = this.store.pipe(select(selectPlacedOrder));
    this.hasPlacedOrder$ = this.store.pipe(select(selectHasPlacedOrder));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
