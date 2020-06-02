import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';

import { DaffStoreFacade } from '@daffodil/core';

import { DaffOrder } from '../../models/order';

export interface DaffOrderFacadeInterface<T extends DaffOrder = DaffOrder> extends DaffStoreFacade<Action> {
  loading$: Observable<boolean>;
  errors$: Observable<string[]>;
  orders$: Observable<T[]>;
  orderIds$: Observable<(string | number)[]>;
  orderCount$: Observable<number>;
  orderEntities$: Observable<Dictionary<T>>;
}
