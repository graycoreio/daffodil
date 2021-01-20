import { DaffOrder } from '@daffodil/order';
import { DaffOrderActions } from '../../actions/order.actions';
import { DaffOrderReducerState } from './order-reducer.interface';
export declare function daffOrderReducer<T extends DaffOrder = DaffOrder>(state: DaffOrderReducerState, action: DaffOrderActions<T>): DaffOrderReducerState;
