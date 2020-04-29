import { DaffOrder } from '../../../models/order/order';

export interface DaffOrderReducerState {
  order: DaffOrder,
  loading: boolean,
  errors: string[]
}
