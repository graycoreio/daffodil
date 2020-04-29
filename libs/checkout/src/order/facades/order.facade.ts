import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select, Action } from '@ngrx/store';

import { DaffStoreFacade } from '@daffodil/core';
import { DaffOrderModule } from '../order.module';
import { DaffOrder } from '../../models/order/order';
import { DaffOrderReducersState } from '../reducers/order-reducers.interface';
import { selectOrder, selectLoading, selectErrors } from '../selectors/order.selector';

/**
 * A facade for accessing state for the currently selected category.
 */
@Injectable({
  providedIn: DaffOrderModule
})
export class DaffOrderFacade implements DaffStoreFacade<Action> {
  /**
   * The current order.
   */
  order$: Observable<DaffOrder>;
  /**
   * The loading state for the current order.
   */
  loading$: Observable<boolean>;
  /**
   * Any errors involved in loading the order.
   */
  errors$: Observable<string[]>;

  constructor(private store: Store<DaffOrderReducersState>) {
    this.order$ = this.store.pipe(select(selectOrder));
    this.loading$ = this.store.pipe(select(selectLoading));
    this.errors$ = this.store.pipe(select(selectErrors));
  }

  /**
   * Dispatches the given action.
   * @param action action to dispatch.
   */
  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
