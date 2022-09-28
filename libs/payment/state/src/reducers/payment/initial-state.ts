import { DaffPaymentReducerState } from './interface';

/**
 * The initial state for the main payment state, see {@link DaffPaymentReducerState}.
 */
export const daffPaymentInitialState: DaffPaymentReducerState = {
  loading: false,
  errors: [],
};
