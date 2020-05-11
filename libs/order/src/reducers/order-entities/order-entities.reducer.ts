import { DaffOrderActions, DaffOrderActionTypes } from '../../actions/order.actions';
import { DaffOrder } from '../../models/order';
import { getOrderAdapter } from './order-entities-adapter';
import { DaffOrderEntityState } from './order-entities-state.interface';
import { daffOrderEntitiesInitialState } from './order-entities-initial-state';

/**
 * Reducer function that catches actions and changes/overwrites order entities state.
 */
export function daffOrderEntitiesReducer<T extends DaffOrder = DaffOrder>(
  state = daffOrderEntitiesInitialState,
  action: DaffOrderActions<T>
): DaffOrderEntityState<T> {
  const adapter = getOrderAdapter<T>();

  switch (action.type) {
    case DaffOrderActionTypes.OrderLoadSuccessAction:
      return adapter.upsertOne(action.payload, state);

    case DaffOrderActionTypes.OrderListSuccessAction:
      return adapter.upsertMany(action.payload, state);

    default:
      return state;
  }
}
