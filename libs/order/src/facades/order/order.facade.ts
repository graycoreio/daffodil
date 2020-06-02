import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Action, Store, select } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';

import { DaffOrderReducersState } from '../../reducers/public_api';
import {
  getDaffOrderSelectors
} from '../../selectors/public_api';
import { DaffOrder } from '../../models/order';
import { DaffOrderFacadeInterface } from './order-facade.interface';

@Injectable({
  providedIn: 'root'
})
export class DaffOrderFacade<T extends DaffOrder = DaffOrder> implements DaffOrderFacadeInterface<T> {
  loading$: Observable<boolean>;
  errors$: Observable<string[]>;

  orders$: Observable<T[]>;
  orderIds$: Observable<(string | number)[]>;
  orderCount$: Observable<number>;
  orderEntities$: Observable<Dictionary<T>>;

  constructor(private store: Store<DaffOrderReducersState<T>>) {
    const {
      selectOrderIds,
      selectOrderEntities,
      selectAllOrders,
      selectOrderTotal,
      selectOrderLoading,
      selectOrderErrors
    } = getDaffOrderSelectors<T>();

    this.loading$ = this.store.pipe(select(selectOrderLoading));
    this.errors$ = this.store.pipe(select(selectOrderErrors));

    this.orders$ = this.store.pipe(select(selectAllOrders));
    this.orderIds$ = this.store.pipe(select(selectOrderIds));
    this.orderCount$ = this.store.pipe(select(selectOrderTotal));
    this.orderEntities$ = this.store.pipe(select(selectOrderEntities));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
