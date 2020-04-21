import { DaffCartOrderReducerState } from './cart-order-state.interface';

export const daffCartOrderInitialState: DaffCartOrderReducerState<any> = {
  cartOrderResult: {
    id: null
  },
  loading: false,
  errors: []
};
