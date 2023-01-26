import { DaffCartStateRootSlice } from '@daffodil/cart/state';
import { DaffOrder } from '@daffodil/order';

import { DaffOrderCollectionReducerState } from './order-collection/state.interface';
import { DaffOrderEntityState } from './order-entities/public_api';
import { DAFF_ORDER_STORE_FEATURE_KEY } from './order-store-feature-key';
import { DaffOrderReducerState } from './order/order-reducer.interface';

export interface DaffOrderReducersState<T extends DaffOrder = DaffOrder> {
  order: DaffOrderReducerState;
  orders: DaffOrderEntityState<T>;
  collection: DaffOrderCollectionReducerState;
}

export interface DaffOrderStateRootSlice<T extends DaffOrder = DaffOrder> extends DaffCartStateRootSlice {
  [DAFF_ORDER_STORE_FEATURE_KEY]: DaffOrderReducersState<T>;
}
