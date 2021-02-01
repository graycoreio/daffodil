import { DaffOrder } from '@daffodil/order';

import { DaffOrderEntityState } from './order-entities/public_api';
import { DaffOrderReducerState } from './order/order-reducer.interface';

export interface DaffOrderReducersState<T extends DaffOrder = DaffOrder> {
  order: DaffOrderReducerState;
  orders: DaffOrderEntityState<T>;
}
