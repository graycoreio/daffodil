import { DaffLoadingState } from '@daffodil/core';

import { DaffCartOrderReducerState } from './cart-order-state.interface';

export const daffCartOrderInitialState: DaffCartOrderReducerState<any> = {
  cartOrderResult: {
    id: null,
    orderId: null,
    cartId: null
  },
  loading: DaffLoadingState.Complete,
  errors: []
};
