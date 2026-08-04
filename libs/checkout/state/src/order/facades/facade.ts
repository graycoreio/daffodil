import { Injectable } from '@angular/core';
import {
  Action,
  Store,
  select,
} from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffCheckoutOrderResult } from '@daffodil/checkout';
import {
  DaffState,
  DaffStateError,
} from '@daffodil/core/state';

import { DaffCheckoutOrderFacadeInterface } from './interface';
import { DaffCheckoutStateRootSlice } from '../../reducers/root-slice.interface';
import { daffCheckoutOrderSelectorsFactory } from '../selectors/order.selector';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCheckoutOrderFacade<
  T extends DaffCheckoutOrderResult = DaffCheckoutOrderResult,
> implements DaffCheckoutOrderFacadeInterface<T> {
  orderResultLoading$: Observable<DaffState>;
  orderResultErrors$: Observable<Array<DaffStateError>>;
  orderResult$: Observable<T>;
  hasOrderResult$: Observable<boolean>;

  constructor(
    private store: Store<DaffCheckoutStateRootSlice>,
  ) {
    const {
      selectCheckoutOrderValue,
      selectHasOrderResult,
      selectErrors,
      selectLoadingState,
    } = daffCheckoutOrderSelectorsFactory<T>();

    this.orderResultLoading$ = this.store.pipe(select(selectLoadingState));
    this.orderResultErrors$ = this.store.pipe(select(selectErrors));
    this.orderResult$ = this.store.pipe(select(selectCheckoutOrderValue));
    this.hasOrderResult$ = this.store.pipe(select(selectHasOrderResult));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
