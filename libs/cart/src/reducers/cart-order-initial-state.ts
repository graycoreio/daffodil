import { DaffCartOrderReducerState } from './cart-order-state.interface';

export const daffCartOrderInitialState: DaffCartOrderReducerState<any> = {
  order: {
    id: null
  },
  loading: false,
  errors: []
};
