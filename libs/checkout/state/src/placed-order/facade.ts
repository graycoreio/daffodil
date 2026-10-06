import { Injectable } from '@angular/core';
import {
  Action,
  Store,
  select,
} from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffOrder } from '@daffodil/order';

import { DaffCheckoutPlacedOrderFacadeInterface } from './facade.interface';
import { getCheckoutPlacedOrderSelectors } from './selector';
import { DaffCheckoutStateRootSlice } from '../reducers/public_api';

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
    } = getCheckoutPlacedOrderSelectors<T>();

    this.placedOrder$ = this.store.pipe(select(selectPlacedOrder));
    this.hasPlacedOrder$ = this.store.pipe(select(selectHasPlacedOrder));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
