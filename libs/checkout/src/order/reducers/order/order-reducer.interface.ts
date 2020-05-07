import { DaffOrder } from '../../../models/order/order';

/**
 * @deprecated
 */
export interface DaffOrderReducerState {
  order: DaffOrder,
  loading: boolean,
  errors: string[]
}
