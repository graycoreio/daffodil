import { DaffOrder } from '../models/order';
import { DaffOrderReducerState } from './order/order-reducer.interface';
import { DaffOrderEntityState } from './order-entities/public_api';

export interface DaffOrderReducersState<T extends DaffOrder = DaffOrder> {
  order: DaffOrderReducerState;
  orders: DaffOrderEntityState<T>
}
