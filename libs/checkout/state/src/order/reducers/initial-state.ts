import { daffOperationInitialState } from '@daffodil/core/state';

import { DaffCheckoutOrderReducerState } from './state.interface';

export const daffCheckoutOrderInitialState: DaffCheckoutOrderReducerState<any> = {
  ...daffOperationInitialState,
  orderResult: {
    orderId: null,
    cartId: null,
  },
};
