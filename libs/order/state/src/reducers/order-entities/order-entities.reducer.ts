import { DaffOrder } from '@daffodil/order';

import {
  DaffOrderActions,
  DaffOrderActionTypes,
} from '../../actions/order.actions';
import { daffGetOrderAdapter } from './order-entities-adapter';
import { daffOrderEntitiesInitialState } from './order-entities-initial-state';
import { DaffOrderEntityState } from './order-entities-state.interface';

/**
 * Reducer function that catches actions and changes/overwrites order entities state.
 */
export function daffOrderEntitiesReducer<T extends DaffOrder = DaffOrder>(
  state = daffOrderEntitiesInitialState,
  action: DaffOrderActions<T>,
): DaffOrderEntityState<T> {
  const adapter = daffGetOrderAdapter<T>();

  switch (action.type) {
    case DaffOrderActionTypes.OrderLoadSuccessAction:
      return adapter.upsertOne(action.payload, state);

    case DaffOrderActionTypes.OrderListSuccessAction:
      return adapter.upsertMany(action.payload, state);

    default:
      return state;
  }
}
