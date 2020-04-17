import { DaffCartOrderReducerState } from './cart-order-state.interface';

export const daffCartOrderInitialState: DaffCartOrderReducerState = {
  order: {
    id: null
  },
  loading: false,
  errors: []
};
