import { BehaviorSubject } from 'rxjs';
import { Action } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';

import { DaffOrderFacadeInterface, DaffOrder } from '@daffodil/order';

export class MockDaffOrderFacade implements DaffOrderFacadeInterface {
  loading$: BehaviorSubject<boolean> = new BehaviorSubject(null);
  errors$: BehaviorSubject<string[]> = new BehaviorSubject([]);

  orders$: BehaviorSubject<DaffOrder[]> = new BehaviorSubject([]);
  orderIds$: BehaviorSubject<(string | number)[]> = new BehaviorSubject([]);
  orderCount$: BehaviorSubject<number> = new BehaviorSubject(null);
  orderEntities$: BehaviorSubject<Dictionary<DaffOrder>> = new BehaviorSubject({});

  dispatch(action: Action) {};
}
