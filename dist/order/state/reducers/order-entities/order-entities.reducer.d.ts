import { DaffOrder } from '@daffodil/order';
import { DaffOrderActions } from '../../actions/order.actions';
import { DaffOrderEntityState } from './order-entities-state.interface';
/**
 * Reducer function that catches actions and changes/overwrites order entities state.
 */
export declare function daffOrderEntitiesReducer<T extends DaffOrder = DaffOrder>(state: DaffOrderEntityState<any>, action: DaffOrderActions<T>): DaffOrderEntityState<T>;
