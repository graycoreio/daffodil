import { DaffCustomerReducerState } from './interface';

/**
 * The initial state for the main customer state, see {@link DaffCustomerReducerState}.
 */
export const daffCustomerInitialState: DaffCustomerReducerState<any> = {
  customer: null,
  loading: false,
  errors: [],
};
