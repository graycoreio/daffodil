import { Order } from '../../../models/order/order';

export interface DaffOrderReducerState {
  order: Order,
  loading: boolean,
  errors: string[]
}
