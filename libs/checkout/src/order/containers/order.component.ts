import {
  Component,
  OnInit,
} from '@angular/core';
import {
  Store,
  select,
} from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffOrder } from '../../models/order/order';
import { DaffOrderReducersState } from '../reducers/order-reducers.interface';
import {
  selectOrder,
  selectLoading,
} from '../selectors/order.selector';

/**
 * @deprecated
 */
@Component({
  selector: '[order-container]',
  template: '<ng-content></ng-content>',
  exportAs: 'OrderContainer',
})
export class OrderContainer implements OnInit {

  order$: Observable<DaffOrder>;
  loading$: Observable<boolean>;

  constructor(
    private store: Store<DaffOrderReducersState>,
  ) { }

  ngOnInit() {
    this.order$ = this.store.pipe(select(selectOrder));
    this.loading$ = this.store.pipe(select(selectLoading));
  }
}
