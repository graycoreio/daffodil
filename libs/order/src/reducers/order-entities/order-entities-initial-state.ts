import { daffGetOrderAdapter } from './order-entities-adapter';
import { DaffOrderEntityState } from './order-entities-state.interface';

/**
 * Initial state for order entity state.
 */
export const daffOrderEntitiesInitialState: DaffOrderEntityState<any> = daffGetOrderAdapter().getInitialState();
